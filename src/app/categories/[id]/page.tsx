import { notFound } from "next/navigation";
import Link from "next/link";
import type { Category } from "@/common/types/Category";

async function fetchCategory(id: string): Promise<Category> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) return notFound();
    throw new Error(`Failed to fetch category: ${res.status}`);
  }

  return res.json();
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = await fetchCategory(id);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/categories" className="text-gray-600 hover:underline">
        ← Back to categories
      </Link>

      <div className="mt-6 rounded-3xl bg-gray-100 p-6">
        <img
          src={category.image}
          alt={category.name}
          className="h-80 w-full object-cover rounded-2xl mb-6"
        />
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="text-gray-600 mt-2">Category ID: {category.id}</p>
      </div>
    </section>
  );
}
