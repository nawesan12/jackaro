import Filters from "@/components/Store/Filters";
import ProductsList from "@/components/Store/ProductsList";
import Image from "next/image";
import Link from "next/link";

const fetchCollection = async (collection: string) => {
  const res = await fetch(`http://localhost:3000/api/collections/unique`, {
    method: "POST",
    body: JSON.stringify({ desiredCollection: collection }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
};

export default async function Page({
  params,
}: {
  params: { collection: string };
}) {
  const { collection, error } = await fetchCollection(params.collection);

  return (
    <>
      {error ? (
        <>Categoria no disponible!</>
      ) : (
        <>
          <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                {collection.name}
              </h2>

              <p className="mt-4 max-w-md text-gray-500">{collection.lore}</p>
            </header>

            <section className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
              <Filters />

              <ProductsList
                products={[...collection.products]}
                collection={collection.name}
              />
            </section>
          </section>

          <section className="grid grid-cols-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg lg:col-span-2"></div>
            <div className="rounded-lg">
              <Link href="/tienda" className="group relative block">
                <div className="relative h-[350px] sm:h-[450px]">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <Image
                    width={700}
                    height={700}
                    src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div className="inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black">
                    Skinny Jeans Blue
                  </h3>

                  <p className="mt-1.5 max-w-[40ch] text-xs text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos sequi dicta impedit aperiam ipsum!
                  </p>

                  <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    VER AHORA
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
