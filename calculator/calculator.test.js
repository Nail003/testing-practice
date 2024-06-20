import { calculator } from "./calculator";

describe("Calculator Tests", () => {
    describe("Addition Tests", () => {
        it("should return sum of the inputs", () => {
            const a = 0;
            const b = 0;
            expect(calculator.add(a, b)).toBe(0);
        });

        it("should return sum of the inputs", () => {
            const a = 10;
            const b = 20;
            expect(calculator.add(a, b)).toBe(30);
        });
    });
});
