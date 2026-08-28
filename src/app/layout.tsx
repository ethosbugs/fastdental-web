import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FASTDENTAL — Servicio Técnico Oficial',
  description: 'Reparación y mantenimiento de aparatología dental',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}