const repeatString = function(string, times) {

    let result = '';

    if (times < 0) {
        return 'ERROR';
    }

    for (let index = 0; index < times; index++) {
        result += string;
    }

    // result = string.repeat(times);

    return result;
};

// Do not edit below this line
module.exports = repeatString;
