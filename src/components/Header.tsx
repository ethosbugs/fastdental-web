import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/Logo.png" 
            alt="FASTDENTAL Logo" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Menú Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-brand-mint transition-colors">
            Inicio
          </Link>
          <Link href="/servicios" className="hover:text-brand-mint transition-colors">
            Servicios
          </Link>
          <Link href="/marcas" className="hover:text-brand-mint transition-colors">
            Marcas
          </Link>
          <Link href="/contacto" className="hover:text-brand-mint transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Botón de Llamada */}
        <div>
          <a 
            href="tel:658312752" 
            className="bg-brand-mint text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            <Image 
              src="https://i.pinimg.com/736x/84/4e/8c/844e8c1dd3746e507203b87961f77d3f.jpg" 
              alt="Teléfono" 
              width={20} 
              height={20} 
              className="w-5 h-5 rounded-full object-cover" 
            />
            LLAMAR AHORA
          </a>
        </div>
      </div>
    </header>
  );
}