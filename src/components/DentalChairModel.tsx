'use client';

import React, { useEffect, useState } from 'react';

export default function DentalChairModel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carga el script de Google Model Viewer desde CDN
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
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