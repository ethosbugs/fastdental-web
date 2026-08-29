'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ComponenteDental {
  id: number;
  categoria: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  nodo: string;     // nombre exacto del nodo/mesh en el GLB (ver build_chair2.py)
  orbit: string;     // theta phi radius
  target: string;    // punto que mira la cámara (centro real de la pieza, en metros)
  position: string;  // coordenadas del hotspot (mismo punto que target)
}

/**
 * Modelo: sillon_dental.glb — generado a medida (no es un asset de catálogo),
 * por lo que cada pieza es un nodo independiente con nombre semántico y
 * coordenadas EXACTAS conocidas de antemano (no estimadas).
 *
 * Sistema de coordenadas (metros, Y-up):
 *   X: negativo = lado DOCTOR (bandeja instrumental) | positivo = lado ASISTENTE (escupidera)
 *   Y: altura desde el suelo (0)
 *   Z: negativo = hacia el CABEZAL | positivo = hacia el REPOSAPIÉS
 *
 * Bounds totales del modelo: X[-1.05, 0.84] Y[0, 1.90] Z[-0.98, 1.29]
 * Centro total: (-0.06, 1.19, 0.00)
 */
const CENTRO_MODELO = { x: -0.06, y: 1.0, z: 0.0 };

const componentes: ComponenteDental[] = [
  // 1. ESTRUCTURA DEL SILLÓN (MÓDULO DEL PACIENTE)
  {
    id: 1,
    categoria: "1. Estructura del Sillón",
    nombre: "Asiento y reposapiés",
    subtitulo: "Superficies acolchadas y ergonómicas",
    descripcion: "Zonas donde se sienta y recuesta el paciente, diseñadas para ofrecer máxima comodidad y soporte corporal durante el tratamiento.",
    nodo: "asiento_reposapies",
    orbit: "25deg 68deg 2.6m",
    target: "0m 0.74m 0.68m",
    position: "0 0.74 0.68",
  },
  {
    id: 2,
    categoria: "1. Estructura del Sillón",
    nombre: "Respaldo",
    subtitulo: "Inclinación regulable",
    descripcion: "Parte articulada que permite inclinar al paciente en distintas posiciones según las necesidades ergonómicas de la intervención.",
    nodo: "respaldo",
    orbit: "15deg 65deg 2.6m",
    target: "0m 1.21m -0.28m",
    position: "0 1.21 -0.28",
  },
  {
    id: 3,
    categoria: "1. Estructura del Sillón",
    nombre: "Cabezal ajustable",
    subtitulo: "Soporte articular superior",
    descripcion: "Permite regular la altura y el ángulo de la cabeza del paciente para optimizar la visibilidad y el acceso a la cavidad bucal.",
    nodo: "cabezal",
    orbit: "0deg 62deg 2.2m",
    target: "0m 1.76m -0.57m",
    position: "0 1.76 -0.57",
  },
  {
    id: 4,
    categoria: "1. Estructura del Sillón",
    nombre: "Reposabrazos",
    subtitulo: "Descanso y seguridad",
    descripcion: "Permiten al paciente apoyar los brazos cómodamente, reduciendo el estrés muscular y la tensión muscular durante los procedimientos.",
    nodo: "reposabrazos",
    orbit: "75deg 72deg 2.4m",
    target: "0m 0.82m 0.15m",
    position: "0 0.82 0.15",
  },
  {
    id: 5,
    categoria: "1. Estructura del Sillón",
    nombre: "Base y estructura de elevación",
    subtitulo: "Sistemas hidráulicos y electromecánicos",
    descripcion: "Soporte robusto anclado que aloja la motorización para subir, bajar o reclinar la unidad entera con total estabilidad.",
    nodo: "base_elevacion",
    orbit: "40deg 80deg 2.6m",
    target: "0m 0.37m 0m",
    position: "0 0.37 0",
  },

  // 2. ELEMENTOS DE OPERACIÓN Y CONTROL
  {
    id: 6,
    categoria: "2. Operación y Control",
    nombre: "Bandeja de instrumental",
    subtitulo: "Consola del dentista",
    descripcion: "Soporte móvil articulado que contiene la manguera y herramientas rotatorias principales (turbina, micromotor y jeringa).",
    nodo: "bandeja_instrumental",
    orbit: "-65deg 68deg 2.2m",
    target: "-0.79m 1.18m 0.05m",
    position: "-0.79 1.18 0.05",
  },
  {
    id: 7,
    categoria: "2. Operación y Control",
    nombre: "Pedal de control",
    subtitulo: "Interruptor multidireccional de pie",
    descripcion: "Permite activar el instrumental rotatorio, el flujo de agua y ajustar las posiciones del sillón manteniendo las manos estériles.",
    nodo: "pedal_control",
    orbit: "160deg 85deg 2.4m",
    target: "-0.4m 0.03m 0.7m",
    position: "-0.4 0.03 0.7",
  },
  {
    id: 8,
    categoria: "2. Operación y Control",
    nombre: "Lámpara operatoria",
    subtitulo: "Luz de alta intensidad articulada",
    descripcion: "Iluminación enfocada orientada a la boca del paciente para garantizar una visibilidad clara, precisa y libre de sombras.",
    nodo: "lampara_operatoria",
    orbit: "-20deg 55deg 2.6m",
    target: "-0.18m 0.95m -0.58m",
    position: "-0.18 0.95 -0.58",
  },

  // 3. GRUPO HÍDRICO Y DE ASPIRACIÓN
  {
    id: 9,
    categoria: "3. Grupo Hídrico",
    nombre: "Escupidera / Cuspidor",
    subtitulo: "Pica de enjuague higiénica",
    descripcion: "Taza de cerámica/vidrio para el aclarado bucal del paciente, equipada con grifos automáticos para llenado y limpieza.",
    nodo: "cuspidor",
    orbit: "110deg 68deg 2.0m",
    target: "0.57m 1.06m 0.05m",
    position: "0.57 1.06 0.05",
  },
  {
    id: 10,
    categoria: "3. Grupo Hídrico",
    nombre: "Sistema de aspiración",
    subtitulo: "Cánulas y circuito de succión",
    descripcion: "Mangueras de alto volumen que absorben de forma continua el exceso de saliva, agua, sangre o restos quirúrgicos.",
    nodo: "sistema_aspiracion",
    orbit: "120deg 65deg 2.0m",
    target: "0.62m 1.23m 0.37m",
    position: "0.62 1.23 0.37",
  },
  {
    id: 11,
    categoria: "3. Grupo Hídrico",
    nombre: "Sistema de agua destilada",
    subtitulo: "Depósito presurizado de pureza",
    descripcion: "Tanque auxiliar de suministro continuo de agua purificada para los instrumentos rotatorios, previniendo contaminaciones.",
    nodo: "agua_destilada",
    orbit: "135deg 70deg 2.0m",
    target: "0.45m 1.47m -0.25m",
    position: "0.45 1.47 -0.25",
  },

  // 4. COMPONENTES Y ACCESORIOS AUXILIARES
  {
    id: 12,
    categoria: "4. Accesorios Auxiliares",
    nombre: "Módulo del asistente",
    subtitulo: "Consola secundaria de apoyo",
    descripcion: "Panel articulado con mandos y mangueras independientes para el trabajo colaborativo del higienista o auxiliar dental.",
    nodo: "modulo_asistente",
    orbit: "95deg 68deg 2.1m",
    target: "0.58m 1.22m 0.5m",
    position: "0.58 1.22 0.5",
  },
  {
    id: 13,
    categoria: "4. Accesorios Auxiliares",
    nombre: "Jeringa triple",
    subtitulo: "Inyector de aire, agua y spray",
    descripcion: "Dispositivo multifunción acoplado a la manguera para limpiar, refrescar y secar el campo operatorio con precisión.",
    nodo: "jeringa_triple",
    orbit: "-55deg 65deg 1.9m",
    target: "-0.87m 1.51m 0.02m",
    position: "-0.87 1.51 0.02",
  },
];

// Vista inicial: encuadre general de todo el sillón
const ORBIT_INICIAL = "35deg 65deg 3.6m";
const TARGET_INICIAL = `${CENTRO_MODELO.x}m ${CENTRO_MODELO.y}m ${CENTRO_MODELO.z}m`;

export default function DentalChairModel() {
  const [activeId, setActiveId] = useState<number>(0); // 0 = vista general, sin selección
  const [modelReady, setModelReady] = useState(false);
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    if (customElements.get('model-viewer')) {
      setModelReady(true);
      return;
    }
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
    script.onload = () => setModelReady(true);
    document.head.appendChild(script);
  }, []);

  const compActual = componentes.find((c) => c.id === activeId) || null;

  const seleccionarComponente = useCallback((comp: ComponenteDental) => {
    setActiveId(comp.id);
    const viewer = modelViewerRef.current;
    if (!viewer) return;
    viewer.cameraOrbit = comp.orbit;
    viewer.cameraTarget = comp.target;
  }, []);

  const volverAVistaGeneral = useCallback(() => {
    setActiveId(0);
    const viewer = modelViewerRef.current;
    if (!viewer) return;
    viewer.cameraOrbit = ORBIT_INICIAL;
    viewer.cameraTarget = TARGET_INICIAL;
  }, []);

  return (
    <div className="w-full bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

        {/* VISOR 3D (Columna Izquierda) */}
        <div className="lg:col-span-7 h-[450px] lg:h-auto relative bg-gradient-to-b from-slate-900 to-slate-950">
          {modelReady && (
            // @ts-ignore
            <model-viewer
              ref={modelViewerRef}
              src="/sillon_dental.glb"
              alt="Modelo 3D Sillón Dental"
              camera-controls
              touch-action="pan-y"
              camera-orbit={ORBIT_INICIAL}
              camera-target={TARGET_INICIAL}
              min-camera-orbit="auto auto 1.2m"
              max-camera-orbit="auto auto 6m"
              shadow-intensity="1.1"
              interpolation-decay="200"
              style={{ width: '100%', height: '100%', backgroundColor: '#0f172a' }}
            >
              {componentes.map((c) => (
                // @ts-ignore
                <button
                  key={c.id}
                  slot={`hotspot-${c.id}`}
                  data-position={c.position}
                  data-normal="0 1 0"
                  className={`relative group cursor-pointer focus:outline-none transition-opacity duration-200 ${
                    activeId === c.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onClick={() => seleccionarComponente(c)}
                >
                  <span className="absolute -inset-2 rounded-full bg-brand-mint/40 animate-ping" />
                  <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-brand-mint text-slate-950 font-bold text-xs shadow-lg border-2 border-white">
                    {c.id}
                  </span>
                </button>
              ))}
              {/* @ts-ignore */}
            </model-viewer>
          )}

          <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-xs font-mono text-brand-mint flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
            Vistas de Componentes Dentales
          </div>

          {activeId !== 0 && (
            <button
              onClick={volverAVistaGeneral}
              className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-xs font-mono text-slate-300 hover:text-white hover:border-brand-mint transition-colors"
            >
              ← Vista general
            </button>
          )}
        </div>

        {/* PANEL DE SELECCIÓN E INFORMACIÓN (Columna Derecha) */}
        <div className="lg:col-span-5 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800/80 bg-slate-900/50">

          <div className="mb-6 bg-slate-900/80 p-5 rounded-xl border border-slate-800 min-h-[180px]">
            {compActual ? (
              <>
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
              </>
            ) : (
              <>
                <span className="text-xs font-mono tracking-widest text-brand-mint uppercase block mb-1">
                  Vista general
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Sillón dental completo
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Selecciona una parte de la lista para acercar la cámara y ver su punto exacto sobre el modelo.
                </p>
              </>
            )}
          </div>

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
