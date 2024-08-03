const sumAll = function(startNum, endNum) {
    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }
    if (Number.isInteger(startNum + endNum) == false) {
        return "ERROR";
    }

    let max = 0 , min = 0;
    if (startNum > endNum) {
        max = startNum;
        min = endNum;
    }
    else {
        max = endNum;
        min = startNum;
    }

    let terms = max - min + 1;
    const difference = 1;

    let sum = (terms / 2) * (2 * min + (terms - 1) * difference);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
