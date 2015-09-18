// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
function mean(numbers) {
    "use strict";
    var mean = 0;
    for (var i = 0; i < numbers.length; i++) {
        mean += numbers[i];
    }
    return mean / numbers.length;
}
var variance = function (numbers) {
    "use strict";

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i] - mean(numbers), 2);

    }
    return sum / numbers.length;
};

console.log(mean([1, 2, 2, 3]));
console.log(variance([1, 2, 2, 3]));
