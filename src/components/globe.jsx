import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useMotionValue, useSpring } from "motion/react";
import createGlobe from "cobe";

const MOVEMENT_DAMPING = 1400;
const MOBILE_BREAKPOINT = 768;
const RESIZE_DEBOUNCE_MS = 150;

// Reduced quality config for mobile devices
const GLOBE_CONFIG_MOBILE = {
  width: 400,
  height: 400,
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 8000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

// Custom hook for mobile detection
function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    
    checkMobile();

    let timeoutId;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener("resize", debouncedCheck);
    return () => {
      window.removeEventListener("resize", debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
}

export function Globe({ className = "", config = GLOBE_CONFIG }) {
  const phi = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef(null);
  
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Memoize config selection
  const selectedConfig = useMemo(
    () => (isMobile ? GLOBE_CONFIG_MOBILE : config),
    [isMobile, config]
  );

  // Memoized pointer interaction handlers
  const updatePointerInteraction = useCallback((value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback((clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  }, [r]);

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = e.clientX;
    updatePointerInteraction(e.clientX);
  }, [updatePointerInteraction]);

  const handlePointerUp = useCallback(() => {
    updatePointerInteraction(null);
  }, [updatePointerInteraction]);

  const handleMouseMove = useCallback((e) => {
    updateMovement(e.clientX);
  }, [updateMovement]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches[0]) {
      updateMovement(e.touches[0].clientX);
    }
  }, [updateMovement]);

  // Initialize globe
  useEffect(() => {
    if (!canvasRef.current) return;

    const updateWidth = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    updateWidth();

    const pixelRatio = isMobile ? 1 : 2;
    
    globeRef.current = createGlobe(canvasRef.current, {
      ...selectedConfig,
      width: widthRef.current * pixelRatio,
      height: widthRef.current * pixelRatio,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi.current += 0.005;
        }
        state.phi = phi.current + rs.get();
        state.width = widthRef.current * pixelRatio;
        state.height = widthRef.current * pixelRatio;
      },
    });

    // Fade in after creation
    const fadeTimer = setTimeout(() => setIsVisible(true), 50);

    // Debounced resize handler
    let resizeTimeoutId;
    const handleResize = () => {
      clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(updateWidth, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeoutId);
      clearTimeout(fadeTimer);
    };
  }, [rs, selectedConfig, isMobile]);

  return (
    <div
      className={`mx-auto aspect-[1/1] w-full max-w-[600px] ${className}`}
    >
      <canvas
        ref={canvasRef}
        className={`size-[30rem] transition-opacity duration-500 [contain:layout_paint_size] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
}

Globe.propTypes = {
 className: PropTypes.string,
 config: PropTypes.object,
};

// Demo component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Optimized Interactive Globe
        </h1>
        <Globe className="mx-auto" />
        <p className="text-white/70 mt-8 max-w-md mx-auto">
          Drag to rotate • Optimized for mobile and desktop • Smooth animations
        </p>
      </div>
    </div>
  );
}