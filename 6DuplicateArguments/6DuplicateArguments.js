function solution() {
    "use strict";
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
        if (arr.indexOf(arguments[i + 1]) != -1) {
            return true;
        }
    }
    return false;
}

console.log(solution(1, 2, 3, 2));
console.log(solution(1, 2, 3));
console.log(solution('1', '2', '3', '2'));