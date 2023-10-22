import { Discount } from "./Discount";
import {ItemType, itemFactory} from "./Item"

export class Store{
    constructor(private discountsList? : Discount[]){}

    checkout(itemList : string): number{
        const total = this.calculateTotal(itemList);
    
        const discount = this.calculateDiscount(itemList);
    
        return total - discount
        

    }
    
    private calculateDiscount(itemList: string) {
        let totalDiscount = 0;
        for (const discount of this.discountsList) {
            totalDiscount += discount.calculateDiscount(itemList);
        }
        return totalDiscount;
    }

    private calculateTotal(itemList: string){
        let total = 0;
        for (const itemChar of itemList) {
            const item = itemFactory(itemChar);
            total += item.getPrice();
        }
        return total;
    }
}

