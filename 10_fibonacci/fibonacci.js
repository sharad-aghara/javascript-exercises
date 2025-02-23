const fibonacci = function(num) {
    if(num < 0) return 'OOPS';
    
    const arr = [0, 1];

    for (let index = 2; index <= num; index++) {
        arr[index] = arr[index-2] + arr[index-1];
    }

    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
