function User() {
    "use strict";
    var ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    var r = 0;
    this.rank = ranks[r];
    this.progress = 0;
    this.incProgress = function (a) {
        if (a < -8 || a == 0 || a > 8) {
            throw  error;
        }
        if (a == this.rank) {
            return this.progress += 3;
        }
        if (a != this.rank) {
            var b;
            a > 0 ? b = 8 - a + 1 : b = 8 - Math.abs(a);
            this.progress = this.progress + 10 * b * b;
            if (this.progress >= 100 && ranks[r] < 9) {
                r = r + Math.floor(this.progress / 100);
                //console.log('progress: '+this.progress%100);
                //console.log('r: ' + Math.floor(this.progress / 100));
                this.progress = this.progress % 100;
                return this.rank = ranks[r];
            }
            return this.progress;
        }
    };
}

var user = new User();


user.incProgress(-8);
user.incProgress(-7);
user.incProgress(-6);
user.incProgress(-5);
user.incProgress(-4);
user.incProgress(-8);
user.incProgress(1);
user.incProgress(1);
console.log(user.rank);
console.log(user.progress);


