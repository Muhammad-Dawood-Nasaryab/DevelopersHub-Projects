function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10)); // Output: 20
console.log(triple(3)) // Output: 9