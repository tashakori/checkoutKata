import { Discount } from '../src/Discount';
import { ItemType } from '../src/Item';
import { Store } from '../src/checkout';

describe('store.checkout test', () => {

    const discount_A = new Discount(ItemType.A, 3, 20)
    const discount_B = new Discount(ItemType.B, 2, 15)

    const store = new Store([discount_A, discount_B])
    
    it('should return 0 when no items are sent', () => {
        expect(store.checkout("")).toBe(0);
    });
    it('should return 50 when "A" is sent', () => {
        expect(store.checkout("A")).toBe(50);
    });
    it('should return 30 when "B" is sent', () => {
        expect(store.checkout("B")).toBe(30);
    });
    it('should return 20 when "C" is sent', () => {
        expect(store.checkout("C")).toBe(20);
    });
    it('should return 15 when "D" is sent', () => {
        expect(store.checkout("D")).toBe(15);
    });
    it('should return 30 when "DD" is sent', () => {
        expect(store.checkout("DD")).toBe(30);
    });
    it('should return 115 when we send one item from each type', () => {
        expect(store.checkout("ADCB")).toBe(115);
    });
    it("Should return error if an unknown item is sent", () =>{
        expect(() => store.checkout("E")).toThrow("Unknown Item")
    });
    it("Should apply 20$ discount for each 3 As", () =>{
        expect(store.checkout("AAAAAAAA")).toBe(360)
    })
    it("Should apply 15$ discount for each 2 Bs", () =>{
        expect(store.checkout("BBBBB")).toBe(120)
    })
});
