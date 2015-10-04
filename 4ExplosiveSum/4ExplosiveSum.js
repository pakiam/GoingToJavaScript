function sum(num) {
    var p = [];
    p[0] = 1;
    var j = 0;
    var k = 0;
    var s = 0;

    if (num<=0){return 0}

    for (var i = 1; i<num+1;i++) {
        j=1;
        k=1;
        s=0;
        while (j>0){
            j = i-(3*k*k+k)/2;
            if (j>=0) {s -= Math.pow(-1,k)*p[j]}
            j = i-(3*k*k-k)/2;
            if (j>=0) {s -=  Math.pow(-1,k)*p[j]}
            k = k+1
        }
        p[i] = s
    }
    return p[num]
}


console.log(sum(-1));
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(10));
console.log(sum(330));