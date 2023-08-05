import Filters from "@/components/Store/Filters";
import ProductsList from "@/components/Store/ProductsList";
import Image from "next/image";
import Link from "next/link";

export default function StorePage() {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Nakaru
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            En el corazón de la metrópolis, Nakaru emerge como una deidad
            moderna de la naturaleza. Con su energía vanguardista y estampados
            vanguardistas, la colección Nakaru captura la fusión entre la vida
            urbana y la esencia salvaje. Únete a la revolución de estilo con
            Nakaru.
          </p>
        </header>

        <section className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <Filters />

          <ProductsList products={["", ""]} />
        </section>
      </div>
    </section>
  );
}
