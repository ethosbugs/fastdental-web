import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 relative overflow-hidden">
      {/* dashed service line */}
      <div className="absolute top-0 left-0 right-0 h-px border-t-2 border-dashed border-white/20" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <Image
            src="/Logo.png"
            alt="FASTDENTAL"
            width={280}
            height={80}
            className="h-14 w-auto brightness-0 invert mb-4 object-contain"
          />
          <p className="text-gray-400 text-sm font-mono tracking-wide">
            SAT-01 · Servicio Técnico Oficial<br />Aparatología Dental
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-4 text-brand-mint">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="/marcas" className="hover:text-white transition-colors">Marcas</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-4 text-brand-mint">
            Contacto directo
          </h4>
          <ul className="space-y-2 text-sm text-gray-300 font-mono">
            <li>658 312 752</li>
            <li>sat.fastdental@gmail.com</li>
            <li>Comarca de la Selva</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 font-mono">
        <span>© 2026 FASTDENTAL — Francisco Agüera Gómez</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
          Operativo · L–V 9:00–20:00
        </span>
      </div>
    </footer>
  );
}
