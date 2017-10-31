const student = require('../exam1/oleg.zamyslov');

describe('Exam 1', () => {
    it(`Exam1 of ${student.firstName} ${student.secondName}`, () => {
        const { task: func } = student;

        /* Correct input */
        expect(func(1, 1)).toEqual([]);
        expect(func(0, 0)).toEqual([]);
        expect(func(1, 300)).toEqual([[220, 284]]);
        expect(func(284, 500)).toEqual([]);
        expect(func(1, 1500)).toEqual([[220, 284],[1184, 1210]]);
        expect(func(1, 3000)).toEqual([[220, 284],[1184, 1210],[2620, 2924]]);

        /* Not correct input */
         expect(func(-1, 300)).toBe(false);
         expect(func(null,null)).toBe(false);
         expect(func(300, 1)).toBe(false);
        expect(func('1', '300')).toBe(false);
    });
});

