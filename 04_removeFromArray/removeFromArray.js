const removeFromArray = function(arr, ...nums) {
    nums.forEach((elem) => { 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                arr.splice(i, 1);
                i--;
            }
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
