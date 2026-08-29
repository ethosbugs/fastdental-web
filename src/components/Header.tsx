import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt="FASTDENTAL"
            width={280}
            height={80}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-display text-sm font-bold uppercase tracking-wide text-brand-dark">
          <Link href="/" className="hover:text-brand-mint transition-colors">Inicio</Link>
          <Link href="/servicios" className="hover:text-brand-mint transition-colors">Servicios</Link>
          <Link href="/marcas" className="hover:text-brand-mint transition-colors">Marcas</Link>
          <Link href="/contacto" className="hover:text-brand-mint transition-colors">Contacto</Link>
        </nav>

        <a
          href="tel:658312752"
          className="group flex items-center gap-2 bg-brand-dark text-white pl-3 pr-4 py-2.5 rounded-none font-display font-bold text-sm border-2 border-brand-dark hover:bg-white hover:text-brand-dark transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" aria-hidden="true" />
          658 312 752
        </a>
      </div>
    </header>
  );
}
