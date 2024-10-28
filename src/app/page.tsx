"use client";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <div id="canvas-container" style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 0, 10]} intensity={1} />
        <mesh position={[1, 0, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
          <p>commit</p>
        </mesh>
      </Canvas>
    </div>
  );
}
