import { Product } from "./Product";

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[];
    }
}

export interface ProductFetchResponse {
    data: {
        Product: Product;
    }
}
