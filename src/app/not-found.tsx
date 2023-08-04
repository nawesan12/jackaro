import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jackaro | Pagina no encontrada",
};

export default function Custom404() {
  return (
    <main className="flex flex-col h-screen bg-white">
      <Image
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        width={1000}
        height={700}
        className="object-cover w-full h-64"
      />

      <section className="flex items-center justify-center flex-1">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Esta pagina no existe!
          </h1>

          <p className="mt-4 text-gray-500">
            Donde te metiste? Volvamos a donde si hay contenido
          </p>

          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-black rounded hover:bg-zinc-900 focus:outline-none focus:ring"
          >
            Volver
          </Link>
        </div>
      </section>
    </main>
  );
}
