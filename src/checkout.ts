export function checkout(itemList : string): number{
    let total = 0;
    for(const item of itemList){
        if(item === "A")
            total += 50
        else if(item === "B")
            total += 30
        else if(item === "C")
            total += 20
        else if(item === "D")
            total += 15
        else
            throw new Error("Unknown Item")
    }
    return total
    
}