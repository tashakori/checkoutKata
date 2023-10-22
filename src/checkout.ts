import {itemFactory} from "./Item"

export function checkout(itemList : string): number{
    let total = 0;
    for(const itemChar of itemList){
        const item = itemFactory(itemChar)
        total += item.getPrice()
    }

    const A_counter = itemList.split("").filter((item) => item === "A").length
    if(A_counter>=3)
        total -= Math.floor(A_counter/3) * 20

    const B_counter = itemList.split("").filter((item) => item === "B").length
    if(B_counter>=2)
        total -= Math.floor(B_counter/2) * 15

    return total
    
}