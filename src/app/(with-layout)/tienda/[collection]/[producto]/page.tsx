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

export default function UniqueProductPage({
  params,
}: {
  params: { producto: string };
}) {
  const product = params.producto;

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 mb-12 mx-auto">
          <Breadcrumb />
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              width={1000}
              height={1000}
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="https://images.unsplash.com/photo-1647628632602-99542ede0930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <Title />
              <Review />
              <Description />

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <ColorSelect />
                <div className="flex ml-6 items-center">
                  <SelectSize />
                </div>
              </div>
              <footer className="flex">
                <Price />
                <AddToCart />
                <AddToFavorites />
              </footer>
            </div>
          </div>
        </div>
      </section>

      <Details />

      {/* ------------------------------------ */}
    </>
  );
}
