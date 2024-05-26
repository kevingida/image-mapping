"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import "./style.module.scss";
import { FactoryModel } from "../../components/factory";

const Factory = () => {
  return (
    <Canvas style={{ height: "100vh", backgroundColor: "#eeebe3" }}>
      <OrbitControls />
      <Environment preset="park" />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 1, 10]} />
      <FactoryModel />
    </Canvas>
  );
};

export default Factory;
