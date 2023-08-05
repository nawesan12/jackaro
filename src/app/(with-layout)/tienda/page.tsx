import Filters from "@/components/Store/Filters";
import ProductsList from "@/components/Store/ProductsList";

const fetchCollections = async () => {
  const res = await fetch("http://localhost:3000/api/collections", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
};

export default async function StorePage() {
  const { collections } = await fetchCollections();

  console.log(collections);

  return (
    <section className="mx-auto max-w-screen-2xl">
      {collections.map((collection: any, index: number) => (
        <article key={index} className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {collection.name}
            </h2>

            <p className="mt-4 max-w-md text-gray-500">{collection.lore}</p>
          </header>

          <section className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <Filters />

            <ProductsList
              products={collection.products}
              collection={collection.name}
            />
          </section>
        </article>
      ))}
    </section>
  );
}
