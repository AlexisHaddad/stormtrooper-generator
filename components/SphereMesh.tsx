import { FunctionComponent, useRef } from "react";
import { Mesh } from "three";
import { useRotation } from "../hooks/useRotation";

export const SphereMesh: FunctionComponent = () => {
  
  const sphereRef = useRef<Mesh>();
  useRotation({ref: sphereRef});
  return (
    <mesh position={[0,0,0]} ref={sphereRef}>
      <sphereGeometry args={[1, 32]} />
      <meshNormalMaterial />
    </mesh>
  );
};