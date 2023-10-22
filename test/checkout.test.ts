import { checkout } from '../src/checkout';

describe('checkout test', () => {
    it('should return 0 when no items are sent', () => {
        expect(checkout("")).toBe(0);
    });
    it('should return 50 when "A" is sent', () => {
        expect(checkout("A")).toBe(50);
    });
    it('should return 30 when "B" is sent', () => {
        expect(checkout("B")).toBe(30);
    });
    it('should return 20 when "C" is sent', () => {
        expect(checkout("C")).toBe(20);
    });
    it('should return 15 when "D" is sent', () => {
        expect(checkout("D")).toBe(15);
    });
    it('should return 30 when "DD" is sent', () => {
        expect(checkout("DD")).toBe(30);
    });
    it('should return 115 when we send one item from each type', () => {
        expect(checkout("ADCB")).toBe(115);
    });
    it("Should return error if an unknown item is sent", () =>{
        expect(() => checkout("E")).toThrow("Unknown Item")
    });
});
