import { Product } from "@/common/types/Product";
import ProductCard from "@/components/product-card";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 }, //isr - incremental static regeneration
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
      <ProductCard product={product} />
    </li>
  ))}
</ul>

    </section>
  );
};

export default ProductsPage;
