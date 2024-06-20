import ceaserCipher from "./ceaserCipher";

describe("Ceaser Cipher", () => {
    it("should return the encrypted message", () => {
        let input = { string: "abc", shift: 0 };
        let output = "abc";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);

        input = { string: "abc", shift: 1 };
        output = "bcd";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);

        input = { string: "ABC", shift: 1 };
        output = "BCD";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);

        input = { string: "ABCa", shift: 1 };
        output = "BCDb";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);
    });

    it("should cycle the input within the length of alphabets", () => {
        let input = { string: "xyz", shift: 3 };
        let output = "abc";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);

        input = { string: "XYZ", shift: 3 };
        output = "ABC";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);

        input = { string: "XYz", shift: 3 };
        output = "ABc";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);
    });

    it("should extend all other unknown letters to cypher as it is", () => {
        const input = { string: "ABCa, bcZ! 32", shift: 1 };
        const output = "BCDb, cdA! 32";
        expect(ceaserCipher(input.string, input.shift)).toBe(output);
    });
});
