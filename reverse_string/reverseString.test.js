import { reverseString } from "./reverseString";

describe("Reverse String Tests", () => {
    it("should reverse the input string", () => {
        const input = "nail";
        const output = "lian";

        expect(reverseString(input)).toBe(output);
    });

    it("should reverse the input string", () => {
        const input = "hammer";
        const output = "remmah";

        expect(reverseString(input)).toBe(output);
    });
});
