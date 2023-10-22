import {itemFactory} from "./Item"

export function checkout(itemList : string): number{
    let total = 0;
    for(const itemChar of itemList){
        const item = itemFactory(itemChar)
        total += item.getPrice()
    }
    return total
    
}