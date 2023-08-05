export default function Details() {
  return (
    <section className="max-w-4xl mx-auto block px-4 text-3xl">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Modelo</dt>
          <dd className="text-gray-700 sm:col-span-2">Hito</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Coleccion</dt>
          <dd className="text-gray-700 sm:col-span-2">Nakaru</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Material</dt>
          <dd className="text-gray-700 sm:col-span-2">100% algodon</dd>
        </div>
      </dl>
    </section>
  );
}
