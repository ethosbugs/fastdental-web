'use client';

import React, { useEffect } from 'react';

export default function DentalChairModel() {
  useEffect(() => {
    // Carga el visor 3D oficial de Google sin dependencias pesadas
    import('@google/model-viewer');
  }, []);

  return (
    <div className="w-full h-[500px] relative bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center">
      {/* @ts-ignore */}
      <model-viewer
        src="/sillon.glb"
        alt="Modelo 3D Sillón Dental"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        style={{ width: '100%', height: '100%', backgroundColor: '#0f172a' }}
      >
        {/* @ts-ignore */}
      </model-viewer>
    </div>
  );
}