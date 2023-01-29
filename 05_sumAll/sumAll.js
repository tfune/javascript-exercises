const sumAll = function(start, end) {
    let currentSum = 0;
    if (start < 0 || end < 0) {
        return 'ERROR';
    } else if (typeof start != "number" || typeof end != "number") {
        return 'ERROR';
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            currentSum += i;
        }
        return currentSum;
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            currentSum += i;
        }
        return currentSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
