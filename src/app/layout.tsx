import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "FASTDENTAL — Servicio Técnico Oficial de Aparatología Dental",
  description: "Reparación, mantenimiento y puesta a punto de tu clínica dental en la Comarca de la Selva. Rapidez, repuestos originales y garantía de fabricante.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <div>
          <Header />
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}