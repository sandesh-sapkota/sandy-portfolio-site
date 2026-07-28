import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useMediaQuery } from "react-responsive";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, .cursor-pointer, .cursor-grab";

/**
 * Site-wide cursor ambience — soft spotlight + minimal ring.
 * Desktop / fine-pointer only; never replaces the native cursor.
 */
export default function CursorGlow() {
  const isTouch = useMediaQuery({ query: "(hover: none), (pointer: coarse)" });
  const isNarrow = useMediaQuery({ maxWidth: 767 });
  const prefersReduced = useReducedMotion();
  const disabled = isTouch || isNarrow || prefersReduced;

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const spotlightX = useSpring(rawX, {
    stiffness: 120,
    damping: 28,
    mass: 0.6,
  });
  const spotlightY = useSpring(rawY, {
    stiffness: 120,
    damping: 28,
    mass: 0.6,
  });
  const ringX = useSpring(rawX, { stiffness: 280, damping: 28, mass: 0.35 });
  const ringY = useSpring(rawY, { stiffness: 280, damping: 28, mass: 0.35 });

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const onOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      setHovering(Boolean(target.closest(INTERACTIVE)));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [disabled, rawX, rawY]);

  if (disabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9990] hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: spotlightX,
          y: spotlightY,
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, rgba(56, 189, 248, 0.03) 35%, transparent 68%)",
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: visible ? (hovering ? 0.7 : 0.45) : 0,
          backgroundColor: hovering
            ? "rgba(34, 211, 238, 0.06)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />

      <motion.div
        className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/80"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 0.85 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
