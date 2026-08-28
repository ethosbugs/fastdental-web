import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Identidad */}
        <div>
          <Image 
            src="/Logo.png" 
            alt="FASTDENTAL Logo" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain mb-4" 
          />
          <p className="text-sm text-gray-400">
            Servicio Técnico Oficial de Aparatología Dental
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-bold text-brand-mint mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:underline">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:underline">Servicios</Link>
            </li>
            <li>
              <Link href="/marcas" className="hover:underline">Marcas</Link></li>
            <li>
              <Link href="/contacto" className="hover:underline">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Contacto Directo */}
        <div>
          <h4 className="font-bold text-brand-mint mb-4">Contacto Directo</h4>
          <div className="space-y-3 text-sm text-gray-300">
            <a href="tel:658312752" className="flex items-center gap-2 hover:underline">
              <Image 
                src="https://i.pinimg.com/736x/84/4e/8c/844e8c1dd3746e507203b87961f77d3f.jpg" 
                alt="Teléfono" 
                width={18} 
                height={18} 
                className="w-4 h-4 rounded-full object-cover" 
              />
              658 312 752
            </a>
            <a href="mailto:sat.fastdental@gmail.com" className="flex items-center gap-2 hover:underline">
              <Image 
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
                alt="Email" 
                width={18} 
                height={18} 
                className="w-4 h-4 object-contain brightness-0 invert" 
              />
              sat.fastdental@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Image 
                src="https://cdn-icons-png.flaticon.com/512/4790/4790510.png" 
                alt="Ubicación" 
                width={18} 
                height={18} 
                className="w-4 h-4 object-contain" 
              />
              <span>Comarca de la Selva</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2026 FASTDENTAL — Todos los derechos reservados.
      </div>
    </footer>
  );
}