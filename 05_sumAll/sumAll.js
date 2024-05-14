const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || Array.isArray(num1) || 
    typeof num1 === 'string' || num2 < 0 || 
    Array.isArray(num2) || typeof num2 === 'string') {
        return 'ERROR';
    }

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }
    else {
        for (let i = num1; i >= num2; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
