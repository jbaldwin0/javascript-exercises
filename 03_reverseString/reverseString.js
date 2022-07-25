const reverseString = function(string) {
    let revString = string.split('');
    let revArray = revString.reverse();
    let array = revArray.join('');

    return array;
};

// Do not edit below this line
module.exports = reverseString;
