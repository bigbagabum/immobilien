import { Product } from "@/common/types/Product";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const { id, title, price, description, images } = product;
  return (
    <div >
    
      <Image src={images[0]} alt={title} width={300} height={300} unoptimized className="h-64 w-full object-cover rounded-2xl mb-5"/>
      <h3>
        <Link href={`/products/${id}`} className="text-xl font-semibold">{title}</Link>
      </h3>
      <p className="text-gray-600 text-base mt-3 line-clamp-3">
        {description}
      </p>
      <p className="mt-5 text-2xl font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;




   