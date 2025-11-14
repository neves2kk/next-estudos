interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement>{
    productImage: string;
    productName: string;
    productPrice: number;
}

export function ProductCard({ productImage, productName, productPrice, ...props }: ProductCardProps){
    return(
        <div {...props}>
            <img src={productImage} alt="Product Image" className="h-70 w-full rounded-t-2xl"/>
            <div className="flex flex-col  gap-2 pt-2 bg-white px-4 pb-4 rounded-b-2">
                <span className="text-(--text-dark)">{productName}</span>
                <span className="border text-[#DCE2E5]"></span>
                <span className="font-semibold">R$ {productPrice}</span>
            </div>
        </div>
    )
}