import React from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Scene } from "three";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/Addons.js";
import { Html } from "@react-three/drei";

export function FactoryModel(props) {
  const { nodes, materials } = useGLTF("/factory.glb");
  const terrain = useLoader(TextureLoader, "/textures/terrain-2.jpg");
  const light = useLoader(TextureLoader, "/textures/light.jpg");

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  labelRenderer.domElement.style.pointerEvents = "none";
  document.body.appendChild(labelRenderer.domElement);

  const p = document.createElement("p");
  p.textContent = "ASTRAZENECA";
  const cPointLabel = new CSS2DObject(p);
  const scene = new Scene();
  scene.add(cPointLabel);
  cPointLabel.position.set(-6, 0.8, 4);
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
        <Html distanceFactor={10}>
          <div class="content">
            <button>ASTRAZENECA</button>
            ASTRAZENECA
          </div>
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
      />
    </group>
  );
}

useGLTF.preload("/factory.glb");
