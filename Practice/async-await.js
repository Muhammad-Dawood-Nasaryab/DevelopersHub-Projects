// function divide(n1, n2) { return n1/n2 };

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