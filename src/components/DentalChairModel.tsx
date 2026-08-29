'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ComponenteDental {
  id: number;
  categoria: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  orbit: string;   // theta phi radius, relativo al centro del modelo
  target: string;  // punto que mira la cámara (mismo punto que el hotspot, en metros)
  position: string; // Coordenadas X Y Z del hotspot en el espacio del modelo (metros)
}

/**
 * Coordenadas obtenidas midiendo directamente la geometría de sillon.glb
 * (bounding box real del modelo combinado):
 *   X: -32.56 .. 8.03   (eje doctor(-) <-> asistente/escupidera(+))
 *   Y:   0.61 .. 42.98   (altura, 0 = suelo)
 *   Z: -31.31 .. 17.68   (eje cabezal(-) <-> reposapiés(+))
 * NOTA: el .glb viene en unidades "grandes" (no metros reales de 1-2m).
 * <model-viewer> las usa tal cual, así que camera-target/orbit y los
 * hotspots deben expresarse en ese mismo rango, no en 0-1.5 como antes.
 */
const CENTRO_MODELO = { x: -12.27, y: 21.8, z: -6.82 };

const componentes: ComponenteDental[] = [
  // 1. ESTRUCTURA DEL SILLÓN (MÓDULO DEL PACIENTE)
  {
    id: 1,
    categoria: "1. Estructura del Sillón",
    nombre: "Asiento y reposapiés",
    subtitulo: "Superficies acolchadas y ergonómicas",
    descripcion: "Zonas donde se sienta y recuesta el paciente, diseñadas para ofrecer máxima comodidad y soporte corporal durante el tratamiento.",
    orbit: "20deg 70deg 55m",
    target: "-8.7m 11.6m 3.9m",
    position: "-8.7 11.6 3.9",
  },
  {
    id: 2,
    categoria: "1. Estructura del Sillón",
    nombre: "Respaldo",
    subtitulo: "Inclinación regulable",
    descripcion: "Parte articulada que permite inclinar al paciente en distintas posiciones según las necesidades ergonómicas de la intervención.",
    orbit: "10deg 68deg 58m",
    target: "-2m 20m -1m",
    position: "-2 20 -1",
  },
  {
    id: 3,
    categoria: "1. Estructura del Sillón",
    nombre: "Cabezal ajustable",
    subtitulo: "Soporte articular superior",
    descripcion: "Permite regular la altura y el ángulo de la cabeza del paciente para optimizar la visibilidad y el acceso a la cavidad bucal.",
    orbit: "0deg 68deg 50m",
    target: "6m 27.6m -4.1m",
    position: "6 27.6 -4.1",
  },
  {
    id: 4,
    categoria: "1. Estructura del Sillón",
    nombre: "Reposabrazos",
    subtitulo: "Descanso y seguridad",
    descripcion: "Permiten al paciente apoyar los brazos cómodamente, reduciendo el estrés muscular y la tensión muscular durante los procedimientos.",
    orbit: "70deg 75deg 55m",
    target: "-7.8m 11.1m 0.6m",
    position: "-7.8 11.1 0.6",
  },
  {
    id: 5,
    categoria: "1. Estructura del Sillón",
    nombre: "Base y estructura de elevación",
    subtitulo: "Sistemas hidráulicos y electromecánicos",
    descripcion: "Soporte robusto anclado que aloja la motorización para subir, bajar o reclinar la unidad entera con total estabilidad.",
    orbit: "35deg 82deg 58m",
    target: "-10.8m 7.2m -1m",
    position: "-10.8 7.2 -1",
  },

  // 2. ELEMENTOS DE OPERACIÓN Y CONTROL
  {
    id: 6,
    categoria: "2. Operación y Control",
    nombre: "Bandeja de instrumental",
    subtitulo: "Consola del dentista",
    descripcion: "Soporte móvil articulado que contiene la manguera y herramientas rotatorias principales (turbina, micromotor y jeringa).",
    orbit: "-70deg 72deg 50m",
    target: "0.9m 15.5m 9.4m",
    position: "0.9 15.5 9.4",
  },
  {
    id: 7,
    categoria: "2. Operación y Control",
    nombre: "Pedal de control",
    subtitulo: "Interruptor multidireccional de pie",
    descripcion: "Permite activar el instrumental rotatorio, el flujo de agua y ajustar las posiciones del sillón manteniendo las manos estériles.",
    orbit: "150deg 88deg 55m",
    target: "-9m 2m 8m",
    position: "-9 2 8",
  },
  {
    id: 8,
    categoria: "2. Operación y Control",
    nombre: "Lámpara operatoria",
    subtitulo: "Luz de alta intensidad articulada",
    descripcion: "Iluminación enfocada orientada a la boca del paciente para garantizar una visibilidad clara, precisa y libre de sombras.",
    orbit: "-15deg 55deg 55m",
    target: "0.5m 34.1m -3.7m",
    position: "0.5 34.1 -3.7",
  },

  // 3. GRUPO HÍDRICO Y DE ASPIRACIÓN
  {
    id: 9,
    categoria: "3. Grupo Hídrico",
    nombre: "Escupidera / Cuspidor",
    subtitulo: "Pica de enjuague higiénica",
    descripcion: "Taza de cerámica/vidrio para el aclarado bucal del paciente, equipada con grifos automáticos para llenado y limpieza.",
    orbit: "100deg 72deg 50m",
    target: "3m 13m 8m",
    position: "3 13 8",
  },
  {
    id: 10,
    categoria: "3. Grupo Hídrico",
    nombre: "Sistema de aspiración",
    subtitulo: "Cánulas y circuito de succión",
    descripcion: "Mangueras de alto volumen que absorben de forma continua el exceso de saliva, agua, sangre o restos quirúrgicos.",
    orbit: "115deg 78deg 50m",
    target: "-4m 10m 0m",
    position: "-4 10 0",
  },
  {
    id: 11,
    categoria: "3. Grupo Hídrico",
    nombre: "Sistema de agua destilada",
    subtitulo: "Depósito presurizado de pureza",
    descripcion: "Tanque auxiliar de suministro continuo de agua purificada para los instrumentos rotatorios, previniendo contaminaciones.",
    orbit: "130deg 80deg 52m",
    target: "-4m 10m -12m",
    position: "-4 10 -12",
  },

  // 4. COMPONENTES Y ACCESORIOS AUXILIARES
  {
    id: 12,
    categoria: "4. Accesorios Auxiliares",
    nombre: "Módulo del asistente",
    subtitulo: "Consola secundaria de apoyo",
    descripcion: "Panel articulado con mandos y mangueras independientes para el trabajo colaborativo del higienista o auxiliar dental.",
    orbit: "95deg 68deg 50m",
    target: "5.2m 23.1m -4.1m",
    position: "5.2 23.1 -4.1",
  },
  {
    id: 13,
    categoria: "4. Accesorios Auxiliares",
    nombre: "Jeringa triple",
    subtitulo: "Inyector de aire, agua y spray",
    descripcion: "Dispositivo multifunción acoplado a la manguera para limpiar, refrescar y secar el campo operatorio con precisión.",
    orbit: "-40deg 65deg 48m",
    target: "0m 25m 0m",
    position: "0 25 0",
  },
];

// Vista inicial: encuadre general de todo el sillón
const ORBIT_INICIAL = "35deg 65deg 85m";
const TARGET_INICIAL = `${CENTRO_MODELO.x}m ${CENTRO_MODELO.y}m ${CENTRO_MODELO.z}m`;

export default function DentalChairModel() {
  const [activeId, setActiveId] = useState<number>(0); // 0 = vista general, sin selección
  const [modelReady, setModelReady] = useState(false);
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // Evita cargar el script más de una vez si el componente se remonta
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

    // Mueve la cámara de forma animada al encuadre del componente
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
              src="/sillon.glb"
              alt="Modelo 3D Sillón Dental"
              camera-controls
              touch-action="pan-y"
              camera-orbit={ORBIT_INICIAL}
              camera-target={TARGET_INICIAL}
              min-camera-orbit="auto auto 30m"
              max-camera-orbit="auto auto 140m"
              shadow-intensity="1.2"
              interpolation-decay="200"
              style={{ width: '100%', height: '100%', backgroundColor: '#0f172a' }}
            >
              {/* Un hotspot por componente. model-viewer sólo muestra el que
                  coincide con data-visibility-attribute, así que en vez de
                  mutar un único hotspot (que no re-renderiza fiablemente),
                  declaramos todos y alternamos su visibilidad con la prop
                  `slot` + el atributo `data-visible`. */}
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

          {/* Etiqueta indicadora superpuesta */}
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

          {/* Ficha descriptiva del elemento seleccionado */}
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
