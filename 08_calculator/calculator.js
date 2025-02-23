const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a- b;
};

const sum = function(arr) {

  return arr.reduce((total, current) => total += current, 0);
  
  // below code will note work for all cases
  // let arr = [];
	// let ans= 0;

  // for(let i=0; i<arguments.length; i++) {
  //   arr.push(parseInt(arguments[i]));
  // }
  
  // for(let i=0; i<arr.length; i++) {
  //   ans += parseInt(arr[i]);
  // }

  // return parseInt(ans);
};

const multiply = function(arr) {

  return arr.reduce((total, current) => total * current);
  
  // below code will note work for all cases
  // let mul = 0;

  // for(let i=0; i<arguments.length; i++) {
  //   mul *= arguments[i];
  // }

  // return mul;
};

const power = function(n, p) {
	return Math.pow(n, p);
};

const factorial = function(a) {
  let fact = 1;
	while(a>0) {
    fact *= a;
    a--;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
