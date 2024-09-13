const greet = name => "Hello " + name;
console.log(greet("Spongebob")); // Output -> 'Hello Sopngebob'

const sum = (num1, num2) => {return num1 + num2};
console.log(sum(2, 5)); // Output -> 7

// function testing () {
//     console.log(this)
// };
// testing();

const testing = () => {console.log(this)};
testing() // Gives different output