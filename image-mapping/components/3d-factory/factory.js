import React from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";
import toast, { Toaster } from "react-hot-toast";

export function FactoryModel(props) {
  const { nodes, materials } = useGLTF("/factory/factory.glb");
  const terrain = useLoader(TextureLoader, "/factory/textures/terrain-2.jpg");
  const light = useLoader(TextureLoader, "/factory/textures/light.jpg");

  const clicked = (area) => {
    return toast.success("success");
  };
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buildingsMerged.geometry}
        material={nodes.buildingsMerged.material}
        position={[-7.053, 0.338, -0.52]}
        rotation={[0, 0.579, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mdbaMerged.geometry}
        material={nodes.mdbaMerged.material}
        position={[6.579, 0, 0.612]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightPanelsMerged.geometry}
        material={nodes.lightPanelsMerged.material}
        position={[-2.588, -0.316, -0.629]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      >
        <Html distanceFactor={10} position={[-2, 4, -1]}>
          <button onClick={(e) => clicked(e)}>SITE RESPIRATORY</button>
          <Toaster position="top-center" reverseOrder={false} />
        </Html>
        <Html distanceFactor={10} position={[-2, 8, -1]}>
          <button onClick={(e) => clicked(e)}>SITE STERILE</button>
          <Toaster position="top-center" reverseOrder={false} />
        </Html>
        <meshStandardMaterial map={light} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.terrainMerged.geometry}
        material={nodes.terrainMerged.material}
        position={[10.388, -0.077, 2.429]}
        rotation={[0, -0.056, 0]}
      >
        <meshStandardMaterial map={terrain} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mudacDetailsMerged.geometry}
        material={nodes.mudacDetailsMerged.material}
        position={[1.768, 0, 0.262]}
      >
        <Html distanceFactor={10} position={[-5.8, 0.5, -0.8]}>
          <button onClick={(e) => clicked(e)}>Restaurant</button>
          <Toaster position="top-center" reverseOrder={false} />
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/factory.glb");
