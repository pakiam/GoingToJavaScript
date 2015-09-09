function reverseIt(data) {
    if (typeof data==="string") {
        return data.toString().split("").reverse().join("");
    }else if(typeof data==="number"){
        return Number(data.toString().split("").reverse().join(""));
    }
    return data;
}

console.log(reverseIt("Hello"));
console.log(reverseIt("314159"));
console.log(reverseIt(314159));
console.log(reverseIt([1, 2, 3]));