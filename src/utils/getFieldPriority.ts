import { PriorityType } from "@/types/PriorityType";

export function getFieldPriority(priority: PriorityType) {
    if(priority === PriorityType.PriceLowToHigh) return {field: "price_in_cents", order: "ASC"};
    if(priority === PriorityType.PriceHighToLow) return {field: "price_in_cents", order: "DSC"};
    if(priority === PriorityType.NewestArrivals) return {field: "created_at", order: "DSC"};
    return {field: "sales", order: "DSC"};
}