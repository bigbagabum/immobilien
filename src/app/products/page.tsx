import { Product } from "@/common/types/Product";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  return res.json();
}

const ProductsPage = async () => {
  const products = await fetchProducts();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((product) => (
    <li
      key={product.id}
      className="rounded-3xl bg-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow"
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="h-64 w-full object-cover rounded-2xl mb-5"
      />

      <h3 className="text-xl font-semibold">
        {product.title}
      </h3>

      <p className="text-gray-600 text-base mt-3 line-clamp-3">
        {product.description}
      </p>

      <div className="mt-5 text-2xl font-bold">
        ${product.price}
      </div>
    </li>
  ))}
</ul>

    </section>
  );
};

export default ProductsPage;
