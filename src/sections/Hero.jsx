/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { DeveloperModel } from "../components/DeveloperModel";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767});
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space pt-8 md:pt-12 lg:pt-16">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 7, 9]} intensity={1.5} />
          <pointLight position={[-5, -5, 5]} intensity={0.5} />
          <Suspense>
            <DeveloperModel
              modelPath="/models/mac-laptop.glb"
              autoRotate={true}
              rotationSpeed={0.005}
              scaleValue={isMobile ? 2.6 : isTablet ? 3.7 : 5.1}
              positionValue={isMobile ? [0, -2.7, 0] : isTablet ? [-0.1, -1.3, 0] : [2.8, -0.5, 0]}
            />
            <Rig />
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
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
