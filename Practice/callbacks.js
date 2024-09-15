const removeNeg = (numbers, callback) => {
    positive = [];
    for (const x of numbers) {
        if (callback(x)) {
            positive.push(x);
        };
    };
    return positive;
};

const isPositive = (x) => {
    return x >= 0;
};

const numbers = [1, -2, 3, -4, 5, -6];

console.log(removeNeg(numbers, isPositive)); // Output: [1, 3, 5]