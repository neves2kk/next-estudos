"use client"

import { FilterType } from "@/types/FilterType";
import { ProductsFetchResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { getCategoryByType } from "@/utils/getCategoryByType";
import { PriorityType } from "@/types/PriorityType";
import { getFieldPriority } from "@/utils/getFieldPriority";



const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL!,{query},
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const MountQuery = (type: FilterType, priority: PriorityType) => {
  const sort = getFieldPriority(priority);
  const category = getCategoryByType(type);

  if (type === FilterType.ALL) {
    return `
      query {
        allProducts(
          sortField: "${sort.field}",
          sortOrder: "${sort.order}"
        ) {
          id
          name
          price_in_cents
          image_url
        }
      }
    `;
  }

  return `
    query {
      allProducts(
        filter: { category: "${category}" },
        sortField: "${sort.field}",
        sortOrder: "${sort.order}"
      ) {
        id
        name
        price_in_cents
        image_url
      }
    }
  `;
};


export function useProducts(){
    const { type, priority } = useFilter();
    const queryByType = MountQuery(type, priority);
    const {data} = useQuery({
        queryFn: () => fetcher(queryByType),
        queryKey: ['products', type, priority]
    })

    return data?.data.data.allProducts;
}