var helloWorld = function () {
    var one = +true;
    var two = one + one;
    var four = two + two;
    var eight = four + four;
    var sixteen = eight + eight;
    var thirtytwo = sixteen + sixteen;
    var sixtyfour = thirtytwo + thirtytwo;
    var sp = thirtytwo;
    var excl = thirtytwo + one;
    var H = sixtyfour + eight;
    var e = sixtyfour + thirtytwo + four + one;
    var l = sixtyfour + thirtytwo + eight + four;
    var o = sixtyfour + thirtytwo + sixteen - one;
    var W = sixtyfour + sixteen + eight - one;
    var r = sixtyfour + thirtytwo + sixteen + two;
    var d = sixtyfour + thirtytwo + four;
    return [H, e, l, l, o, sp, W, o, r, l, d, excl].map(function (c) {
        return String.fromCharCode(c)
    }).join([])
};


console.log(helloWorld());