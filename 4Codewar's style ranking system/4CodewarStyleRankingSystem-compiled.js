'use strict';

function User() {
    "use strict";
    var ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    var r = 0;
    this.rank = ranks[r];
    this.progress = 0;
    this.incProgress = function (a) {
        console.log('INCOMING RANK: ' + a);
        console.log('CURRENT RANK: ' + this.rank);
        if (a < -8 || a == 0 || a > 8) {
            throw error;
        }
        if (a == this.rank) {
            return this.progress += 3;
        }
        if (a != this.rank) {
            var b;
            // a > 0 ? b = Math.abs(this.rank - a + 1) : b = 8 - Math.abs(a):b=1;
            if (this.rank > a && this.rank - Math.abs(a) + 1 == 1) {
                b = Math.sqrt(0.1);
            } else if (a < 0) {
                b = 8 - Math.abs(a);
            } else if (a > 0) {
                b = Math.abs(this.rank - a + 1);
            } else {
                b = 0;
            }
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

user.incProgress(1);
user.incProgress(1);
user.incProgress(1);
user.incProgress(1);
user.incProgress(1);
user.incProgress(2);
user.incProgress(2);
user.incProgress(-1);
user.incProgress(3);
console.log(user.rank);
console.log(user.progress);

//# sourceMappingURL=4CodewarStyleRankingSystem-compiled.js.map