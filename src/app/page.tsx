import Carousel from "@/components/Carousel";
import FeaturedSection from "@/components/Sections/Featured";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <Carousel />
      <section className="my-4 px-4">
        <hr />
        <h2 className="text-6xl my-4 font-bold text-center lg:text-9xl lg:text-left">
          Stay bold to unleash your style. Stay bold to keep your spirit.
        </h2>
        <hr />
      </section>

      <section className="button-container flex items-center">
        <Link
          className="group relative inline-block mx-auto focus:outline-none focus:ring"
          href="/tienda"
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-black transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 "></span>

          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white">
            Ver Tienda
          </span>
        </Link>
      </section>

      <FeaturedSection />
    </main>
  );
}
