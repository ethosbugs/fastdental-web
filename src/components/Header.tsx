import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="FASTDENTAL Logo" width={180} height={50} priority className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 font-medium text-brand-dark">
          <Link href="/" className="hover:text-brand-mint transition-colors">Inicio</Link>
          <Link href="/servicios" className="hover:text-brand-mint transition-colors">Servicios</Link>
          <Link href="/marcas" className="hover:text-brand-mint transition-colors">Marcas</Link>
          <Link href="/contacto" className="hover:text-brand-mint transition-colors">Contacto</Link>
        </nav>
        <a 
          href="https://wa.me/34658312752?text=Hola%20FASTDENTAL,%20necesito%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-brand-mint text-white px-5 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </header>
  );
}