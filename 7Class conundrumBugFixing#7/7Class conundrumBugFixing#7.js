"use strict";

class List {
    constructor(type) {
        this.type = type;
        this.items = [];
        this.count = 0;
    }

    add(item){
        if(typeof item != this.type)
            return `This item is not of type: ${this.type}`;

        this.items.push(item);
        this.count++;
        return this;
    }

}

var myList = new List('string');
console.log(myList.add('Hello').count);
console.log(myList.count);

var myNumb=new List('number');
console.log("Numbers: "+myNumb.add(1).count);
console.log("Numbers: "+myNumb.add(" "));