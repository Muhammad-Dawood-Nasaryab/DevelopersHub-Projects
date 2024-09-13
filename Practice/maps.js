const prices = new Map ([
    ["apple", 200],
    ["banana", 150],
    ["orange", 250]
]);

prices.set("peach", 300); // can also be placed this way

let price = prices.get("peach");
console.log(price);
