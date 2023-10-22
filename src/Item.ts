import {D} from "./D"
import {C} from "./C"
import {B} from "./B"
import {A} from "./A"

export interface Item {
    getPrice(): number
}


export function itemFactory(itemChar: string): Item{
    if(itemChar === "A")
        return new A()
    if(itemChar === "B")
        return new B()
    if(itemChar === "C")
        return new C()
    if(itemChar === "D")
        return new D()
    throw new Error("Unknown Item")
}