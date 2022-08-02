const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b; 
};

const sum = function(a) {
  let sum = 0;
	for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let sum = 1;
  for (let i = 0; i < a.length; i++) {
    sum *= a[i];
  }
  return parseInt(sum);
};

const power = function(a, b) {
  let num = Math.pow(a, b);
  return num;
};

const factorial = function(a) {
	let num = 1;
  for (let i = 1; i <= a; i++) {
    num *= i;
  }
  return num;
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
