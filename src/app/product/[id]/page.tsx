"use client";

import * as React from "react";
import { useProduct } from "@/hooks/useProduct";
import { BackButton } from "@/components/backButton";
import { useRouter } from "next/navigation"

export default function Product({ params }: { params: Promise<{ id: string }> }) {

  const { id } = React.use(params);  
  const product = useProduct(id);    
  const router = useRouter();

  return (
    <div className="bg-(--background) w-full h-full px-40 py-10">
      <BackButton  onClick={()=> { router.push("/")}}/>
      <div>
        {product && (
            <div className="flex pt-5 gap-10">
                <img src={product.image_url} alt={product.name} className="w-160 h-auto rounded-sm "/>
                <div className="flex flex-col">
                    <h1 className="text-(--text-dark) text-lg ">{product.category}</h1>
                    <h1 className="text-(--text-dark) text-4xl pt-5">{product.name}</h1>
                    <span className="font-bold text-2xl"> R$ {product.price_in_cents /100}</span>

                    <p className="text-(--text-dark) text-md pt-5">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                    <h1 className="text-(--text-dark) text-lg pt-10">DESCRIÇÃO</h1>
                    <p className="text-(--text-dark) text-lg">
                     {product.description}
                    </p>
                </div>

            </div>
        )}
      </div>
    </div>
  );
}
