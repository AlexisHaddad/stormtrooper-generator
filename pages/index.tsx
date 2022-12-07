import React from "react";
import { Canvas } from "@react-three/fiber";
import { BoxMesh } from "../components/BoxMesh";
import { SphereMesh } from "../components/SphereMesh";


function HomePage() {

  return (
    <div>
      <h1>Stormtrooper Generator</h1>
      <div style={{height: 760, width: 1080}}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <BoxMesh />
          <SphereMesh />
        </Canvas>
      </div>
    </div>
  );
}

export default HomePage;
