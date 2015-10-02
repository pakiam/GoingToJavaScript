function p(n, m) {
    "use strict";
    if(n<0){
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    if (m>n){
        return p(n,n);
    }
    var sum=0;
    for(var k=1;k<=m;k++){
        sum=sum+p(n-k,k);
    }
    return sum;
}

function sum(num) {
    return p(num, num)
}


console.log(sum(-1));
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(10));