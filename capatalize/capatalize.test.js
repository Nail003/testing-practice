import capatalize from "./capatalize";

describe("Capatalization Tests", () => {
    it(`should capatalize the input string`, () => {
        const input = "Pakistan";
        const output = "PAKISTAN";
        expect(capatalize(input)).toBe(output);
    });

    it(`should capatalize the input string`, () => {
        const input = "Sargodha";
        const output = "SARGODHA";
        expect(capatalize(input)).toBe(output);
    });
});
