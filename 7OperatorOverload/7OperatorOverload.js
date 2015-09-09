var Foo = function(value) {
    this.val = value;
};

Foo.prototype.valueOf=function(){
   return this.val;
};

var foo = new Foo(2);
var boo = new Foo(3);

console.log(foo+boo);