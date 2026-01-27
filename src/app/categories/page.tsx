import Link from "next/link";
import type { Category } from "@/common/types/Category";

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
  cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return await res.json();
}

export default async function Categories() {
  const categories = await fetchCategories();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((c) => (
          <li
            key={c.id}
            className="rounded-3xl bg-gray-100 p-6 hover:shadow-lg transition-shadow"
          >
            <Link href={`/categories/${c.slug}`} className="block">
              <img
                src={c.image}
                alt={c.name}
                className="h-56 w-full object-cover rounded-2xl mb-4"
              />
              <h2 className="text-xl font-semibold">{c.name}</h2>
              <p className="text-gray-600 mt-2">Open category →</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
