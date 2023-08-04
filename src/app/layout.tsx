import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackaro | Ropa Urbana",
  description:
    "Jackaro es una marca de ropa ubicada en Mar del Plata, Argentina. @jackaro.ar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
