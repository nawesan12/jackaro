import { CartProvider } from "@/context/Cart";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisController from "@/components/Lenis/LenisController";

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
        <LenisController>
          <CartProvider>{children}</CartProvider>
        </LenisController>
      </body>
    </html>
  );
}
