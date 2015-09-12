function roomMates(rooms, floor) {
    "use strict";

    return rooms.filter(function (val, index) {
        return val ? index>=6*(floor-1) && index+1<=6*floor :false;
    });
}

var a = ["foo", "bar", "foobar", "barfoo", "foofoo", "barbar", "7","8","9","10","11","12"];

console.log(roomMates(a, 3));