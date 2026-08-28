import Link from 'next/link';
import Image from 'next/image';

export default function Marcas() {
  const marcas = [
    { name: "CATTANI", desc: "Sistemas de aspiración y compresores", logo: "https://i.ibb.co/R4ZyYGHP/logo-cattani-2x.png" },
    { name: "mocom", desc: "Esterilización y autoclaves", logo: "https://i.ibb.co/1fF33r40/logo-mocom-3.png" },
    { name: "CASTELLINI", desc: "Unidades de tratamiento y sillones", logo: "https://i.ibb.co/mVPQRZCr/Captura-de-pantalla-2026-08-28-222335.png" },
    { name: "mectron medical technology", desc: "Piezoelectricidad y cirugía dental", logo: "https://www.vostars.eu/wp-content/uploads/2019/11/logo_mectron.png" },
    { name: "FEDESA", desc: "Sillones y equipos dentales", logo: "https://www.dynamiquedentaire.com/wp-content/uploads/2018/10/logo-fedesa.png" },
    { name: "MORITA", desc: "Aparatología y diagnóstico", logo: "https://i.ibb.co/Mxndjf5S/Captura-de-pantalla-2026-08-28-222657.png" },
    { name: "DenTwater", desc: "Generadores de agua tratada", logo: "https://i.ibb.co/Y7S2hGpP/q7QSX.jpg" },
    { name: "Vatech", desc: "Radiología digital panorámica y 3D", logo: "https://i.ibb.co/5XHKcYf2/Captura-de-pantalla-2026-08-28-222135.png" },
    { name: "SIGER", desc: "Equipos de radiología y sillones", logo: "https://i.ibb.co/mCWbVnSD/image.jpg" }
  ];

  return (
    <main>
      <section className="bg-brand-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Servicio Técnico Oficial (SAT) autorizado</h1>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Trabajamos como SAT oficial de las marcas líderes en equipamiento dental. Esto garantiza que cada intervención se realiza con procedimientos homologados y piezas originales.
        </p>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mx-auto mb-2 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/2617/2617793.png" alt="Formación certificada" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-brand-dark">Formación certificada</h3>
            <p className="text-sm text-gray-600 mt-2">Cada marca certifica directamente al técnico que interviene sus equipos.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mx-auto mb-2 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/7263/7263655.png" alt="Repuestos originales" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-brand-dark">Repuestos 100% originales</h3>
            <p className="text-sm text-gray-600 mt-2">Nada de piezas genéricas: solo componentes homologados por el fabricante.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 mx-auto mb-2 bg-brand-light rounded-lg flex items-center justify-center p-2">
              <Image src="https://cdn-icons-png.flaticon.com/512/7018/7018556.png" alt="Garantía" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-bold text-brand-dark">Garantía de fabricante</h3>
            <p className="text-sm text-gray-600 mt-2">Las reparaciones realizadas por un SAT oficial no invalidan la garantía de tu equipo.</p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {marcas.map((m, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl text-center hover:border-brand-mint transition-colors bg-white flex flex-col items-center justify-between">
              <div className="h-24 w-full flex items-center justify-center mb-4">
                <Image src={m.logo} alt={m.name} width={160} height={70} className="max-h-20 w-auto object-contain" />
              </div>
              <p className="text-sm text-gray-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-brand-mint text-white text-center px-4">
        <h3 className="text-2xl font-bold mb-2">¿Tu equipo es de una de estas marcas?</h3>
        <p className="mb-6">Contacta con nosotros para una intervención con garantía oficial.</p>
        <div className="flex justify-center gap-4">
          <Link href="/servicios" className="bg-white text-brand-dark px-6 py-3 rounded-lg font-bold">
            Ver servicios
          </Link>
          <Link href="/contacto" className="bg-brand-dark text-white px-6 py-3 rounded-lg font-bold">
            Contactar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}