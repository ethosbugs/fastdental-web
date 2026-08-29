import Link from 'next/link';
import Image from 'next/image';

const marcas = [
  { name: "CATTANI", desc: "Sistemas de aspiración y compresores", logo: "https://i.ibb.co/R4ZyYGHP/logo-cattani-2x.png" },
  { name: "mocom", desc: "Esterilización y autoclaves", logo: "https://i.ibb.co/1fF33r40/logo-mocom-3.png" },
  { name: "CASTELLINI", desc: "Unidades de tratamiento y sillones", logo: "https://i.ibb.co/mVPQRZCr/Captura-de-pantalla-2026-08-28-222335.png" },
  { name: "mectron medical technology", desc: "Piezoelectricidad y cirugía dental", logo: "https://www.vostars.eu/wp-content/uploads/2019/11/logo_mectron.png" },
  { name: "FEDESA", desc: "Sillones y equipos dentales", logo: "https://www.dynamiquedentaire.com/wp-content/uploads/2018/10/logo-fedesa.png" },
  { name: "MORITA", desc: "Aparatología y diagnóstico", logo: "https://i.ibb.co/Mxndjf5S/Captura-de-pantalla-2026-08-28-222657.png" },
  { name: "DenTwater", desc: "Generadores de agua tratada", logo: "https://i.ibb.co/Y7S2hGpP/q7QSX.jpg" },
  { name: "Vatech", desc: "Radiología digital panorámica y 3D", logo: "https://i.ibb.co/5XHKcYf2/Captura-de-pantalla-2026-08-28-222135.png" },
  { name: "SIGER", desc: "Equipos de radiología y sillones", logo: "https://i.ibb.co/mCWbVnSD/image.jpg" },
];

const garantias = [
  { title: "Formación certificada", desc: "Cada marca certifica directamente al técnico que interviene sus equipos." },
  { title: "Repuestos 100% originales", desc: "Nada de piezas genéricas: solo componentes homologados por el fabricante." },
  { title: "Garantía de fabricante", desc: "Las reparaciones por un SAT oficial no invalidan la garantía de tu equipo." },
];

export default function Marcas() {
  return (
    <main>
      <section className="bg-brand-dark text-white py-20 px-4 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-brand-mint mb-3">Marcas homologadas</p>
        <h1 className="font-display text-4xl font-extrabold mb-4">Servicio Técnico Oficial (SAT) autorizado</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Trabajamos como SAT oficial de las marcas líderes en equipamiento dental. Cada
          intervención se realiza con procedimientos homologados y piezas originales.
        </p>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-dark/10 border border-brand-dark/10">
          {garantias.map((g) => (
            <div key={g.title} className="p-8 bg-white text-center border-t-2 border-brand-mint">
              <h3 className="font-display font-bold text-brand-dark mb-2">{g.title}</h3>
              <p className="text-sm text-gray-600">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-brand-dark/10 border border-brand-dark/10">
          {marcas.map((m) => (
            <div
              key={m.name}
              className="p-8 text-center bg-white hover:bg-brand-light transition-colors flex flex-col items-center justify-between"
            >
              <div className="h-24 w-full flex items-center justify-center mb-4">
                <Image src={m.logo} alt={m.name} width={160} height={70} className="max-h-20 w-auto object-contain" />
              </div>
              <p className="text-sm text-gray-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brand-mint text-white text-center px-4">
        <h3 className="font-display text-2xl font-bold mb-2">¿Tu equipo es de una de estas marcas?</h3>
        <p className="mb-8 text-white/90">Contacta con nosotros para una intervención con garantía oficial.</p>
        <div className="flex justify-center gap-4">
          <Link href="/servicios" className="bg-white text-brand-dark px-6 py-3 font-display font-bold">
            Ver servicios
          </Link>
          <Link href="/contacto" className="bg-brand-dark text-white px-6 py-3 font-display font-bold">
            Contactar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}
