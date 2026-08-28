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

  return (
    <main>
      <section className="bg-brand-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Reparación y mantenimiento integral de aparatología dental</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">Diagnóstico técnico, reparación y mantenimiento preventivo legal, adaptado a las necesidades de tu clínica.</p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicios.map((s, index) => (
          <div key={index} className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src={s.icon} alt={s.title} width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">{s.title}</h2>
            <p className="text-gray-600 mb-4">{s.desc}</p>
            <ul className="space-y-2">
              {s.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-700">
                  <span className="text-brand-mint font-bold mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="py-12 bg-gray-50 text-center px-4">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">¿No ves tu equipo en la lista? Contáctanos igualmente.</h3>
        <p className="text-gray-600 mb-6">Trabajamos con múltiples marcas y modelos. Cuéntanos tu caso y te decimos si podemos ayudarte.</p>
        <a href="https://wa.me/34658312752" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold">
          <Image src="https://www.freeiconspng.com/uploads/whatsapp-icon-png-13.png" alt="WhatsApp" width={28} height={28} className="w-7 h-7 object-contain" />
          Consultar por WhatsApp
        </a>
      </section>
    </main>
  );
}