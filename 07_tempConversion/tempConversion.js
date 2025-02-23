const convertToCelsius = function(tempF) {
  let ans = (tempF - 32) * (5/9);
  let rounded = Math.round(ans * 10) / 10;
  let fix = rounded.toFixed(1);
  return parseFloat(fix);
};

const convertToFahrenheit = function(tempC) {
  let ans = (tempC * (9/5)) + 32;
  let rounded = (ans * 10) / 10;
  let fix = rounded.toFixed(1);
  return parseFloat(fix);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
