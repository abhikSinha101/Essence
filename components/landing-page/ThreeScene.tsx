"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShader from "!!raw-loader!../shaders/vertex.glsl";
import fragmentShader from "!!raw-loader!../shaders/fragment.glsl";

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
    console.log("ThreeScene component mounted");
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = renderRef.current;

    // Set up your Three.js scene, camera, and renderer here
    // Example: Add a cube to the scene

    const geometry = new THREE.PlaneGeometry(innerWidth, innerHeight);

    const gradientMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });

    const plane = new THREE.Mesh(geometry, gradientMaterial);

    scene.add(plane);

    // Set up camera position
    camera.position.z = 5;

    // Set up renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Perform animations or updates here
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(100, 100);
      console.log(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    console.log("ThreeScene component unmounted");
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        id="three-container"
        className="absolute  top-0 left-0 m-0 p-0 w-full h-full"
      ></div>
      {/**<div className="absolute w-full  text-light-1 overflow-hidden">
        <LandingPage />
      </div>*/}
    </div>
  );
};

export default ThreeScene;

//TODO make canvas responsive
//TODO landing page ui
//TODO gradient for canvas
