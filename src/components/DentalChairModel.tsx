'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ComponenteDental {
  id: number;
  categoria: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  orbit: string;
  target: string;
  position: string; // Coordenadas X Y Z del punto que señala en el modelo 3D
}

const componentes: ComponenteDental[] = [
  // 1. ESTRUCTURA DEL SILLÓN (MÓDULO DEL PACIENTE)
  {
    id: 1,
    categoria: "1. Estructura del Sillón",
    nombre: "Asiento y reposapiés",
    subtitulo: "Superficies acolchadas y ergonómicas",
    descripcion: "Zonas donde se sienta y recuesta el paciente, diseñadas para ofrecer máxima comodidad y soporte corporal durante el tratamiento.",
    orbit: "45deg 75deg 2.8m",
    target: "0m 0.2m 0m",
    position: "0 0.2 0",
  },
  {
    id: 2,
    categoria: "1. Estructura del Sillón",
    nombre: "Respaldo",
    subtitulo: "Inclinación regulable",
    descripcion: "Parte articulada que permite inclinar al paciente en distintas posiciones según las necesidades ergonómicas de la intervención.",
    orbit: "20deg 70deg 2.8m",
    target: "0m 0.6m 0m",
    position: "0 0.6 0.1",
  },
  {
    id: 3,
    categoria: "1. Estructura del Sillón",
    nombre: "Cabezal ajustable",
    subtitulo: "Soporte articular superior",
    descripcion: "Permite regular la altura y el ángulo de la cabeza del paciente para optimizar la visibilidad y el acceso a la cavidad bucal.",
    orbit: "0deg 65deg 2.5m",
    target: "0m 1.1m 0m",
    position: "0 1.1 0.05",
  },
  {
    id: 4,
    categoria: "1. Estructura del Sillón",
    nombre: "Reposabrazos",
    subtitulo: "Descanso y seguridad",
    descripcion: "Permiten al paciente apoyar los brazos cómodamente, reduciendo el estrés muscular y la tensión muscular durante los procedimientos.",
    orbit: "90deg 75deg 2.8m",
    target: "0.4m 0.4m 0m",
    position: "0.45 0.4 0",
  },
  {
    id: 5,
    categoria: "1. Estructura del Sillón",
    nombre: "Base y estructura de elevación",
    subtitulo: "Sistemas hidráulicos y electromecánicos",
    descripcion: "Soporte robusto anclado que aloja la motorización para subir, bajar o reclinar la unidad entera con total estabilidad.",
    orbit: "135deg 85deg 3.2m",
    target: "0m -0.3m 0m",
    position: "0 -0.2 0",
  },

  // 2. ELEMENTOS DE OPERACIÓN Y CONTROL
  {
    id: 6,
    categoria: "2. Operación y Control",
    nombre: "Bandeja de instrumental",
    subtitulo: "Consola del dentista",
    descripcion: "Soporte móvil articulado que contiene la manguera y herramientas rotatorias principales (turbina, micromotor y jeringa).",
    orbit: "-60deg 70deg 2.4m",
    target: "-0.4m 0.5m 0.3m",
    position: "-0.45 0.55 0.3",
  },
  {
    id: 7,
    categoria: "2. Operación y Control",
    nombre: "Pedal de control",
    subtitulo: "Interruptor multidireccional de pie",
    descripcion: "Permite activar el instrumental rotatorio, el flujo de agua y ajustar las posiciones del sillón manteniendo las manos estériles.",
    orbit: "160deg 85deg 2.8m",
    target: "0m -0.5m 0.4m",
    position: "0 -0.5 0.5",
  },
  {
    id: 8,
    categoria: "2. Operación y Control",
    nombre: "Lámpara operatoria",
    subtitulo: "Luz de alta intensidad articulada",
    descripcion: "Iluminación enfotocada orientada a la boca del paciente para garantizar una visibilidad clara, precisa y libre de sombras.",
    orbit: "-30deg 60deg 2.5m",
    target: "-0.2m 1.0m 0.3m",
    position: "-0.2 1.05 0.35",
  },

  // 3. GRUPO HÍDRICO Y DE ASPIRACIÓN
  {
    id: 9,
    categoria: "3. Grupo Hídrico",
    nombre: "Escupidera / Cuspidor",
    subtitulo: "Pica de enjuague higiénica",
    descripcion: "Taza de cerámica/vidrio para el aclarado bucal del paciente, equipada con grifos automáticos para llenado y limpieza.",
    orbit: "110deg 65deg 2.4m",
    target: "0.4m 0.4m 0.1m",
    position: "0.4 0.45 0.1",
  },
  {
    id: 10,
    categoria: "3. Grupo Hídrico",
    nombre: "Sistema de aspiración",
    subtitulo: "Cánulas y circuito de succión",
    descripcion: "Mangueras de alto volumen que absorben de forma continua el exceso de saliva, agua, sangre o restos quirúrgicos.",
    orbit: "120deg 75deg 2.3m",
    target: "0.5m 0.3m -0.1m",
    position: "0.48 0.3 -0.1",
  },
  {
    id: 11,
    categoria: "3. Grupo Hídrico",
    nombre: "Sistema de agua destilada",
    subtitulo: "Depósito pressurizado de pureza",
    descripcion: "Tanque auxiliar de suministro continuo de agua purificada para los instrumentos rotatorios, previniendo contaminaciones.",
    orbit: "140deg 80deg 2.5m",
    target: "0.3m 0.1m -0.2m",
    position: "0.35 0.1 -0.2",
  },

  // 4. COMPONENTES Y ACCESORIOS AUXILIARES
  {
    id: 12,
    categoria: "4. Accesorios Auxiliares",
    nombre: "Módulo del asistente",
    subtitulo: "Consola secundaria de apoyo",
    descripcion: "Panel articulado con mandos y mangueras independientes para el trabajo colaborativo del higienista o auxiliar dental.",
    orbit: "100deg 70deg 2.5m",
    target: "0.5m 0.5m 0.2m",
    position: "0.52 0.5 0.2",
  },
  {
    id: 13,
    categoria: "4. Accesorios Auxiliares",
    nombre: "Jeringa triple",
    subtitulo: "Inyector de aire, agua y spray",
    descripcion: "Dispositivo multifunción acoplado a la manguera para limpiar, refrescar y secar el campo operatorio con precisión.",
    orbit: "-45deg 65deg 2.2m",
    target: "-0.3m 0.6m 0.2m",
    position: "-0.35 0.6 0.2",
  },
];

export default function DentalChairModel() {
  const [activeId, setActiveId] = useState<number>(1);
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Carga de la librería oficial de visualización 3D
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

  const compActual = componentes.find((c) => c.id === activeId) || componentes[0];

  const seleccionarComponente = (comp: ComponenteDental) => {
    setActiveId(comp.id);
    if (modelViewerRef.current) {
      // Mover la cámara orbital
      modelViewerRef.current.cameraOrbit = comp.orbit;
      modelViewerRef.current.cameraTarget = comp.target;

      // Mover el punto interactivo (Hotspot) a las nuevas coordenadas
      const hotspot = modelViewerRef.current.querySelector('[slot="hotspot-target"]');
      if (hotspot) {
        hotspot.setAttribute('data-position', comp.position);
      }
    }
  };

  return (
    <div className="w-full bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        
        {/* VISOR 3D (Columna Izquierda) */}
        <div className="lg:col-span-7 h-[450px] lg:h-auto relative bg-gradient-to-b from-slate-900 to-slate-950">
          {/* @ts-ignore */}
          <model-viewer
            ref={modelViewerRef}
            src="/sillon.glb"
            alt="Modelo 3D Sillón Dental"
            camera-controls
            touch-action="pan-y"
            camera-orbit={compActual.orbit}
            camera-target={compActual.target}
            shadow-intensity="1.2"
            interpolation-decay="150"
            style={{ width: '100%', height: '100%', backgroundColor: '#0f172a' }}
          >
            {/* Punto interactivo dinámico que señala la zona exacta */}
            {/* @ts-ignore */}
            <button
              slot="hotspot-target"
              data-position={compActual.position}
              data-normal="0 1 0"
              className="relative group cursor-pointer focus:outline-none"
            >
              <span className="absolute -inset-2 rounded-full bg-brand-mint/40 animate-ping"></span>
              <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-brand-mint text-slate-950 font-bold text-xs shadow-lg border-2 border-white">
                {compActual.id}
              </span>
            </button>
            {/* @ts-ignore */}
          </model-viewer>

          {/* Etiqueta indicadora superpuesta */}
          <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-xs font-mono text-brand-mint flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
            Vistas de Componentes Dentales
          </div>
        </div>

        {/* PANEL DE SELECCIÓN E INFORMACIÓN (Columna Derecha) */}
        <div className="lg:col-span-5 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-slate-900/50">
          
          {/* Ficha descriptiva del elemento seleccionado */}
          <div className="mb-6 bg-slate-900/80 p-5 rounded-xl border border-slate-800">
            <span className="text-xs font-mono tracking-widest text-brand-mint uppercase block mb-1">
              {compActual.categoria} · Componente #{compActual.id}
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              {compActual.nombre}
            </h3>
            <p className="text-xs font-medium text-slate-400 mb-3">
              {compActual.subtitulo}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {compActual.descripcion}
            </p>
          </div>

          {/* Selector de componentes organizados */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider sticky top-0 bg-slate-900/95 py-1 backdrop-blur-sm z-10">
              Selecciona una parte del sillón:
            </p>

            <div className="space-y-2">
              {componentes.map((c) => {
                const isSelected = activeId === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => seleccionarComponente(c)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-display transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-brand-mint/10 border-brand-mint text-brand-mint font-bold shadow-sm'
                        : 'bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="truncate max-w-[80%]">
                      {c.id}. {c.nombre}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-brand-mint text-slate-950 font-bold'
                          : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      Ver
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}