const sumAll = function(int1, int2) {
    let sum = 0;

    let one, two;

    if (int1 < int2) {
        one = int1;
        two = int2;
    } else {
        one = int2;
        two = int1;
    }

    if (one < 0) {
        return 'ERROR';
    }

    if(!Number.isInteger(one) || !Number.isInteger(two)) {
        return 'ERROR';
    }

    for (let index = one; index <= two; index++) {
        sum += index;        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
