const palindromes = function (word) {
    // Selects every character that is not a letter to remove it, 
    // joins the arrays together, and makes them all lowercase
    word = word.split(/[^a-zA-z0-9]/).join('').toLowerCase();
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word.charAt(i);
    }
    return (word === reversedWord ? true : false)
};

// Do not edit below this line
module.exports = palindromes;
