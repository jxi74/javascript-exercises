const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((total, currentElement) => 
    total + currentElement
  , 0);
};

const multiply = function(nums) {
  return nums.reduce((total, currentElement) => 
    total * currentElement
  , 1);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  else {
    let total = 1;
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
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
