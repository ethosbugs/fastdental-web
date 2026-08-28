import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FASTDENTAL — Servicio Técnico Oficial Dental',
  description: 'Reparación y mantenimiento integral de aparatología dental.',
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-800 bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}