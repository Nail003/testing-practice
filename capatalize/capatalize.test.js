import capatalize from "./capatalize";

describe("Capatalization Tests", () => {
    it(`capatalize the input string`, () => {
        const input = "Pakistan";
        const output = "PAKISTAN";
        expect(capatalize(input)).toBe(output);
    });

    it(`capatalize the input string`, () => {
        const input = "Sargodha";
        const output = "SARGODHA";
        expect(capatalize(input)).toBe(output);
    });
});
