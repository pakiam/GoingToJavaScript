function blackFriday(year) {
    var i = 0;
    while (true) {

        var nov = new Date(year, 11, i);
        if (nov.getDay() === 5) {
            if(nov.getDate()===30){
                return nov.getDate() - 7;
            }
            return nov.getDate();
        }
        i -= 1;
    }
}

console.log(blackFriday(2012));