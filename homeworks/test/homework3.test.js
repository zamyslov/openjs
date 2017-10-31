const student = require('../homework3/homework3');

describe('Homework 3', () => {
    it(`Homework 3 of ${student.firstName} ${student.secondName}`, () => {
        const { arrayNumbers: arrayNumbers } = student;
        const { fibonacciIteration: fibonacciIteration } = student;
        const { fibonacciRecursion: fibonacciRecursion } = student;

        /* Correct input */
        expect(arrayNumbers([1,2,3,4,5,6], [5,6,7,8,9,0])).toEqual([1,2,3,4]);
        expect(arrayNumbers([1,2,3,4,5,6], [5,6,7,2,1,0])).toEqual([3,4]);

        expect(fibonacciIteration(10)).toEqual(55);
        expect(fibonacciIteration(0)).toEqual(0);
        expect(fibonacciIteration(1)).toEqual(1);
        expect(fibonacciIteration(2)).toEqual(1);

        expect(fibonacciRecursion(10)).toEqual(55);
        expect(fibonacciRecursion(0)).toEqual(0);
        expect(fibonacciRecursion(1)).toEqual(1);
        expect(fibonacciRecursion(2)).toEqual(1);
        /* Not correct input */
          expect(arrayNumbers(-1, 300)).toBe(false);
    });
});

