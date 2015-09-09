function Counter() {
    this.counter = 0;
}
Counter.prototype.incr=function(){
    return this.counter++;
};
Counter.prototype.valueOf=function(){
    return this.counter;
};
var c = new Counter();
console.log(c.incr());
console.log(c.incr());
console.log(c + 1);
console.log(c >1);