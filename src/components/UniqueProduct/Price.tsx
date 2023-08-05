export default function Price({ price }: { price: string }) {
  return (
    <span className="title-font font-medium text-2xl text-gray-900">
      ${price} ARS
    </span>
  );
}
