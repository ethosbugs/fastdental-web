import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Principal */}
      <section className="bg-brand-dark text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-mint block mb-4">
            Servicio Técnico Autónomo Especializado
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Reparación y mantenimiento de aparatología dental
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Atención directa, rápida y sin intermediarios para clínicas dentales. Más de 28 años de experiencia asegurando la continuidad de su consulta.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/34658312752" 
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
            >
              Contactar por WhatsApp
            </a>
            <Link 
              href="/servicios" 
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-colors"
            >
              Ver servicios y tarifas
            </Link>
          </div>
        </div>
      </section>

      {/* Resumen de Valores / Puntos Clave */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
          <h3 className="text-xl font-bold text-brand-dark mb-2">Respuesta en 24h</h3>
          <p className="text-gray-600 text-sm">
            Intervención rápida ante incidencias urgentes para evitar paradas en la actividad de la clínica.
          </p>
        </div>
        <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
          <h3 className="text-xl font-bold text-brand-dark mb-2">28 Años de Experiencia</h3>
          <p className="text-gray-600 text-sm">
            Trayectoria ininterrumpida desde 1998 ofreciendo diagnóstico y soluciones técnicas especializadas.
          </p>
        </div>
        <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
          <h3 className="text-xl font-bold text-brand-dark mb-2">Repuestos Originales</h3>
          <p className="text-gray-600 text-sm">
            Trabajo con recambios oficiales y soporte multimarca para garantizar la durabilidad del equipamiento.
          </p>
        </div>
      </section>

      {/* Llamada a la acción final de la home */}
      <section className="py-16 bg-gray-50 border-t border-gray-100 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-dark mb-4">¿Necesita asistencia técnica en su clínica?</h2>
          <p className="text-gray-600 mb-8">
            Desplazamiento presencial en toda la Comarca de la Selva y áreas de influencia. Sin esperas ni centralitas.
          </p>
          <a 
            href="https://wa.me/34658312752" 
            className="inline-block bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-mint hover:text-brand-dark transition-colors"
          >
            Solicitar asistencia técnica directa
          </a>
        </div>
      </section>
    </main>
  );
}