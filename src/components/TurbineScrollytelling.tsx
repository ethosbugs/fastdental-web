'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * TurbineScrollytelling
 * ----------------------------------------------------------------
 * Sección "pinned" que muestra una turbina dental en 3D despiezándose
 * (exploded view) a medida que el usuario hace scroll.
 *
 * ESTRUCTURA DEL MODELO CONCEPTUAL (sustituir por .GLTF real más adelante):
 *   turbineGroup
 *   ├── casingOuter   -> carcasa exterior (cilindro grande)
 *   ├── casingCollar  -> collar / anillo de sujeción
 *   ├── bearingTop    -> rodamiento superior (torus)
 *   ├── bearingBottom -> rodamiento inferior (torus)
 *   ├── rotorShaft    -> eje del rotor (cilindro fino)
 *   └── burHead       -> cabezal / fresa (cono pequeño)
 *
 * Cuando tengas el archivo .GLTF/.GLB definitivo:
 *   1. Sustituye la función buildConceptualModel() por un GLTFLoader.
 *   2. Asegúrate de que las piezas en Blender/tu software 3D estén
 *      nombradas igual (casingOuter, bearingTop, etc.) y sean "children"
 *      directos de un Group/Empty raíz, para que el resto del código
 *      (animaciones GSAP referenciando partes por nombre) siga funcionando
 *      sin cambios.
 *   3. Ajusta la escala/posición inicial del modelo importado en
 *      turbineGroup.scale / turbineGroup.position si el pivote no coincide.
 * ----------------------------------------------------------------
 */

// Posiciones "cerradas" (montado) y "abiertas" (despiece) de cada pieza.
// Edita estos valores si tu modelo real tiene proporciones distintas.
const EXPLODE_OFFSETS: Record<string, { closed: THREE.Vector3; open: THREE.Vector3 }> = {
  casingOuter: {
    closed: new THREE.Vector3(0, 0, 0),
    open: new THREE.Vector3(0, 1.8, 0),
  },
  casingCollar: {
    closed: new THREE.Vector3(0, 0, 0),
    open: new THREE.Vector3(0, 0.9, 0),
  },
  bearingTop: {
    closed: new THREE.Vector3(0, 0, 0),
    open: new THREE.Vector3(0, 0.35, 0),
  },
  bearingBottom: {
    closed: new THREE.Vector3(0, 0, 0),
    open: new THREE.Vector3(0, -0.35, 0),
  },
  rotorShaft: {
    closed: new THREE.Vector3(0, 0, 0),
    open: new THREE.Vector3(0, 0, 0), // pieza central, no se desplaza
  },
  burHead: {
    closed: new THREE.Vector3(0, 0, 0),
    open: new THREE.Vector3(0, -1.6, 0),
  },
};

/**
 * Construye el modelo conceptual con geometrías primitivas de Three.js.
 * SUSTITUIR por GLTFLoader cuando tengas el .glb definitivo:
 *
 *   import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
 *   const loader = new GLTFLoader();
 *   loader.load('/models/turbina.glb', (gltf) => {
 *     turbineGroup.add(gltf.scene);
 *   });
 */
function buildConceptualModel(): THREE.Group {
  const turbineGroup = new THREE.Group();
  turbineGroup.name = 'turbineGroup';

  // Material clínico/metálico: gris frío, alta metalicidad, poco rugoso.
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: 0xd8dde0,
    metalness: 0.85,
    roughness: 0.25,
  });

  const mintAccentMaterial = new THREE.MeshStandardMaterial({
    color: 0x4fa89d,
    metalness: 0.4,
    roughness: 0.4,
  });

  const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x12181c,
    metalness: 0.6,
    roughness: 0.35,
  });

  // --- Carcasa exterior (cuerpo principal de la turbina) ---
  const casingOuter = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.5, 2.2, 32),
    metalMaterial
  );
  casingOuter.name = 'casingOuter';
  turbineGroup.add(casingOuter);

  // --- Collar de sujeción (anillo intermedio) ---
  const casingCollar = new THREE.Mesh(
    new THREE.TorusGeometry(0.56, 0.08, 16, 32),
    mintAccentMaterial
  );
  casingCollar.name = 'casingCollar';
  casingCollar.rotation.x = Math.PI / 2;
  casingCollar.position.y = 0.4;
  turbineGroup.add(casingCollar);

  // --- Rodamiento superior ---
  const bearingTop = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.06, 16, 32),
    darkMaterial
  );
  bearingTop.name = 'bearingTop';
  bearingTop.rotation.x = Math.PI / 2;
  bearingTop.position.y = 0.7;
  turbineGroup.add(bearingTop);

  // --- Rodamiento inferior ---
  const bearingBottom = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.06, 16, 32),
    darkMaterial
  );
  bearingBottom.name = 'bearingBottom';
  bearingBottom.rotation.x = Math.PI / 2;
  bearingBottom.position.y = -0.9;
  turbineGroup.add(bearingBottom);

  // --- Eje del rotor (pieza central que atraviesa todo el conjunto) ---
  const rotorShaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 2.6, 16),
    metalMaterial
  );
  rotorShaft.name = 'rotorShaft';
  turbineGroup.add(rotorShaft);

  // --- Cabezal / fresa (parte que sobresale abajo) ---
  const burHead = new THREE.Mesh(
    new THREE.ConeGeometry(0.1, 0.5, 16),
    mintAccentMaterial
  );
  burHead.name = 'burHead';
  burHead.position.y = -1.5;
  turbineGroup.add(burHead);

  return turbineGroup;
}

export default function TurbineScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasWrapperRef.current || !containerRef.current) return;

    const wrapper = canvasWrapperRef.current;
    const container = containerRef.current;

    // ---------- 1. ESCENA, CÁMARA, RENDERER ----------
    const scene = new THREE.Scene();
    scene.background = null; // transparente, se apoya en el fondo CSS de la sección

    const camera = new THREE.PerspectiveCamera(
      45,
      wrapper.clientWidth / wrapper.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
    wrapper.appendChild(renderer.domElement);

    // ---------- 2. LUCES ----------
    // Luz ambiente suave para que no haya negros absolutos.
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Luz direccional principal (simula luz de sala clínica desde arriba).
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    // Luz de relleno fría desde el otro lado para resaltar el metal.
    const fillLight = new THREE.DirectionalLight(0x9fd8ce, 0.5);
    fillLight.position.set(-4, -2, -3);
    scene.add(fillLight);

    // ---------- 3. MODELO 3D ----------
    const turbineGroup = buildConceptualModel();
    scene.add(turbineGroup);

    // ---------- 4. RESPONSIVE: adaptar cámara/tamaño en resize ----------
    function handleResize() {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      camera.aspect = width / height;

      // Alejamos ligeramente la cámara en pantallas estrechas (móvil)
      // para que el modelo despiezado siga cabiendo en el encuadre.
      camera.position.z = width < 640 ? 8 : 6;

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    // ---------- 5. LOOP DE RENDERIZADO ----------
    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // ---------- 6. GSAP SCROLLTRIGGER: scroll "pinned" + exploded view ----------
    const parts = turbineGroup.children as THREE.Mesh[];

    // Timeline principal, atada al scroll de la sección contenedora.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=250%', // duración del scroll "bloqueado"; ajusta a gusto
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 6a. Despiece: cada pieza se anima desde su posición "closed" a "open".
    parts.forEach((part) => {
      const offsets = EXPLODE_OFFSETS[part.name];
      if (!offsets) return;

      tl.to(
        part.position,
        {
          x: offsets.open.x,
          y: offsets.open.y,
          z: offsets.open.z,
          ease: 'power2.out',
          duration: 1,
        },
        0 // todas empiezan en el mismo punto de la timeline; el offset de
          // cada pieza (distinto valor "open") crea la sensación de despiece
      );
    });

    // 6b. Rotación sutil del conjunto completo en Y durante todo el scroll.
    tl.to(
      turbineGroup.rotation,
      {
        y: Math.PI * 1.4,
        ease: 'none',
        duration: 1,
      },
      0
    );

    // 6c. Texto flotante sincronizado con el scroll (fade-in por pasos).
    const steps = gsap.utils.toArray<HTMLElement>('.turbine-step');
    steps.forEach((step, i) => {
      // Ventana de tiempo dentro de la timeline para este paso.
      const start = i / steps.length;
      const end = (i + 0.7) / steps.length;

      tl.fromTo(
        step,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power1.out' },
        start
      ).to(
        step,
        { autoAlpha: 0, y: -24, duration: 0.3, ease: 'power1.in' },
        end
      );
    });

    // ---------- 7. LIMPIEZA AL DESMONTAR EL COMPONENTE ----------
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      tl.scrollTrigger?.kill();
      tl.kill();
      renderer.dispose();
      wrapper.removeChild(renderer.domElement);

      // Liberar geometrías/materiales para evitar fugas de memoria en Next.js
      // (importante en desarrollo con hot-reload, que remonta el componente).
      turbineGroup.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-brand-dark overflow-hidden"
    >
      {/* Canvas 3D de fondo, ocupa toda la sección pinned */}
      <div ref={canvasWrapperRef} className="absolute inset-0" />

      {/* Capa de texto flotante — pasos explicativos sincronizados con scroll */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-md">
            <p className="turbine-step invisible font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">
              Paso 01
            </p>
            <h3 className="turbine-step invisible font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Diagnóstico de carcasa externa
            </h3>
            <p className="turbine-step invisible text-gray-300 text-sm md:text-base">
              Revisamos el estado exterior, roscas de acoplamiento y posibles
              golpes o desgastes visibles antes de intervenir.
            </p>
          </div>

          <div className="max-w-md mt-4">
            <p className="turbine-step invisible font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">
              Paso 02
            </p>
            <h3 className="turbine-step invisible font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Rodamientos de alta precisión
            </h3>
            <p className="turbine-step invisible text-gray-300 text-sm md:text-base">
              Los rodamientos se inspeccionan en busca de holguras, ruido
              anómalo o pérdida de lubricación.
            </p>
          </div>

          <div className="max-w-md mt-4">
            <p className="turbine-step invisible font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">
              Paso 03
            </p>
            <h3 className="turbine-step invisible font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Eje del rotor y cabezal
            </h3>
            <p className="turbine-step invisible text-gray-300 text-sm md:text-base">
              Verificamos la alineación del eje y el estado del cabezal antes
              de volver a montar el conjunto con repuesto original.
            </p>
          </div>
        </div>
      </div>

      {/* Indicador de scroll, solo visible al entrar en la sección */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-xs tracking-widest uppercase">
        Scroll para despiezar ↓
      </div>
    </section>
  );
}
