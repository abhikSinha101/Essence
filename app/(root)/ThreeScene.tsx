"use client";

import LandingPage from "@/components/landing-page/LandingPage";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );
  const renderRef = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer());

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = renderRef.current;

    // Set up your Three.js scene, camera, and renderer here
    // Example: Add a cube to the scene

    const geometry = new THREE.PlaneGeometry(10, 5);
    const material = new THREE.MeshBasicMaterial({ color: "#f44336" });
    const plane = new THREE.Mesh(geometry, material);

    plane.position.y = 1;
    scene.add(plane);

    // Set up camera position
    camera.position.z = 5;

    // Set up renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Perform animations or updates here
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        id="three-container"
        className="absolute top-0 left-0 m-0 p-0 w-full h-full"
      ></div>
      <div className="absolute top-4 left-4 text-light-1">
        <LandingPage />
        <h1>Hello, 3D World!</h1>
        <p>This is a sample text overlay.</p>
      </div>
    </div>
  );
};

export default ThreeScene;

//TODO make canvas responsive
//TODO landing page ui
//TODO gradient for canvas
