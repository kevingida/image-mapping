"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { PerspectiveCamera } from "three";

import { Environment, OrbitControls } from "@react-three/drei";
import "./style.module.scss";
import { FactoryModel } from "./factory";

const Factory = () => {
  let camera = new PerspectiveCamera(20, 1, 10, 100);
  let [x, y, z] = [2, 7, 20];
  camera.position.set(x, y, z);
  camera.lookAt(100, 100, 100);
  return (
    <Canvas
      camera={camera}
      style={{ height: "100vh", backgroundColor: "#eeebe3" }}
    >
      <OrbitControls maxPolarAngle={Math.PI * 0.5} />
      <Environment preset="park" />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 1, 10]} />
      <FactoryModel />
    </Canvas>
  );
};

export default Factory;
