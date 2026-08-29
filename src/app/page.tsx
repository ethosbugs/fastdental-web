import Link from 'next/link';
import Image from 'next/image';
// IMPORTACIÓN DEL NUEVO MODELO DEL SILLÓN DENTAL
import DentalChairModel from '@/components/DentalChairModel';

const marcas = [
  { name: "CATTANI", logo: "https://i.ibb.co/R4ZyYGHP/logo-cattani-2x.png" },
  { name: "mocom", logo: "https://i.ibb.co/1fF33r40/logo-mocom-3.png" },
  { name: "CASTELLINI", logo: "https://i.ibb.co/mVPQRZCr/Captura-de-pantalla-2026-08-28-222335.png" },
  { name: "mectron", logo: "https://www.vostars.eu/wp-content/uploads/2019/11/logo_mectron.png" },
  { name: "FEDESA", logo: "https://www.dynamiquedentaire.com/wp-content/uploads/2018/10/logo-fedesa.png" },
  { name: "MORITA", logo: "https://i.ibb.co/Mxndjf5S/Captura-de-pantalla-2026-08-28-222657.png" },
  { name: "DenTwater", logo: "https://i.ibb.co/Y7S2hGpP/q7QSX.jpg" },
  { name: "Vatech", logo: "https://i.ibb.co/5XHKcYf2/Captura-de-pantalla-2026-08-28-222135.png" },
  { name: "SIGER", logo: "https://i.ibb.co/mCWbVnSD/image.jpg" },
];

const servicios = [
  { n: "01", title: "Sillones dentales", desc: "Motores, hidráulica, tapicería y electrónica." },
  { n: "02", title: "Autoclaves y esterilización", desc: "Mantenimiento preventivo legal y reparación urgente." },
  { n: "03", title: "Compresores y turbinas", desc: "Diagnóstico de fugas, presión y ruido anómalo." },
  { n: "04", title: "Equipos de radiología", desc: "Puesta a punto y calibración de sensores." },
  { n: "05", title: "Agua tratada", desc: "Instalación y mantenimiento DenTwater." },
  { n: "06", title: "Mantenimiento legal", desc: "Revisiones periódicas obligatorias según normativa." },
];

const ventajas = [
  { title: "Respuesta rápida", desc: "Desplazamiento directo a tu clínica, sin desplazarte tú." },
  { title: "Técnico certificado", desc: "Francisco Agüera Gómez, formación oficial de fabricante." },
  { title: "Repuestos originales", desc: "Solo piezas homologadas, garantía real del fabricante." },
  { title: "Trato directo", desc: "Sin gestorías ni intermediarios: hablas con quien repara." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-brand-dark text-white py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)',
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          {/* status strip — signature element */}
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-brand-mint border border-brand-mint/40 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
            SAT oficial · Comarca de la Selva
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Servicio Técnico Oficial de<br className="hidden md:block" /> Aparatología Dental
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Reparación, mantenimiento y puesta a punto de tu clínica. Repuestos originales
            y garantía de fabricante, sin que tu sillón esté parado más de lo necesario.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
            <a
              href="https://wa.me/34658312752"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 font-display font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              Escribir por WhatsApp
            </a>
            <a
              href="tel:658312752"
              className="border-2 border-white text-white px-8 py-4 font-display font-bold text-lg hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
              658 312 752
            </a>
          </div>
          <p className="text-sm text-gray-400 font-mono">Atención directa en clínica · Sin intermediarios</p>
        </div>
      </section>

      {/* MODELO 3D INTERACTIVO DEL SILLÓN DENTAL */}
      <section className="py-12 bg-slate-950 px-4">
        <div className="max-w-5xl mx-auto">
          <DentalChairModel />
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-16 bg-brand-light text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">Homologado por</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            SAT oficial de las marcas líderes del sector
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-sm">
            No todos los técnicos pueden intervenir tu equipo con garantía de fabricante.
            Formación certificada, repuestos 100% originales y procedimientos homologados por cada marca.
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-5 px-4 mb-10">
          {marcas.map((marca) => (
            <div
              key={marca.name}
              className="bg-white border-2 border-brand-dark/10 px-6 py-4 flex items-center justify-center min-w-[140px] h-20 hover:border-brand-mint transition-colors"
            >
              <Image src={marca.logo} alt={marca.name} width={120} height={50} className="max-h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
        <Link href="/marcas" className="inline-flex items-center gap-2 text-brand-dark font-display font-bold hover:text-brand-mint transition-colors">
          Ver todas las marcas <span aria-hidden="true">→</span>
        </Link>
      </section>

      {/* SERVICIOS — service-ticket motif */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-center text-brand-dark mb-14">
          ¿Qué avería o mantenimiento resolvemos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-dark/10 border border-brand-dark/10 mb-10">
          {servicios.map((s) => (
            <div key={s.n} className="bg-white p-8 hover:bg-brand-light transition-colors">
              <span className="font-mono text-xs text-brand-mint tracking-widest">SAT-{s.n}</span>
              <h3 className="font-display font-bold text-xl text-brand-dark mt-2 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-brand-dark font-display font-bold hover:text-brand-mint transition-colors">
            Ver todos los servicios <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* POR QUÉ ELEGIR */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Cada minuto de sillón parado es un paciente perdido
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14">
            Agenda bloqueada, pacientes reprogramados, ingresos perdidos. Por eso priorizamos
            la respuesta rápida y la resolución en la primera visita.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
            {ventajas.map((v) => (
              <div key={v.title} className="bg-brand-dark p-6 border-t-2 border-brand-mint">
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">Zona de cobertura</p>
        <h2 className="font-display text-3xl font-bold text-brand-dark mb-4">
          Vamos nosotros. Tú sigue atendiendo pacientes.
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Servicio técnico itinerante: nos desplazamos a tu clínica con las herramientas y
          repuestos necesarios para intervenir in situ. Cobertura actual en{' '}
          <strong className="text-brand-dark">la Comarca de la Selva</strong>, con ampliación progresiva.
        </p>
        <p className="text-sm text-gray-400 italic">¿Tu clínica está fuera de esta zona? Contacta y consultamos disponibilidad.</p>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-brand-mint text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4">¿Tu equipo dental necesita revisión?</h2>
          <p className="mb-10 text-lg text-white/90">Contacta ahora y te confirmamos disponibilidad en el mismo día.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/34658312752" className="bg-brand-dark text-white px-8 py-4 font-display font-bold text-lg hover:opacity-90 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              Escribir por WhatsApp
            </a>
            <Link href="/contacto" className="bg-white text-brand-dark px-8 py-4 font-display font-bold text-lg hover:bg-gray-100 flex items-center justify-center gap-3">
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}