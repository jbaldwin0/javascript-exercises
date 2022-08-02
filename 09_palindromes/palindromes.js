const palindromes = function (input) {
    input = input.toLowerCase().replace(/[^\w\']|_/g, "");
    let splitStr = input.split("");
    let revStr = splitStr.reverse();
    let joinStr = revStr.join("");
    return joinStr == input ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
