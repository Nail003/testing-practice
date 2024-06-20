export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
        if (b === 0) return "Error: Division not possible";
        return a / b;
    },
};
