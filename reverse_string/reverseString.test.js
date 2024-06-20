import { reverseString } from "./reverseString";

describe("Reverse String Tests", () => {
    it("should reverse the input string", () => {
        let input = "nail";
        let output = "lian";
        expect(reverseString(input)).toBe(output);

        input = "hammer";
        output = "remmah";
        expect(reverseString(input)).toBe(output);
    });
});
