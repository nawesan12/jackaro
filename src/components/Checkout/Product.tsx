import Image from "next/image";

type CheckoutProductProps = {
  name: string;
  price: string;
  model: string;
};

export default function CheckoutProduct({
  name,
  price,
  model,
}: CheckoutProductProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <Image
        width={700}
        height={700}
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{name}</span>
        <span className="float-right text-gray-400">{model}</span>
        <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  );
}
