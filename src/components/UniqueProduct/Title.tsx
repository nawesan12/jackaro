export default function Title({
  collection,
  producto,
}: {
  collection: string;
  producto: string;
}) {
  return (
    <>
      <h2 className="text-sm title-font text-gray-500 tracking-widest">
        {collection}
      </h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        {producto}
      </h1>
    </>
  );
}
