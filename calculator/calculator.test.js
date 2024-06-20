import { calculator } from "./calculator";

describe("Calculator Tests", () => {
    describe("Addition Tests", () => {
        it("should return sum of inputs", () => {
            const a = 0;
            const b = 0;
            expect(calculator.add(a, b)).toBe(0);
        });

        it("should return sum of inputs", () => {
            const a = 10;
            const b = 20;
            expect(calculator.add(a, b)).toBe(30);
        });
    });

    describe("Subtraction Tests", () => {
        it("should return difference of inputs", () => {
            const a = 0;
            const b = 0;
            expect(calculator.subtract(a, b)).toBe(0);
        });

        it("should return difference of inputs", () => {
            const a = 10;
            const b = 20;
            expect(calculator.subtract(a, b)).toBe(-10);
        });
    });

    describe("Division Tests", () => {
        it("should return division of inputs", () => {
            const a = 0;
            const b = 1;
            expect(calculator.divide(a, b)).toBe(0);
        });

        it("should return division of inputs", () => {
            const a = 20;
            const b = 10;
            expect(calculator.divide(a, b)).toBe(2);
        });

        it("should return string that division is not possible", () => {
            const a = 20;
            const b = 0;
            expect(calculator.divide(a, b)).toBe(
                "Error: Division not possible"
            );
        });
    });

    describe("Multiplication Tests", () => {
        it("should multiply the inputs", () => {
            const a = 0;
            const b = 0;
            expect(calculator.multiply(a, b)).toBe(0);
        });

        it("should multiply the inputs", () => {
            const a = -10;
            const b = 20;
            expect(calculator.multiply(a, b)).toBe(-200);
        });
    });
});
