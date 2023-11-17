"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

// Import your shaders using require
import vertexShader from "!!raw-loader!../shaders/vertex.glsl";
import fragmentShader from "!!raw-loader!../shaders/fragment.glsl";

const Gradient = (props: any) => {
  // This reference gives us direct access to the THREE.Mesh object.
  const meshRef = useRef<Mesh>();

  const uniforms = useMemo(
    () => ({
      time: { value: 1.0 },
      wireframeThickness: { value: 0.2 },
    }),
    []
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      uniforms.time.value += delta / 200;
    }
  });

  // Return the view.
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <planeGeometry args={[30, 30, 200, 200]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function App({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Update the canvas size on window resize
        canvasRef.current.style.width = window.innerWidth + "px";
        canvasRef.current.style.height = window.innerHeight + "px";
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Call the resize handler once to set the initial size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>{children}</div>

      <Canvas ref={canvasRef} id="canv" className="canvas-container">
        <color attach="background" args={["#a960ee"]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize={[2024, 2024]}
        />
        <pointLight position={[10, 0, 0]} />
        <Gradient position={[0, 0, 0]} />
      </Canvas>
    </>
  );
}
