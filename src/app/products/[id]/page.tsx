import { Product } from "@/common/types/Product";
import  ProductCarousel  from "@/components/product-carousel";
import { notFound } from "next/navigation";

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 60 },
    //   cache: "force-cache", // default
  });
  if (res.status === 404) notFound();
  if (!res.ok) {
    
    const err = await res.json();
    const {message} = err;
    throw new Error(message);}

  return res.json();
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await fetchProduct(id);
  return <div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <ProductCarousel images={product.images}/>
  </div>;
};

export default ProductPage;
