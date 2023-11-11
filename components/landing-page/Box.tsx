import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object.
  const meshRef = useRef<Mesh>();

  // Hold state for hovered and clicked events.
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  // Subscribe this component to the render-loop and rotate the mesh every frame.
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  // Return the view.
  // These are regular three.js elements expressed in JSX.
  return (
    <mesh {...props} ref={meshRef} scale={clicked ? 1.5 : 1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
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
    <Canvas ref={canvasRef} id="canv" className="canvas-container">
      <color attach="background" args={["#fff"]} />
      <ambientLight intensity={4} />

      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
