"use client"

import { FilterBar } from "@/components/FilterBar";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {

  const products = useProducts();

  return (
      <div className="bg-[#F3F5F6]  px-20 py-4 w-full h-full sm:px-40 sm:py-8">
        <FilterBar />
        <div className="flex gap-8 flex-wrap justify-between pt-20 ">
          {products && products.map(product => (
                <ProductCard
                  className="w-75 h-90 cursor-pointer"
                  key={product.id}
                  productImage={product.image_url} 
                  productName={product.name}
                  productPrice={product.price_in_cents / 100}
                />
          ))}
        </div>
      </div>
  );
}
