'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/sillon.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function DentalChairModel() {
  return (
    <div className="w-full h-[500px] relative bg-slate-900 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <React.Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </React.Suspense>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}

// Pre-cargar el modelo para evitar bloqueos
useGLTF.preload('/sillon.glb');