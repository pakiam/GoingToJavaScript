function Person(name){
    this.name=name;
    this.greet=function(a){
        return "Hello " + a + ", my name is " + this.name;
    }
}

var joe = new Person('Joe');
console.log(joe.greet('Kate'));
console.log(joe.name);