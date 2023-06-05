import { FunctionComponent, useRef } from "react";
import {useGLTF} from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
      Curve007_1: THREE.Mesh
      Curve007_2: THREE.Mesh
    }
    materials: {
      ["Material.001"]: THREE.MeshStandardMaterial
      ["Material.002"]: THREE.MeshStandardMaterial
    }
  }

export const Demon: FunctionComponent = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/demon/demon.gltf") as GLTFResult;
  // const {nodes, materials} = useLoader(GLTFLoader, "./assets/demon/demon.gltf");
  return ( 
    <group ref={group} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials["Material.001"]} />
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials["Material.002"]} />
    </group>
  );
};

useGLTF.preload("./assets/demon/demon.gltf");