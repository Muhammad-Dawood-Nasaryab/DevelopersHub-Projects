const letters = new Set (["a", "b", "c"]);

letters.add("d"); // set items also set this way

const e = "e";

letters.add(e); // This way as well
letters.add(e);
letters.add(e); 

// multipe items are ignored

for (const letter of letters) {
    console.log(letter);
};
