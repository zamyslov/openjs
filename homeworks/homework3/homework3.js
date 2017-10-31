function arrayNumbers(arr1, arr2) {
    if ((!Array.isArray(arr1)) || (!Array.isArray(arr2))) {
        return false;
    }
    let resArray = [];
    t2:  for (let i = 0; i < arr1.length; i++) {
        for (let s = 0; s < arr2.length; s++) {
            if (arr1[i] === arr2[s]) {
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
    let c = 0;
    for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function fibonacciRecursion(num) {
    return num <= 1 ? num : fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}


module.exports = {
    firstName: 'Oleg',
    secondName: 'Zamyslov',
    arrayNumbers: arrayNumbers,
    fibonacciIteration: fibonacciIteration,
    fibonacciRecursion: fibonacciRecursion
}
