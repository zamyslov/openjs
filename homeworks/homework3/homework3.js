function arrayNumbers(arr1, arr2) {
    if ((!Array.isArray(arr1)) || (!Array.isArray(arr2))) {
        return false;
    }
    let resArray = [];
    t2:  for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                continue t2;
            }
        }
        resArray.push(arr1[i]);
    }
    return resArray;
}

function fibonacciIteration(num) {
    if (num < 0) {
        return false;
    }
    if (num === 0) {
        return 0;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
        b += a;
        a = b - a;
    }
    return b;
}

function fibonacciRecursion(num) {
    return num <= 1 ? num : fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

function factorialIteration(num) {
    if (num === 0) {
        return 1;
    }
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}


function factorialRecursion(num) {
    return num === 0 ? 1 : num * factorialRecursion(num - 1);
}

module.exports = {
    firstName: 'Oleg',
    secondName: 'Zamyslov',
    arrayNumbers: arrayNumbers,
    fibonacciIteration: fibonacciIteration,
    fibonacciRecursion: fibonacciRecursion,
    factorialIteration: factorialIteration,
    factorialRecursion: factorialRecursion
};
