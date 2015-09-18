// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function (numbers) {
    "use strict";
    var mean = numbers.reduce(function (p, c) {
            return p + c;
        }) / numbers.length;

    return numbers.reduce(function (p, c) {
            return p + Math.pow(c - mean, 2);
        }, 0) / numbers.length;
};

console.log(variance([1, 2, 2, 3]));
