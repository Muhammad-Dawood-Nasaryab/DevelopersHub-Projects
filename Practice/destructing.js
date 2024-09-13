const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    married: false,
};

// access object properties
let { firstName, married } = person; // variable name must be same
console.log(`${firstName} is ${married ? "" : "not "}married`);

// Array Destructing
const fruits = ["Apple", "Banana", "Orange", "Mangoes"];

let [fruit1, fruit2] = fruits; // square brackets for arrays
console.log(fruit1, fruit2);