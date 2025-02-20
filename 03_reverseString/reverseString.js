const reverseString = function(string) {
    let arr = [];
    for (let index = 0; index < string.length; index++) {
        arr.push(string[index]);        
    }

    return arr.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
