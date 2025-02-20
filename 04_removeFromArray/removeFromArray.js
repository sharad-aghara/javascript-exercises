const removeFromArray = function(...arguments) {
    let arr = arguments[0];
    let removeElements = [];

    for (let i = 1; i < arguments.length; i++) {
        removeElements.push(arguments[i]);
    }

    for (let index = 0; index < removeElements.length; index++) {
        let ind = arr.indexOf(removeElements[index]);

        if (ind > -1) {
            arr.splice(ind, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
