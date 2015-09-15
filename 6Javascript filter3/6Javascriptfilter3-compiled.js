"use strict";

function searchNames(logins) {
    "use strict";
    var arr = [];
    logins.filter(function (val, index, logins) {
        if (val.charAt(0) == "." || val.charAt(val.length - 1) == ".") {
            arr.push(logins[index + 1]);
        }
    });
    return arr;
}
var a = ["foo", "foo@foo.com", "bar.", "bar@bar.com"];
console.log(searchNames(a));

//# sourceMappingURL=6Javascriptfilter3-compiled.js.map