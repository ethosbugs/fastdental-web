import Link from 'next/link';
import Image from 'next/image';

export default function Servicios() {
  const servicios = [
    {
      title: "Sillones dentales",
      icon: "https://cdn-icons-png.flaticon.com/512/2035/2035008.png",
      desc: "Reparación de motores, sistemas hidráulicos y neumáticos, tapicería, cableado y módulos electrónicos.",
      items: ["Diagnóstico de averías eléctricas e hidráulicas", "Sustitución de piezas con repuesto original", "Ajuste y calibración post-reparación"]
    },
    {
      title: "Autoclaves y esterilización",
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686363.png",
      desc: "Mantenimiento preventivo y correctivo de autoclaves, esencial para cumplir la normativa sanitaria vigente.",
      items: ["Revisión de ciclos de esterilización", "Sustitución de juntas, filtros y resistencias", "Verificación de presión y temperatura"]
    },
    {
      title: "Compresores y sistemas de aspiración",
      icon: "https://cdn-icons-png.flaticon.com/512/2198/2198274.png",
      desc: "Diagnóstico de fugas, ruido anómalo y pérdida de presión en compresores y equipos de aspiración quirúrgica.",
      items: ["Revisión de estanqueidad", "Sustitución de membranas y filtros", "Mantenimiento preventivo periódico"]
    },
    {
      title: "Equipos de radiología dental",
      icon: "https://cdn-icons-png.flaticon.com/512/9133/9133658.png",
      desc: "Puesta a punto, calibración y resolución de incidencias en equipos de radiografía intraoral y sensores digitales.",
      items: ["Calibración de sensores", "Diagnóstico de errores de imagen", "Coordinación con SAT oficial de marca (Vatech, SIGER)"]
    },
    {
      title: "Generadores de agua tratada (DenTwater)",
      icon: "https://cdn-icons-png.flaticon.com/512/5220/5220449.png",
      desc: "Instalación, mantenimiento y reparación de sistemas de tratamiento de agua para consulta dental.",
      items: ["Revisión de calidad de agua", "Sustitución de cartuchos y filtros", "Mantenimiento según normativa sanitaria"]
    },
    {
      title: "Mantenimiento preventivo legal",
      icon: "https://cdn-icons-png.flaticon.com/512/7018/7018556.png",
      desc: "Revisiones periódicas obligatorias para garantizar el correcto funcionamiento y cumplimiento normativo de tu clínica.",
      items: ["Calendario de revisiones adaptado a tu equipo", "Informe técnico tras cada visita", "Prevención de averías antes de que ocurran"]
    }
  ];

  const opiniones = [
    {
      quote: "Tuvimos una incidencia crítica con el autoclave un lunes por la mañana y acudió con gran rapidez. Trabajo limpio, riguroso y con repuestos originales.",
      clinic: "Clínica Dental Dr. Martí",
      location: "Comarca de la Selva"
    },
    {
      quote: "El mantenimiento preventivo de los sillones nos ha evitado paradas inesperadas en plena actividad. Un servicio técnico autónomo altamente recomendable.",
      clinic: "Dental Selva St.",
      location: "Girona / Comarca"
    },
    {
      quote: "Atención directa y sin intermediarios. Solucionó el problema de aspiración en menos de 24 horas con total eficacia.",
      clinic: "Policlínica Dental Vinyoles",
      location: "Comarca de la Selva"
    }
  ];

  const faqs = [
    {
      q: "¿Cuál es el tiempo de respuesta ante una avería urgente?",
      a: "Se ofrece servicio de respuesta rápida. Ante cualquier incidencia comunicada en jornada laboral, la intervención se realiza el mismo día o en un plazo máximo de 24 horas para asegurar la continuidad de la clínica."
    },
    {
      q: "¿Cuál es el horario de atención y zona de cobertura?",
      a: "La atención se presta de lunes a viernes en horario de 9:00 a 20:00, desplazándose directamente a la consulta dental en toda la Comarca de la Selva y áreas de influencia."
    },
    {
      q: "¿Cuánta experiencia avala el servicio?",
      a: "Con una trayectoria ininterrumpida desde el año 1998, se aportan 28 años de experiencia especializada en el diagnóstico, reparación y mantenimiento de aparatología dental."
    },
    {
      q: "¿Se trabaja con repuestos originales y qué marcas se cubren?",
      a: "Sí, se emplean recambios 100% originales, ofreciendo soporte multimarca para sillones, autoclaves, compresores, sistemas de aspiración y radiología de fabricantes como Cattani, Mocom, Castellini, Vatech o Siger."
    },
    {
      q: "¿Cómo se solicita una intervención técnica?",
      a: "De forma directa y sin centralitas a través de contacto telefónico o mediante mensajería instantánea por WhatsApp."
    }
  ];

  return (
    <main>
      {/* Cabecera */}
      <section className="bg-brand-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Reparación y mantenimiento integral de aparatología dental</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">Diagnóstico técnico, reparación y mantenimiento preventivo legal, adaptado a las necesidades de su clínica.</p>
      </section>

      {/* Grid de Servicios */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicios.map((s, index) => (
          <div key={index} className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
                <Image src={s.icon} alt={s.title} width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="text-brand-mint font-bold mr-2">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href="https://wa.me/34658312752" 
              className="inline-block text-center bg-brand-dark text-white text-sm font-bold py-2.5 rounded-xl hover:bg-brand-mint hover:text-brand-dark transition-colors"
            >
              Solicitar asistencia técnica
            </a>
          </div>
        ))}
      </section>

      {/* SECCIÓN DE RESEÑAS / TESTIMONIOS */}
      <section className="py-16 bg-gray-50 border-t border-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-mint block mb-2">Reseñas Verificadas</span>
            <h2 className="text-3xl font-extrabold text-brand-dark">Valoraciones de clínicas en la zona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opiniones.map((o, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-4 text-sm font-bold tracking-widest">★★★★★</div>
                  <p className="text-gray-600 text-sm italic mb-6">"{o.quote}"</p>
                </div>
                <div>
                  <p className="font-bold text-brand-dark">{o.clinic}</p>
                  <p className="text-xs text-gray-400 font-mono">{o.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE FAQ (Preguntas Frecuentes) */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-mint block mb-2">Resolución de dudas</span>
          <h2 className="text-3xl font-extrabold text-brand-dark">Preguntas frecuentes</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE DE CONTACTO / INFO ZONA */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="bg-brand-dark text-white p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-mint block mb-2">Servicio Técnico Especializado</span>
            <h3 className="text-3xl font-bold mb-4">¿Su clínica está ubicada en la Comarca de la Selva?</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Servicio técnico autónomo y directo. Desplazamiento presencial a la consulta para la resolución de averías urgentes, diagnósticos y mantenimientos preventivos reglamentarios.
            </p>
            <div className="space-y-2 text-sm font-mono text-brand-mint">
              <p>Cobertura: Comarca de la Selva</p>
              <p>Tiempo de respuesta: Menos de 24 horas</p>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/10 space-y-4">
            <h4 className="font-bold text-lg mb-2">Contacto Directo</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <span className="font-mono text-brand-mint font-bold">TEL:</span> 
                <a href="tel:658312752" className="hover:underline">658 312 752</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-mono text-brand-mint font-bold">EMAIL:</span> 
                <a href="mailto:sat.fastdental@gmail.com" className="hover:underline">sat.fastdental@gmail.com</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-mono text-brand-mint font-bold">WEB:</span> 
                <span>fastdental.vercel.app</span>
              </p>
            </div>
            <div className="pt-4">
              <a href="https://wa.me/34658312752" className="block text-center bg-[#25D366] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción inferior */}
      <section className="py-12 bg-white text-center px-4 border-t border-gray-100">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">¿Su equipo no figura en el listado?</h3>
        <p className="text-gray-600 mb-6">Se ofrece asistencia para una amplia variedad de marcas y modelos del sector dental.</p>
        <a href="https://wa.me/34658312752" className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Consultar disponibilidad
        </a>
      </section>
    </main>
  );
}