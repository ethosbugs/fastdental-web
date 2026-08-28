import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Identidad / Logo */}
        <div className="flex flex-col justify-start">
          <Image 
            src="/Logo.png" 
            alt="FASTDENTAL Logo" 
            width={220} 
            height={60} 
            className="h-14 w-auto object-contain mb-3 brightness-0 invert self-start" 
          />
          <p className="text-sm text-gray-300 font-medium">
            Servicio Técnico Oficial de Aparatología Dental
          </p>
        </div>

        {/* Navegación entre secciones */}
        <div>
          <h4 className="font-bold text-brand-mint text-lg mb-4">Navegación</h4>
          <ul className="space-y-2.5 text-sm text-gray-200 font-medium">
            <li>
              <Link href="/" className="hover:text-brand-mint transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-brand-mint transition-colors">Servicios</Link>
            </li>
            <li>
              <Link href="/marcas" className="hover:text-brand-mint transition-colors">Marcas</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-brand-mint transition-colors">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Contacto Directo */}
        <div>
          <h4 className="font-bold text-brand-mint text-lg mb-4">Contacto Directo</h4>
          <div className="space-y-3.5 text-sm text-gray-200 font-medium">
            <a href="tel:658312752" className="flex items-center gap-3 hover:text-brand-mint transition-colors">
              <Image 
                src="https://i.ibb.co/T6sX4zx/455705.png" 
                alt="Teléfono" 
                width={18} 
                height={18} 
                className="w-4 h-4 object-contain brightness-0 invert" 
              />
              <span>658 312 752</span>
            </a>
            <a href="mailto:sat.fastdental@gmail.com" className="flex items-center gap-3 hover:text-brand-mint transition-colors">
              <Image 
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
                alt="Email" 
                width={18} 
                height={18} 
                className="w-4 h-4 object-contain brightness-0 invert" 
              />
              <span>sat.fastdental@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <Image 
                src="https://i.ibb.co/1tDYzxVH/tree-icon-125578.webp" 
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

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-700/60 text-center text-xs text-gray-400">
        © 2026 FASTDENTAL — Todos los derechos reservados.
      </div>
    </footer>
  );
}