const fibonacci = function(a) {
    a = parseInt(a);
    if (a < 0) {
        return "OOPS";
    }
    if (isNaN(a)) {
        return 'error';
    }

    let previous = -1;
    let result = 1;
    let num;
    for (let i = 0; i <= a; i++) {
        num = previous + result;
        previous = result;
        result = num;
    }
    return num;
};

// Do not edit below this line
module.exports = fibonacci;
