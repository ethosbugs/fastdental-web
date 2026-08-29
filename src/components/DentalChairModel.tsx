'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-[#00ffaa]drei';
import { CanvasContainer } from './CanvasContainer'; // O tu contenedor equivalente

function Model() {
  // Carga el archivo desde la carpeta public
  const { scene } = useGLTF('/sillon.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Hace girar levemente el sillón automáticamente
  useFrame((state, delta) => {
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
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <Model />
        <OrbitControls enableZoom={false} autoRotate={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}