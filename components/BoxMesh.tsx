import { FunctionComponent, useRef } from "react";
import { Mesh } from "three";
import { useRotation } from "../hooks/useRotation";

export const BoxMesh: FunctionComponent = () => {
  
  const boxRef = useRef<Mesh>();
  useRotation({ref: boxRef});
  return (
    <mesh position={[3,2,1]} ref={boxRef}>
      <boxGeometry args={[1,1,1]} />
      <meshNormalMaterial />
    </mesh>
  );
};