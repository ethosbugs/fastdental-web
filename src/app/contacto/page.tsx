import Image from 'next/image';

export default function Contacto() {
  return (
    <main className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-4">Hablemos de tu clínica</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Respuesta rápida, sin intermediarios. Escríbenos, llámanos o rellena el formulario y te contestamos el mismo día.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna Izquierda: Info */}
        <div className="bg-brand-light p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="mb-8 flex justify-center">
              <Image src="/Logo.png" alt="FASTDENTAL Logo" width={240} height={70} className="h-20 w-auto object-contain" />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Móvil" width={16} height={16} className="w-4 h-4 object-contain" />
                  <p className="font-bold text-xs text-brand-mint uppercase tracking-wider">Móvil / WhatsApp</p>
                </div>
                <a href="https://wa.me/34658312752" className="text-2xl font-bold text-brand-dark hover:underline">658 312 752</a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" width={16} height={16} className="w-4 h-4 object-contain" />
                  <p className="font-bold text-xs text-brand-mint uppercase tracking-wider">Email</p>
                </div>
                <a href="mailto:sat.fastdental@gmail.com" className="text-2xl font-bold text-brand-dark hover:underline">sat.fastdental@gmail.com</a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image src="https://cdn-icons-png.flaticon.com/512/880/88036.png" alt="Horario" width={16} height={16} className="w-4 h-4 object-contain" />
                  <p className="font-bold text-xs text-brand-mint uppercase tracking-wider">Horario de Atención</p>
                </div>
                <p className="text-xl font-bold text-brand-dark">De 9:00 h a 20:00 h</p>
                <p className="text-xs text-gray-500 mt-1">(Lunes a Viernes)</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Image src="https://img.icons8.com/color/1200/map-pin.jpg" alt="Ubicación" width={16} height={16} className="w-4 h-4 object-contain" />
                  <p className="font-bold text-xs text-brand-mint uppercase tracking-wider">Zona de cobertura</p>
                </div>
                <p className="text-xl font-bold text-brand-dark">Comarca de la Selva</p>
                <p className="text-xs text-gray-500 mt-1">(Ampliación progresiva a nuevas zonas)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <form className="space-y-4 bg-white p-6 border border-gray-100 rounded-2xl shadow-sm">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Nombre de la clínica</label>
            <input type="text" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-brand-mint focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Nombre de contacto</label>
            <input type="text" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-brand-mint focus:outline-none" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Teléfono</label>
              <input type="tel" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-brand-mint focus:outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-brand-mint focus:outline-none" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-1">Marca / equipo afectado</label>
            <select className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-brand-mint focus:outline-none">
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
            <label className="block text-sm font-medium text-brand-dark mb-1">Mensaje / descripción de la avería</label>
            <textarea rows={4} className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-brand-mint focus:outline-none" required></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-mint text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity">
            Enviar consulta
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            Al enviar este formulario, aceptas ser contactado por FASTDENTAL para gestionar tu solicitud.
          </p>
        </form>
      </div>
    </main>
  );
}