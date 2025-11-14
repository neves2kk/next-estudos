'use client';

import { FilterType } from "@/types/FilterType";
import { PriorityType } from "@/types/PriorityType";
import { createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.NewestArrivals,
    setSearch: (search: string) => {},
    setPage: (page: number) => {},
    setType: (type:  FilterType) => {},
    setPriority: (priority: PriorityType) => {}
})

interface FilterContextProviderProps{
    children: React.ReactNode;
}

export function FilterContextProvider({ children }: FilterContextProviderProps){
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityType.Popularity);

    return(
        <FilterContext.Provider value={{search, page, type, priority, setPage, setSearch, setType, setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}