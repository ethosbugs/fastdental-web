import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <Image 
            src="/Logo.png" 
            alt="FASTDENTAL" 
            width={320} 
            height={90} 
            className="h-24 w-auto brightness-200 contrast-200 mb-4 object-contain" 
          />
          <p className="text-gray-300 text-sm">Servicio Técnico Oficial de Aparatología Dental</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-brand-mint">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link href="/marcas" className="hover:text-white">Marcas</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-brand-mint">Contacto Directo</h4>
          <p className="text-sm text-gray-300 flex items-center gap-2 mb-2">
            <Image src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Móvil" width={16} height={16} className="w-4 h-4 object-contain brightness-0 invert" />
            658 312 752
          </p>
          <p className="text-sm text-gray-300 flex items-center gap-2 mb-2">
            <Image src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" width={16} height={16} className="w-4 h-4 object-contain brightness-0 invert" />
            sat.fastdental@gmail.com
          </p>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <Image src="https://img.icons8.com/color/1200/map-pin.jpg" alt="Ubicación" width={16} height={16} className="w-4 h-4 object-contain" />
            Comarca de la Selva
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center pt-6 text-xs text-gray-400">
        © 2026 FASTDENTAL — Francisco Agüera Gómez. Todos los derechos reservados.
      </div>
    </footer>
  );
}