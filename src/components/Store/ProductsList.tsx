import Product from "./Product";

export default function ProductsList({
  products,
  collection,
}: {
  products: any[];
  collection: string;
}) {
  return (
    <section className="lg:col-span-3">
      <ul className="grid gap-4 mb-4 lg:mb-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Product
            key={index}
            lore={product.lore}
            collection={collection}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
}
