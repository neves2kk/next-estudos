"use client"

import { Product } from "@/types/Product";
import { ProductFetchResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcherById = (id: string) : AxiosPromise<ProductFetchResponse> => {
    return axios.post(process.env.NEXT_PUBLIC_API_URL!, {
        query: `
            query {
                Product(id: "${id}") {
                    id
                    name
                    price_in_cents
                    description
                    category
                    image_url
                }
            }
        `
    })
}


export function useProduct(id: string){
    const {data} = useQuery({
        queryFn:  () => fetcherById(id),
        queryKey: ['product', id],
        enabled: !!id
    })

    return data?.data.data.Product as Product | undefined;
}