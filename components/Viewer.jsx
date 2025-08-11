"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
}

export default function Viewer() {
  return (
    <Canvas camera={{ position: [0, 1.2, 3], fov: 45 }}>
      <hemisphereLight intensity={0.9} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} />
      <Suspense fallback={null}>
        <Model url="/models/model.glb" />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableDamping />
    </Canvas>
  );
}
