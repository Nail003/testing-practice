import capatalize from "./capatalize";

describe("Capatalization Tests", () => {
    it(`should capatalize the input string`, () => {
        let input = "Pakistan";
        let output = "PAKISTAN";
        expect(capatalize(input)).toBe(output);

        input = "Sargodha";
        output = "SARGODHA";
        expect(capatalize(input)).toBe(output);
    });
});
