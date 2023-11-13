import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

// Import your shaders using require
import vertexShader from "!!raw-loader!../shaders/vertex.glsl";
import fragmentShader from "!!raw-loader!../shaders/fragment.glsl";

function Box(props: any) {
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
      uniforms.time.value += delta;
    }
  });

  // Return the view.
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <planeGeometry args={[10, 8, 100, 100]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasRef.current && typeof window !== "undefined") {
      // Access window object only on the client side
      const canvas = canvasRef.current;

      // Your canvas-related code here

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Rest of your canvas-related code
    }
  }, []);
  return (
    <Canvas ref={canvasRef} id="canv" className="canvas-container" shadows>
      <color attach="background" args={["#fff"]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize={[2024, 2024]}
      />
      <pointLight position={[10, 0, 0]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
