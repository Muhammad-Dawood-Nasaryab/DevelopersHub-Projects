const m1 = ["jan", "feb", "mar", "apr"];
const m2 = ["may", "june", "july", "aug"];
const m3 = ["sep", "oct", "nov", "dec"];

const year = [...m1, ...m2, ...m3];
console.log(year);

const numbers = [23,54,74,12,79,45];
let maxNum = Math.max(...numbers);
console.log(maxNum);
