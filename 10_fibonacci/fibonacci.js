const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let nthValue = helper(Number(num));
    return nthValue;

};

const helper = function(num) {
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }

    return helper(num - 1) + helper(num - 2);
}

// Do not edit below this line
module.exports = fibonacci;
