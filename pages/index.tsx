import React from "react";
import { Canvas } from "@react-three/fiber";


function HomePage() {

  return (
    <div>
      <h1>Stormtrooper Generator</h1>
      <div style={{height: "90vh", width: "100vw"}}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh position={[5,2,1]}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial />
          </mesh>
          <mesh position={[0,0,0]}>
            <sphereGeometry args={[1, 32]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default HomePage;
