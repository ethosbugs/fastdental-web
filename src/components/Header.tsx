import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/Logo.png" 
            alt="FASTDENTAL" 
            width={320} 
            height={90} 
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-8 font-semibold text-brand-dark">
          <Link href="/" className="hover:text-brand-mint transition-colors">Inicio</Link>
          <Link href="/servicios" className="hover:text-brand-mint transition-colors">Servicios</Link>
          <Link href="/marcas" className="hover:text-brand-mint transition-colors">Marcas</Link>
          <Link href="/contacto" className="hover:text-brand-mint transition-colors">Contacto</Link>
        </nav>
        <a 
          href="tel:658312752" 
          className="bg-brand-mint text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Image src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Teléfono" width={16} height={16} className="w-4 h-4 object-contain brightness-0 invert" />
          658 312 752
        </a>
      </div>
    </header>
  );
}