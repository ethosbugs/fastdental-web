import Image from 'next/image';

export default function Contacto() {
  return (
    <main className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">Contacto</p>
        <h1 className="font-display text-4xl font-extrabold text-brand-dark mb-4">Hablemos de tu clínica</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Respuesta rápida, sin intermediarios. Escríbenos, llámanos o rellena el formulario
          y te contestamos el mismo día.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-dark/10 border border-brand-dark/10">
        {/* Columna Izquierda: Info */}
        <div className="bg-brand-dark text-white p-10 flex flex-col justify-between">
          <div>
            <div className="mb-10">
              <Image src="/Logo.png" alt="FASTDENTAL" width={280} height={80} className="h-14 w-auto brightness-0 invert object-contain" />
            </div>
            <div className="space-y-7">
              <div className="border-l-2 border-brand-mint pl-4">
                <p className="font-mono text-xs text-brand-mint uppercase tracking-widest mb-1">Móvil / WhatsApp</p>
                <a href="https://wa.me/34658312752" className="text-2xl font-display font-bold hover:text-brand-mint transition-colors">658 312 752</a>
              </div>
              <div className="border-l-2 border-brand-mint pl-4">
                <p className="font-mono text-xs text-brand-mint uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:sat.fastdental@gmail.com" className="text-xl font-display font-bold hover:text-brand-mint transition-colors break-all">sat.fastdental@gmail.com</a>
              </div>
              <div className="border-l-2 border-brand-mint pl-4">
                <p className="font-mono text-xs text-brand-mint uppercase tracking-widest mb-1">Horario de atención</p>
                <p className="text-xl font-display font-bold">9:00 h – 20:00 h</p>
                <p className="text-xs text-gray-400 mt-1">Lunes a viernes</p>
              </div>
              <div className="border-l-2 border-brand-mint pl-4">
                <p className="font-mono text-xs text-brand-mint uppercase tracking-widest mb-1">Zona de cobertura</p>
                <p className="text-xl font-display font-bold">Comarca de la Selva</p>
                <p className="text-xs text-gray-400 mt-1">Ampliación progresiva a nuevas zonas</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-2 font-mono text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
            Disponible para nuevas solicitudes
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <form className="space-y-5 bg-white p-10">
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wide text-brand-dark mb-2">Nombre de la clínica</label>
            <input type="text" className="w-full border-2 border-gray-200 p-3 focus:border-brand-mint focus:outline-none transition-colors" required />
          </div>
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wide text-brand-dark mb-2">Nombre de contacto</label>
            <input type="text" className="w-full border-2 border-gray-200 p-3 focus:border-brand-mint focus:outline-none transition-colors" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-display font-bold uppercase tracking-wide text-brand-dark mb-2">Teléfono</label>
              <input type="tel" className="w-full border-2 border-gray-200 p-3 focus:border-brand-mint focus:outline-none transition-colors" required />
            </div>
            <div>
              <label className="block text-xs font-display font-bold uppercase tracking-wide text-brand-dark mb-2">Email</label>
              <input type="email" className="w-full border-2 border-gray-200 p-3 focus:border-brand-mint focus:outline-none transition-colors" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wide text-brand-dark mb-2">Marca / equipo afectado</label>
            <select className="w-full border-2 border-gray-200 p-3 focus:border-brand-mint focus:outline-none transition-colors">
              <option>CATTANI</option>
              <option>mocom</option>
              <option>CASTELLINI</option>
              <option>mectron medical technology</option>
              <option>FEDESA</option>
              <option>MORITA</option>
              <option>DenTwater</option>
              <option>Vatech</option>
              <option>SIGER</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wide text-brand-dark mb-2">Descripción de la avería</label>
            <textarea rows={4} className="w-full border-2 border-gray-200 p-3 focus:border-brand-mint focus:outline-none transition-colors" required></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-dark text-white font-display font-bold py-4 hover:bg-brand-mint transition-colors">
            Enviar consulta
          </button>
          <p className="text-xs text-gray-400 text-center">
            Al enviar este formulario, aceptas ser contactado por FASTDENTAL para gestionar tu solicitud.
          </p>
        </form>
      </div>
    </main>
  );
}
