import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  name: string;
  image: string;
  price: string;
  collection: string;
};

export default function Product({
  name,
  image,
  price,
  collection,
}: ProductProps) {
  return (
    <li>
      <Link
        href={`/tienda/${collection}/${name}`}
        className="group block overflow-hidden"
      >
        <Image
          width={700}
          height={700}
          src={image}
          alt={name}
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="sr-only">Precio</span>

            <span className="tracking-wider text-gray-900">${price} ARS</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
