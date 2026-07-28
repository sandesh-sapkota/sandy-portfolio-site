/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Sparkles } from "@react-three/drei";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { DeveloperModel } from "../components/DeveloperModel";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";

const Hero = () => {
  // Desktop/tablet queries — default to mobile-safe values before hydration
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = !isDesktop && !isTablet;

  const modelScale = isDesktop ? 4.6 : isTablet ? 3.7 : 3.5;
  const modelPosition = isDesktop
    ? [2.5, -0.55, 0]
    : isTablet
      ? [0.15, -1.1, 0]
      : [0, -0.35, 0];

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden md:block"
    >
      <ParallaxBackground />

      {/* Text column */}
      <div className="relative z-10 mx-auto w-full max-w-7xl shrink-0 c-space pt-20 pb-2 md:pt-12 lg:pt-16 md:min-h-screen">
        <div className="md:mt-8 lg:mt-12">
          <HeroText />
        </div>
      </div>

      {/* 3D stage — stacked under text on mobile; full overlay on md+ */}
      <figure className="relative z-[1] mx-auto h-[46vh] min-h-[280px] w-full md:absolute md:inset-0 md:h-screen md:min-h-0">
        <Canvas
          dpr={isMobile ? 1 : [1, 1.75]}
          style={{
            touchAction: "pan-y",
            pointerEvents: isMobile ? "none" : "auto",
            width: "100%",
            height: "100%",
          }}
          camera={{
            position: isMobile ? [0, 0.4, 3.8] : [0, 1.05, 3.4],
            fov: isMobile ? 40 : 42,
          }}
          gl={{
            powerPreference: "high-performance",
            antialias: !isMobile,
            stencil: false,
            depth: true,
            alpha: true,
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5.5, 6.5, 4]}
            intensity={1.25}
            color="#e0f2fe"
          />
          <directionalLight
            position={[-4, 2, -2]}
            intensity={0.35}
            color="#38bdf8"
          />
          <spotLight
            position={[2.5, 5, 3]}
            angle={0.4}
            penumbra={0.7}
            intensity={isMobile ? 0.85 : 1.1}
            color="#7dd3fc"
            castShadow={false}
          />
          <pointLight position={[-3, 1.5, 2]} intensity={0.4} color="#67e8f9" />

          <Suspense fallback={null}>
            {!isMobile && (
              <Environment preset="city" environmentIntensity={0.35} />
            )}

            {!isMobile && (
              <Sparkles
                count={48}
                scale={[10, 6, 6]}
                size={1.6}
                speed={0.25}
                opacity={0.35}
                color="#a5f3fc"
                position={[1.2, 0.4, -1]}
              />
            )}

            <Float
              speed={isMobile ? 0.8 : 1.1}
              rotationIntensity={isMobile ? 0.04 : 0.08}
              floatIntensity={isMobile ? 0.15 : 0.35}
              floatingRange={isMobile ? [-0.03, 0.03] : [-0.06, 0.06]}
            >
              <DeveloperModel
                modelPath="/models/mac-laptop-compressed.glb"
                autoRotate={true}
                rotationSpeed={0.004}
                scaleValue={modelScale}
                positionValue={modelPosition}
              />
            </Float>

            {isMobile ? (
              <ContactShadows
                position={[0, -1.05, 0]}
                opacity={0.35}
                scale={8}
                blur={2.4}
                far={4}
                color="#020617"
              />
            ) : (
              <ContactShadows
                position={[1.7, -1.55, 0]}
                opacity={0.45}
                scale={12}
                blur={2.8}
                far={5}
                color="#020617"
              />
            )}

            {!isMobile && <Rig />}
            {isMobile && <MobileLookAt />}
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x * 0.14, 1.05 + state.mouse.y * 0.08, 3.4],
      0.9,
      delta
    );
    state.camera.lookAt(0.9, 0.1, 0);
  });
}

function MobileLookAt() {
  return useFrame((state) => {
    state.camera.lookAt(0, -0.1, 0);
  });
}

export default Hero;
