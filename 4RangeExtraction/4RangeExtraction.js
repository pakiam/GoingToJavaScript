function solution(list) {
    var len = list.length;
    var out = [];
    var i, j;

    for (i = 0; i < len; i = j + 1) {

        out.push(list[i]);

        for (var j = i + 1; j < len && list[j] == list[j-1] + 1; j++);
        j--;

        if (i == j) {
            out.push(",");
        } else if (i + 1 == j) {
            out.push(",", list[j], ",");
        } else {
            out.push("-", list[j], ",");
        }
    }
    out.pop();
    return out.join("");
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));