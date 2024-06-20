export default function analyseArray(array) {
    return {
        average: getArrayAverage(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };
}

function getArrayAverage(array) {
    return Math.round(getArraySum(array) / array.length);
}

function getArraySum(array) {
    return array.reduce((prev, curr) => prev + curr, 0);
}
