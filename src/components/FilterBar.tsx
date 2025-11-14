"use client"

import { ButtonFilterType } from "./ButtonFilterType";
import Setinha from '../assets/setinha.svg';
import { useState } from "react";
import { FilterPopUp } from "./FilterPopUp";
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/FilterType";
import { useProducts } from "@/hooks/useProducts";

export function FilterBar(){

    const {type,setType}  = useFilter();
    const [popUpOpen, setPopUpOpen] = useState(false);
    const products = useProducts();
    console.log(products);

    return (
        <div className="flex justify-between">
            <div className="flex gap-10">
                <ButtonFilterType 
                isActive={type === FilterType.ALL} 
                onClick={() => setType(FilterType.ALL)} 
                name= "TODOS OS PRODUTOS"
                />
                <ButtonFilterType 
                isActive={type === FilterType.SHIRT} 
                onClick={() => setType(FilterType.SHIRT)} 
                name= "CAMISETAS"
                />
                <ButtonFilterType 
                isActive={type === FilterType.MUG} 
                onClick={() => setType(FilterType.MUG)}  
                name= "CANECAS"
                />

            </div>

            <div className="flex w-40 items-center gap-2 relative">
                <button className="text-(--text-dark) cursor-pointer flex w-40 items-end justify-end " onClick={()=> setPopUpOpen(!popUpOpen)}>
                    Organizar por
                    <img src={Setinha.src} alt="Setinha" />
                </button>
                
                { popUpOpen && (
                    <FilterPopUp/>
                )}
            </div>
        </div>
    )
}