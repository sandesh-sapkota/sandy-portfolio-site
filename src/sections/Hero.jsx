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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-start justify-center overflow-hidden md:items-start md:justify-start"
    >
      <ParallaxBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-start c-space pt-8 md:pt-12 lg:pt-16">
        <HeroText />
      </div>

      <figure className="pointer-events-none absolute inset-0 z-[1] h-screen w-full md:pointer-events-auto">
        <Canvas
          dpr={isMobile ? 1 : [1, 1.75]}
          style={{
            touchAction: "pan-y",
            pointerEvents: isMobile ? "none" : "auto",
          }}
          camera={{ position: [0, 1.05, 3.15], fov: 42 }}
          gl={{
            powerPreference: "high-performance",
            antialias: !isMobile,
            stencil: false,
            depth: true,
            alpha: true,
          }}
        >
          {/* Studio-grade lighting */}
          <ambientLight intensity={0.35} />
          <directionalLight
            position={[5.5, 6.5, 4]}
            intensity={1.35}
            color="#e0f2fe"
          />
          <directionalLight
            position={[-4, 2, -2]}
            intensity={0.35}
            color="#38bdf8"
          />
          <spotLight
            position={[2.5, 5, 3]}
            angle={0.35}
            penumbra={0.7}
            intensity={1.1}
            color="#7dd3fc"
            castShadow={false}
          />
          <pointLight position={[-3, 1.5, 2]} intensity={0.45} color="#67e8f9" />

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
              speed={1.1}
              rotationIntensity={0.08}
              floatIntensity={0.35}
              floatingRange={[-0.06, 0.06]}
            >
              <DeveloperModel
                modelPath="/models/mac-laptop-compressed.glb"
                autoRotate={true}
                rotationSpeed={0.004}
                scaleValue={isMobile ? 2.5 : isTablet ? 3.7 : 5.1}
                positionValue={
                  isMobile
                    ? [0, -1.8, 0]
                    : isTablet
                      ? [-0.1, -1.3, 0]
                      : [2.8, -0.55, 0]
                }
              />
            </Float>

            {!isMobile && (
              <ContactShadows
                position={[2.8, -1.55, 0]}
                opacity={0.45}
                scale={12}
                blur={2.8}
                far={5}
                color="#020617"
              />
            )}

            {!isMobile && <Rig />}
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
      [state.mouse.x * 0.16, 1.05 + state.mouse.y * 0.08, 3.15],
      0.9,
      delta
    );
    state.camera.lookAt(0.45, 0.1, 0);
  });
}

export default Hero;
