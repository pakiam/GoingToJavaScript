function isValidCoordinates(coordinates) {
    var arr = coordinates.split(',');
    var r=/\e/;
    console.log(arr);
    if (arr.length == 2
        && (arr[0]) > -90
        && Number(arr[0]) < 90
        && Number(arr[1]) > -180
        && Number(arr[1]) < 180
        && !arr[0].match(r)
        && !arr[1].match(r)) {
        return true;
    }
    return false; // do your thing!
}

console.log(isValidCoordinates("-23, 25"));
console.log(isValidCoordinates("23.245, 1e1"));
console.log(isValidCoordinates("4, -3"));