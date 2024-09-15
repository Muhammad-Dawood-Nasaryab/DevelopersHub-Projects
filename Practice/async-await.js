function divide(n1, n2) { return n1/n2 };

const promise = new Promise((resolve, reject) => {
    let num1 = 2;
    let num2 = 4;
    resolve (divide(num1, num2));
});

promise.then(
    function (value) { value },
    function (error) { console.error('Error:', error) }
);

async function myFun () {
    try {
        let num1 = 1;
        let num2 = 2;
        let result = await divide(num1, num2);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    };
};

myFun();