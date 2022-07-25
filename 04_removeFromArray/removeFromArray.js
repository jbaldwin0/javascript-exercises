const removeFromArray = function(arr, ...value) {
    for (i of value) {
        let index = arr.indexOf(i);
        if (index > -1) {
            arr.splice(index, 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
