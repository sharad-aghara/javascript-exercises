const removeFromArray = function(array, ...args) {
    const resultArray = [];

    array.forEach((element) => {
      if (!args.includes(element)) {
        resultArray.push(element);
      }  
    });

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
