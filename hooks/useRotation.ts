import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Mesh } from "three";

interface UseRotationProps {
  ref: RefObject<Mesh>;
}

export const useRotation = ({ref}: UseRotationProps) => {
  useFrame(({ clock }) => {
    if (ref) {
      ref.current.rotation.x = clock.getElapsedTime();
      ref.current.rotation.y = clock.getElapsedTime();  
      ref.current.rotation.z = clock.getElapsedTime();
    }
  });
};