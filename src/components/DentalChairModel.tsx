'use client';

import React, { useEffect, useRef, useState } from 'react';

const pasos = [
  {
    id: 1,
    title: "01. Cabezal y Tapicería Ergónoma",
    sub: "SAT-01 · Confort y Posicionamiento",
    desc: "Revisión de mecanismos hidráulicos de elevación, sustitución de tapizados desgastados y calibración de retención articular.",
    orbit: "0deg 75deg 3m",
    target: "0m 0.8m 0m",
  },
  {
    id: 2,
    title: "02. Mangueras e Instrumental",
    sub: "SAT-02 · Neumática y Agua",
    desc: "Diagnóstico de fuga de presión de aire, sustitución de acoplamientos rápidos y purga de circuitos hídricos contra biofilme.",
    orbit: "90deg 80deg 2.5m",
    target: "0.3m 0.4m 0m",
  },
  {
    id: 3,
    title: "03. Pedales y Unidades de Control",
    sub: "SAT-03 · Electrónica Placa Base",
    desc: "Reparación de potenciómetros de pedal, chequeo de señales digitales de control y actualización de micromotores elécricos.",
    orbit: "180deg 85deg 2.5m",
    target: "0m 0.1m 0m",
  },
  {
    id: 4,
    title: "04. Base e Hidráulica Principal",
    sub: "SAT-04 · Sistema de Elevación",
    desc: "Mantenimiento preventivo de bomba de aceite, cambio de juntas tóricas de sellado y nivelación estructural para la clínica.",
    orbit: "270deg 70deg 3.2m",
    target: "0m 0m 0m",
  },
];

export default function DentalChairModel() {
  const [activeStep, setActiveStep] = useState(0);
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Cargar el script de Google Model Viewer
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

  // Cambiar el ángulo de la cámara al hacer clic o scroll
  const handleStepChange = (index: number) => {
    setActiveStep(index);
    if (modelViewerRef.current) {
      const step = pasos[index];
      modelViewerRef.current.cameraOrbit = step.orbit;
      modelViewerRef.current.cameraTarget = step.target;
    }
  };

  return (
    <div className="w-full bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[550px]">
        
        {/* VISOR 3D (Columna Izquierda / Superior) */}
        <div className="lg:col-span-7 h-[400px] lg:h-auto relative bg-gradient-to-b from-slate-900 to-slate-950">
          {/* @ts-ignore */}
          <model-viewer
            ref={modelViewerRef}
            src="/sillon.glb"
            alt="Sillón Dental 3D"
            camera-controls
            touch-action="pan-y"
            camera-orbit={pasos[activeStep].orbit}
            camera-target={pasos[activeStep].target}
            shadow-intensity="1 shadow-softness=0.8"
            interpolation-decay="200"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Hotspot de diagnóstico interactivo */}
            {/* @ts-ignore */}
            <button
              slot="hotspot-1"
              data-position="0 0.5 0"
              data-normal="0 1 0"
              className="w-4 h-4 rounded-full bg-brand-mint border-2 border-white animate-ping"
            />
            {/* @ts-ignore */}
          </model-viewer>

          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/50 text-xs font-mono text-brand-mint">
            ● Modulo Interactivo 3D
          </div>
        </div>

        {/* NAVEGACIÓN Y EXPLICACIÓN (Columna Derecha) */}
        <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-slate-900/40">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-mint uppercase block mb-1">
              {pasos[activeStep].sub}
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {pasos[activeStep].title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {pasos[activeStep].desc}
            </p>
          </div>

          {/* Botones de navegación de pasos */}
          <div className="space-y-2">
            <p className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
              Selecciona componente para revisar:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {pasos.map((p, index) => (
                <button
                  key={p.id}
                  onClick={() => handleStepChange(index)}
                  className={`p-3 text-left rounded-lg text-xs font-display transition-all border ${
                    activeStep === index
                      ? 'bg-brand-mint/10 border-brand-mint text-brand-mint font-bold'
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  Paso {p.id}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}