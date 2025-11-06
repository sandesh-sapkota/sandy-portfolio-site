/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useMemo, useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

/**
 * DeveloperModel Component
 * Loads and displays a 3D developer-themed model (laptop, desk, etc.)
 * with smooth rotation and responsive scaling
 */
export function DeveloperModel(props) {
  const {
    modelPath = "/models/developer-desk.glb",
    autoRotate = true,
    rotationSpeed = 0.005,
    scaleValue = 1,
    positionValue = [0, 0, 0],
  } = props;

  const group = useRef();
  const { scene } = useGLTF(modelPath);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);
  const opacityRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Clone the scene to avoid reusing the same instance
  const clonedScene = useMemo(() => {
    return scene.clone();
  }, [scene]);

  // Fade in animation on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle mouse down
  const handleMouseDown = (e) => {
    setMouseDown(true);
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!mouseDown || !group.current) return;

    const deltaX = e.clientX - mouseX;
    const deltaY = e.clientY - mouseY;

    targetRotationY.current += deltaX * 0.005;
    targetRotationX.current += deltaY * 0.005;

    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  // Auto-rotate, mouse control, and fade-in animation
  useFrame(() => {
    if (!group.current) return;

    // Smooth fade-in animation
    if (isLoaded && opacityRef.current < 1) {
      opacityRef.current += 0.02; // Adjust speed (0.02 = smooth 50 frames fade)
      
      // Apply opacity to all materials in the scene
      clonedScene.traverse((child) => {
        if (child.material) {
          child.material.opacity = opacityRef.current;
          child.material.transparent = true;
        }
      });
    }

    if (autoRotate && !mouseDown) {
      group.current.rotation.y += rotationSpeed;
      targetRotationY.current = group.current.rotation.y;
    }

    if (mouseDown) {
      // Smooth damping to target rotation when dragging
      group.current.rotation.x += (targetRotationX.current - group.current.rotation.x) * 0.1;
      group.current.rotation.y += (targetRotationY.current - group.current.rotation.y) * 0.1;
    }
  });

  return (
    <group
      ref={group}
      position={positionValue}
      scale={scaleValue}
      onPointerDown={handleMouseDown}
      onPointerMove={handleMouseMove}
      onPointerUp={handleMouseUp}
      onPointerLeave={handleMouseUp}
      style={{ cursor: mouseDown ? "grabbing" : "grab" }}
    >
      <primitive object={clonedScene} />
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/developer-desk.glb");

export default DeveloperModel;
