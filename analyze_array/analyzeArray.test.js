import analyseArray from "./analyzeArray";

describe("Analyze Array", () => {
    it("should return an object with the length of input array", () => {
        let input = [1, 8, 3, 4, 2, 6];
        let output = 6;
        expect(analyseArray(input).length).toEqual(output);

        input = [1, 8, 3, 4];
        output = 4;
        expect(analyseArray(input).length).toEqual(output);
    });

    it("should return the minimum value in input array", () => {
        let input = [1, 8, 3, 4, 2, 6];
        let output = 1;
        expect(analyseArray(input).min).toEqual(output);

        input = [2, 8, 3, 4];
        output = 2;
        expect(analyseArray(input).min).toEqual(output);
    });

    it("should return the maximum value in input array", () => {
        let input = [1, 8, 3, 4, 2, 6];
        let output = 8;
        expect(analyseArray(input).max).toEqual(output);

        input = [2, 8, 30, 4];
        output = 30;
        expect(analyseArray(input).max).toEqual(output);
    });

    it("should return the average of input array", () => {
        let input = [1, 8, 3, 4, 2, 6];
        let output = 4;
        expect(analyseArray(input).average).toEqual(output);

        input = [1, 8, 3, 4];
        output = 4;
        expect(analyseArray(input).average).toEqual(output);
    });
});
