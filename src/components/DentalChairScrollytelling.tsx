'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * DentalChairScrollytelling
 * ----------------------------------------------------------------
 * Sección "pinned" que muestra un sillón dental en 3D. A medida que
 * el usuario hace scroll, el respaldo se reclina y el brazo de
 * instrumental se despliega, mientras aparece texto explicativo.
 *
 * ESTRUCTURA DEL MODELO CONCEPTUAL (sustituir por .GLTF real más adelante):
 *   chairGroup
 *   ├── base            -> peana / columna hidráulica (cilindro ancho + estrecho)
 *   ├── seatGroup
 *   │    ├── seatPan     -> asiento
 *   │    └── backrestPivot (Object3D, pivote de bisagra)
 *   │         └── backrest      -> respaldo (rota sobre backrestPivot)
 *   │              └── headrestPivot (Object3D)
 *   │                   └── headrest -> reposacabezas (rota sobre headrestPivot)
 *   ├── armPivot (Object3D, pivote del brazo de instrumental)
 *   │    └── instrumentArm -> brazo con pieza de mano (rota/se extiende)
 *   └── lampArm         -> brazo de la lámpara de operación
 *        └── lampHead    -> cabezal de la lámpara
 *
 * Cuando tengas el archivo .GLTF/.GLB definitivo (ej. exportado desde
 * un modelo real de sillón CASTELLINI/FEDESA):
 *   1. Sustituye buildConceptualModel() por un GLTFLoader.
 *   2. Nombra en tu software 3D los objetos igual que aquí
 *      (backrestPivot, headrestPivot, armPivot...) para que las
 *      animaciones de GSAP (que buscan estos nombres) sigan funcionando.
 *   3. Los pivotes de bisagra (backrestPivot, headrestPivot, armPivot)
 *      deben tener su origen exactamente en el eje de giro real de la
 *      pieza (la charnela), no en el centro de la geometría — en Blender,
 *      usa "Set Origin > 3D Cursor" colocado en la bisagra antes de exportar.
 * ----------------------------------------------------------------
 */

function buildConceptualModel(): THREE.Group {
  const chairGroup = new THREE.Group();
  chairGroup.name = 'chairGroup';

  // ---------- MATERIALES (look clínico realista, no "plastilina") ----------
  // Tapicería: mate, sin metalicidad, con algo de rugosidad para que no brille como plástico.
  const upholstery = new THREE.MeshPhysicalMaterial({
    color: 0x2b3236,
    roughness: 0.75,
    metalness: 0,
    clearcoat: 0.05,
  });

  // Cromo pulido: alta metalicidad, baja rugosidad, con clearcoat para el brillo especular típico del metal médico.
  const chrome = new THREE.MeshPhysicalMaterial({
    color: 0xe8ecee,
    roughness: 0.15,
    metalness: 1,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
  });

  // Plástico técnico (carcasas de la lámpara, brazo): satinado, no brillante como juguete.
  const techPlastic = new THREE.MeshPhysicalMaterial({
    color: 0xf4f9f8,
    roughness: 0.45,
    metalness: 0.05,
    clearcoat: 0.2,
  });

  // Acento de marca en el detalle de la lámpara / instrumental.
  const mintAccent = new THREE.MeshPhysicalMaterial({
    color: 0x4fa89d,
    roughness: 0.35,
    metalness: 0.2,
  });

  // ---------- BASE / COLUMNA HIDRÁULICA ----------
  const base = new THREE.Group();
  base.name = 'base';

  const foot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.85, 0.95, 0.12, 48),
    chrome
  );
  foot.position.y = 0.06;
  base.add(foot);

  const column = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.28, 1.1, 32),
    chrome
  );
  column.position.y = 0.65;
  base.add(column);

  chairGroup.add(base);

  // ---------- ASIENTO ----------
  const seatGroup = new THREE.Group();
  seatGroup.name = 'seatGroup';
  seatGroup.position.y = 1.2;

  const seatPan = new THREE.Mesh(
    new THREE.BoxGeometry(0.95, 0.16, 1.1, 4, 2, 4), // segmentos extra para suavizar con bevel visual
    upholstery
  );
  seatPan.name = 'seatPan';
  seatPan.position.z = 0.15;
  seatGroup.add(seatPan);

  // ---------- RESPALDO (con pivote de bisagra en el borde trasero del asiento) ----------
  const backrestPivot = new THREE.Object3D();
  backrestPivot.name = 'backrestPivot';
  backrestPivot.position.set(0, 0.08, -0.4); // eje de la charnela, no el centro de la pieza
  seatGroup.add(backrestPivot);

  const backrest = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 1.15, 0.14, 4, 6, 2),
    upholstery
  );
  backrest.name = 'backrest';
  // La geometría se desplaza para que su base quede en el pivote (0,0,0 local).
  backrest.position.set(0, 0.55, -0.02);
  backrestPivot.add(backrest);

  // ---------- REPOSACABEZAS (pivote sobre el extremo superior del respaldo) ----------
  const headrestPivot = new THREE.Object3D();
  headrestPivot.name = 'headrestPivot';
  headrestPivot.position.set(0, 1.1, -0.02);
  backrest.add(headrestPivot);

  const headrest = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.22, 0.28, 4, 16),
    upholstery
  );
  headrest.name = 'headrest';
  headrest.rotation.z = Math.PI / 2;
  headrest.position.set(0, 0.1, 0.05);
  headrestPivot.add(headrest);

  chairGroup.add(seatGroup);

  // ---------- BRAZO DE INSTRUMENTAL (pivote lateral, se despliega hacia el paciente) ----------
  const armPivot = new THREE.Object3D();
  armPivot.name = 'armPivot';
  armPivot.position.set(0.55, 1.55, 0.5);
  chairGroup.add(armPivot);

  const instrumentArm = new THREE.Group();
  instrumentArm.name = 'instrumentArm';

  const armSegment1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.045, 0.5, 20),
    chrome
  );
  armSegment1.rotation.z = Math.PI / 2;
  armSegment1.position.x = 0.25;
  instrumentArm.add(armSegment1);

  const armHousing = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.16, 0.4, 2, 2, 2),
    techPlastic
  );
  armHousing.position.x = 0.55;
  instrumentArm.add(armHousing);

  const handpiece = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.05, 0.32, 16),
    mintAccent
  );
  handpiece.rotation.z = Math.PI / 3;
  handpiece.position.set(0.55, -0.18, 0.1);
  instrumentArm.add(handpiece);

  armPivot.add(instrumentArm);

  // ---------- LÁMPARA DE OPERACIÓN ----------
  const lampArm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 1.4, 16),
    chrome
  );
  lampArm.name = 'lampArm';
  lampArm.position.set(-0.5, 2.1, -0.6);
  lampArm.rotation.z = -0.35;
  chairGroup.add(lampArm);

  const lampHead = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.55),
    techPlastic
  );
  lampHead.name = 'lampHead';
  lampHead.position.set(-0.95, 2.65, -0.3);
  lampHead.rotation.x = Math.PI;
  chairGroup.add(lampHead);

  // El grupo entero se centra y baja ligeramente para quedar óptico en cámara.
  chairGroup.position.y = -1.3;

  return chairGroup;
}

export default function DentalChairScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasWrapperRef.current || !containerRef.current) return;

    const wrapper = canvasWrapperRef.current;
    const container = containerRef.current;

    // ---------- 1. ESCENA, CÁMARA, RENDERER ----------
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      38,
      wrapper.clientWidth / wrapper.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.4, 1.1, 4.4);
    camera.lookAt(0, 0.4, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
    // Tone mapping filmico + encoding correcto: evita el look "plano/plastilina"
    // de MeshStandardMaterial sin ajustar y da contraste realista al cromado.
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    wrapper.appendChild(renderer.domElement);

    // ---------- 2. LUCES ----------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    // Luz clave (simula foco de sala clínica, cálida-neutra desde arriba-frente)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 6, 4);
    scene.add(keyLight);

    // Luz de relleno fría, más tenue, desde el lado opuesto
    const fillLight = new THREE.DirectionalLight(0x9fd8ce, 0.6);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);

    // Luz de contorno (rim light) para separar el cromo del fondo oscuro
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.9);
    rimLight.position.set(-2, 1, -5);
    scene.add(rimLight);

    // Entorno reflejado simple (sin HDRI externo): un PMREM básico ayuda
    // a que el cromo no se vea plano. Generado a partir de una escena vacía
    // con gradiente de color, barato en rendimiento.
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x1a2226);
    const envTexture = pmremGenerator.fromScene(envScene, 0.04).texture;
    scene.environment = envTexture;

    // ---------- 3. MODELO 3D ----------
    const chairGroup = buildConceptualModel();
    scene.add(chairGroup);

    const backrestPivot = chairGroup.getObjectByName('backrestPivot');
    const headrestPivot = chairGroup.getObjectByName('headrestPivot');
    const armPivot = chairGroup.getObjectByName('armPivot');

    // ---------- 4. RESPONSIVE ----------
    function handleResize() {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      camera.aspect = width / height;

      // En móvil alejamos y centramos más la cámara para que el sillón
      // completo (incluida la lámpara) quepa en el encuadre vertical.
      if (width < 640) {
        camera.position.set(2.8, 1.3, 5.6);
      } else {
        camera.position.set(2.4, 1.1, 4.4);
      }
      camera.lookAt(0, 0.4, 0);

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

    // ---------- 6. GSAP SCROLLTRIGGER ----------
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=250%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 6a. El respaldo se reclina hacia atrás (rotación sobre su bisagra real).
    if (backrestPivot) {
      tl.to(
        backrestPivot.rotation,
        { x: -0.85, ease: 'power2.inOut', duration: 1 },
        0
      );
    }

    // 6b. El reposacabezas se ajusta ligeramente para acompañar el reclinado.
    if (headrestPivot) {
      tl.to(
        headrestPivot.rotation,
        { x: 0.4, ease: 'power2.inOut', duration: 1 },
        0.15
      );
    }

    // 6c. El brazo de instrumental gira hacia el paciente (se "despliega").
    if (armPivot) {
      tl.to(
        armPivot.rotation,
        { y: -0.9, ease: 'power2.out', duration: 1 },
        0.35
      );
    }

    // 6d. Rotación sutil de todo el conjunto en Y para cambiar de ángulo.
    tl.to(
      chairGroup.rotation,
      { y: Math.PI * 0.35, ease: 'none', duration: 1 },
      0
    );

    // 6e. Texto flotante sincronizado por tramos.
    const steps = gsap.utils.toArray<HTMLElement>('.chair-step');
    steps.forEach((step, i) => {
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

    // ---------- 7. LIMPIEZA ----------
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      tl.scrollTrigger?.kill();
      tl.kill();
      pmremGenerator.dispose();
      envTexture.dispose();
      renderer.dispose();
      wrapper.removeChild(renderer.domElement);

      chairGroup.traverse((obj) => {
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
      {/* Canvas 3D — se ajusta al espacio justo de la sección, sin sobredimensionar */}
      <div ref={canvasWrapperRef} className="absolute inset-0" />

      {/* Texto flotante sincronizado con el scroll */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-md">
            <p className="chair-step invisible font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">
              Paso 01
            </p>
            <h3 className="chair-step invisible font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Revisión del sistema hidráulico
            </h3>
            <p className="chair-step invisible text-gray-300 text-sm md:text-base">
              Comprobamos la columna y el reclinado del respaldo: fugas,
              presión y suavidad de movimiento.
            </p>
          </div>

          <div className="max-w-md mt-4">
            <p className="chair-step invisible font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">
              Paso 02
            </p>
            <h3 className="chair-step invisible font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Ajuste de reposacabezas
            </h3>
            <p className="chair-step invisible text-gray-300 text-sm md:text-base">
              Verificamos las articulaciones y el bloqueo en cada posición
              para garantizar comodidad y seguridad del paciente.
            </p>
          </div>

          <div className="max-w-md mt-4">
            <p className="chair-step invisible font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">
              Paso 03
            </p>
            <h3 className="chair-step invisible font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Brazo de instrumental
            </h3>
            <p className="chair-step invisible text-gray-300 text-sm md:text-base">
              Diagnóstico de la pieza de mano y del recorrido del brazo:
              precisión, sujeción y ausencia de vibraciones.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-xs tracking-widest uppercase">
        Scroll para ver el sillón en detalle ↓
      </div>
    </section>
  );
}
