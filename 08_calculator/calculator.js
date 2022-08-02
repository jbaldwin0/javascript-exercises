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

const multiply = function() {
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
    sum *= arguments[i];
  }
  return sum;
};

const power = function(a, b) {
  let power = 0;
	for (let i = 0; i < b; i++) {
    power += a * a;
  }
  return power;

};

const factorial = function() {
	
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
