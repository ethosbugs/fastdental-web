import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const marcas = [
    "CATTANI", "mocom", "CASTELLINI", "mectron medical technology", 
    "FEDESA", "MORITA", "DenTwater", "Vatech", "SIGER"
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-brand-dark text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Servicio Técnico Oficial de Aparatología Dental
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Reparación, mantenimiento y puesta a punto de tu clínica dental. Rapidez, repuestos originales y garantía de fabricante, sin que tu sillón esté parado más de lo necesario.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a 
              href="https://wa.me/34658312752" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Image src="https://www.freeiconspng.com/uploads/whatsapp-icon-png-13.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6 object-contain" />
              Escribir por WhatsApp
            </a>
            <a 
              href="tel:658312752" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              <Image src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Teléfono" width={24} height={24} className="w-6 h-6 object-contain brightness-0 invert" />
              Llamar ahora: 658 312 752
            </a>
          </div>
          <p className="text-sm text-gray-300">Atención directa en clínica. Sin intermediarios, sin esperas.</p>
        </div>
      </section>

      {/* MARCAS RESUMEN */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">
          Servicio Técnico Oficial (SAT) de las marcas líderes del sector
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8 px-4 text-sm">
          No todos los técnicos pueden intervenir tu equipo con garantía de fabricante. FASTDENTAL es SAT oficial autorizado, lo que significa formación certificada, repuestos 100% originales y procedimientos homologados por cada marca.
        </p>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 px-4 mb-8">
          {marcas.map((marca) => (
            <span key={marca} className="bg-white border border-gray-200 px-5 py-3 rounded-lg font-semibold text-brand-dark shadow-sm">
              {marca}
            </span>
          ))}
        </div>
        <Link href="/marcas" className="text-brand-mint font-bold hover:underline text-lg">
          Ver todas las marcas con las que trabajamos →
        </Link>
      </section>

      {/* SERVICIOS PRINCIPALES */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
          ¿Qué tipo de avería o mantenimiento resolvemos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="p-6 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/2035/2035008.png" alt="Sillón dental" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Sillones dentales</h3>
            <p className="text-gray-600 text-sm">Reparación de motores, hidráulica, tapicería y electrónica.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/1686/1686363.png" alt="Autoclave" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Autoclaves y esterilización</h3>
            <p className="text-gray-600 text-sm">Mantenimiento preventivo legal y reparación urgente.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/2198/2198274.png" alt="Compresor" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Compresores y turbinas</h3>
            <p className="text-gray-600 text-sm">Diagnóstico de fugas, presión y ruido anómalo.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/9133/9133658.png" alt="Radiología" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Equipos de radiología</h3>
            <p className="text-gray-600 text-sm">Puesta a punto y calibración de sensores.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/5220/5220449.png" alt="Generador de agua" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Generadores de agua tratada</h3>
            <p className="text-gray-600 text-sm">Instalación y mantenimiento DenTwater.</p>
          </div>
          <div className="p-6 border border-gray-100 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mb-4 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/7018/7018556.png" alt="Mantenimiento legal" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Mantenimiento preventivo legal</h3>
            <p className="text-gray-600 text-sm">Revisiones periódicas obligatorias según normativa.</p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/servicios" className="text-brand-mint font-bold hover:underline text-lg">
            Ver todos los servicios →
          </Link>
        </div>
      </section>

      {/* POR QUÉ ELEGIR FASTDENTAL */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-4">
            Cada minuto de sillón parado es un paciente perdido
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Sabemos lo que significa para una clínica tener un equipo averiado: agenda bloqueada, pacientes reprogramados y pérdida de ingresos. Por eso FASTDENTAL prioriza la respuesta rápida y la resolución en la primera visita.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mb-3 bg-brand-light rounded-lg flex items-center justify-center p-2">
                <Image src="https://cdn-icons-png.flaticon.com/512/8295/8295240.png" alt="Respuesta rápida" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Respuesta rápida</h3>
              <p className="text-sm text-gray-600">Desplazamiento directo a tu clínica, sin desplazarte tú.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mb-3 bg-brand-light rounded-lg flex items-center justify-center p-2">
                <Image src="https://cdn-icons-png.flaticon.com/512/2617/2617793.png" alt="Técnico certificado" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Técnico certificado</h3>
              <p className="text-sm text-gray-600">Francisco Agüera Gómez, especialista en aparatología dental con formación oficial de fabricante.[cite: 2]</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mb-3 bg-brand-light rounded-lg flex items-center justify-center p-2">
                <Image src="https://cdn-icons-png.flaticon.com/512/7263/7263655.png" alt="Repuestos originales" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Repuestos originales</h3>
              <p className="text-sm text-gray-600">Solo piezas homologadas, garantía real del fabricante.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 mb-3 bg-brand-light rounded-lg flex items-center justify-center p-2">
                <Image src="https://cdn-icons-png.flaticon.com/512/6361/6361130.png" alt="Trato directo" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Trato directo y transparente</h3>
              <p className="text-sm text-gray-600">Sin gestorías ni intermediarios: hablas siempre con el técnico que repara tu equipo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONA DE COBERTURA */}
      <section className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Vamos nosotros. Tú sigue atendiendo pacientes.</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          FASTDENTAL es un servicio técnico itinerante: nos desplazamos directamente a tu clínica con las herramientas y repuestos necesarios para intervenir in situ. Actualmente damos cobertura a clínicas dentales de <strong>la Comarca de la Selva</strong>, con ampliación progresiva a nuevas zonas.
        </p>
        <p className="text-sm text-gray-400 italic">¿Tu clínica está fuera de esta zona? Contacta con nosotros y consultamos disponibilidad.</p>
      </section>

      {/* RESEÑAS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-2">Clínicas que ya confían en FASTDENTAL</h2>
          <p className="text-gray-500 mb-8">La opinión de quienes ya han trabajado con nosotros es nuestra mejor carta de presentación.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 text-left">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-sm text-gray-600 mb-4">"Reseña de ejemplo de clínica — pendiente de sustituir por reseña real de Google/Trustpilot"</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 text-left">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-sm text-gray-600 mb-4">"Reseña de ejemplo de clínica — pendiente de sustituir por reseña real de Google/Trustpilot"</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 text-left">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-sm text-gray-600 mb-4">"Reseña de ejemplo de clínica — pendiente de sustituir por reseña real de Google/Trustpilot"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-brand-mint text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Tu equipo dental necesita revisión o está averiado?</h2>
          <p className="mb-8 text-lg">Contacta ahora y te confirmamos disponibilidad en el mismo día.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/34658312752" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 flex items-center justify-center gap-2">
              <Image src="https://www.freeiconspng.com/uploads/whatsapp-icon-png-13.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6 object-contain" />
              Escribir por WhatsApp
            </a>
            <Link href="/contacto" className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 flex items-center justify-center gap-2">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8OTHTV8gufv-D8Kg2UY3LMVWL0UMUn3iWnEs4QCQ1A&s=10" alt="Contacto" width={24} height={24} className="w-6 h-6 object-contain" />
              Rellenar formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}