// Return the output array, and ignore all non-op characters
function parse(data) {
    console.log(data);
    var count = 0;
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        switch (data[i]) {
            case "i":
                count++;
                break;
            case "d":
                count--;
                break;
            case "s":
                count=Math.pow(count, 2);
                break;
            case "o":
                arr.push(count);
                break;
            default :
                break;
        }
    }
    return arr;
}

console.log(parse( "iiisdoso" ));