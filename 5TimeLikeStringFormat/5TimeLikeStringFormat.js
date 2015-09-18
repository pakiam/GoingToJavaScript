function solution(hour) {
    var str = hour.toString();
    if (str.length == 3) {
        return str.slice(0, 1) + ":" + str.slice(1);
    }else if(str.length==4){
        return str.slice(0, 2) + ":" + str.slice(2);
    }
    throw errnoException;
}

console.log(solution(8000));