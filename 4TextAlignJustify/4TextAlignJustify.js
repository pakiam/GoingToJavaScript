/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function (str, len) {
    var Str = '';
    var StrArr = [];
    var stringlen = 0;
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (Str.length + arr[i].length < len) {
            Str += arr[i]+' ';
        } else {
            StrArr.push(Str);
            Str = '';
        }
    }
    return StrArr.join('\n');
};

console.log(justify("Thanks! You just saved me a few hours trying to find a js equivalent of the ljust and rjust methods in Ruby.", 30));