function getFriendlyNumbers(start, end) {
    if ((typeof start !== 'number') || (typeof end !== 'number') || (end < start) || (end < 0) || (start < 0)) {
        return false;
    }
    let result = [];
    for (let i = start; i <= end; i++) {
        let sum = 0;
        let s;
        for (s = 1; s < i; s++) {
            if (i % s === 0) {
                sum += s;
            }
        }
        if (sum > i) {
            let sum2 = 0;
            for (s = 1; s < sum; s++) {
                if (sum % s === 0) {
                    sum2 += s;
                }
            }
            if (i === sum2 && sum2 <= end && sum2 >= start) {
                result.push([sum2, sum]);
            }
        }
    }
    return result;
}

module.exports = {
    firstName: 'Oleg',
    secondName: 'Zamyslov',
    task: getFriendlyNumbers
}
