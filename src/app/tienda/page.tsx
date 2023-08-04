import Link from "next/link";

export default function StorePage() {
  return (
    <section className="bg-white h-screen">
      Tienda
      <Link href="/tienda/remera">Ver remera</Link>
    </section>
  );
}
