import Image from "next/image";
import Product from "./Product";

export default function ProductsList({ products }: { products: string[] }) {
  return (
    <section className="lg:col-span-3">
      <ul className="grid gap-4 mb-4 lg:mb-12 sm:grid-cols-2 lg:grid-cols-3">
        <Product
          collection="Nakaru"
          name="Hito"
          image="https://images.unsplash.com/photo-1647628632602-99542ede0930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          price="24.00"
        />
        <Product
          name="Ikaros"
          collection="Nakaru"
          image="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          price="24.00"
        />
        <Product
          name="Urovia"
          collection="Nakaru"
          image="https://images.unsplash.com/photo-1521166051189-96e872dfe077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          price="24.00"
        />
        <Product
          name="Hito"
          collection="Nakaru"
          image="https://images.unsplash.com/photo-1647628632602-99542ede0930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          price="24.00"
        />
        <Product
          name="Ikaros"
          collection="Nakaru"
          image="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          price="24.00"
        />
        <Product
          name="Urovia"
          collection="Nakaru"
          image="https://images.unsplash.com/photo-1521166051189-96e872dfe077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          price="24.00"
        />
      </ul>
    </section>
  );
}
