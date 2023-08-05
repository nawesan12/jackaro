import Breadcrumb from "@/components/Breadcrumb";
import AddToCart from "@/components/UniqueProduct/AddToCart";
import AddToFavorites from "@/components/UniqueProduct/AddToFavorites";
import ColorSelect from "@/components/UniqueProduct/ColorSelect";
import Description from "@/components/UniqueProduct/Description";
import Details from "@/components/UniqueProduct/Details";
import Price from "@/components/UniqueProduct/Price";
import Review from "@/components/UniqueProduct/Review";
import SelectSize from "@/components/UniqueProduct/SelectSize";
import Title from "@/components/UniqueProduct/Title";
import Image from "next/image";

async function fetchUniqueProduct(productName: string) {
  const res = await fetch(`http://localhost:3000/api/products/unique`, {
    method: "POST",
    body: JSON.stringify({ productName }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}

export default async function UniqueProductPage({
  params,
}: {
  params: { producto: string; collection: string };
}) {
  const { collection, producto } = params;

  const { product, error } = await fetchUniqueProduct(producto);

  return (
    <>
      {error === true ? (
        <>
          <h1>Producto no encontrado</h1>
        </>
      ) : (
        <>
          <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 mb-12 mx-auto">
              <Breadcrumb collection={collection} producto={producto} />
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Image
                  width={1000}
                  height={1000}
                  alt="ecommerce"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={product.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <Title collection={collection} producto={producto} />
                  <Review />
                  <Description lore={product.lore} />

                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <ColorSelect />
                    <div className="flex ml-6 items-center">
                      <SelectSize />
                    </div>
                  </div>
                  <footer className="flex">
                    <Price price={product.price} />
                    <AddToCart />
                    <AddToFavorites />
                  </footer>
                </div>
              </div>
            </div>
          </section>

          <Details />
        </>
      )}
    </>
  );
}
