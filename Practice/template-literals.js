function highlight(str, ...values) {
    return str.reduce((bef, aft, i) => {
        return (`${bef}<b>${values[i - 1]}</b>${aft}`);
    })
}

const nam = "Dawood";
const age = 16;
const city = "Lahore";

console.log(highlight`My name is ${nam}, I am ${age} years old and I live in ${city}.`);

const escaped = `Here is a backtick: \``;
console.log(escaped);