var romanNumerals = [
    ['M', 1000],['CM', 900],['D', 500],['CD', 400],['C', 100],['XC', 90],['L', 50],['XL', 40],['X', 10],['IX', 9],['V', 5],['IV', 4],['I', 1]];
RomanNumerals = {
    toRoman: function(foo) {
        var bar = '';
        romanNumerals.forEach(function(buzz) {
            while (foo >= buzz[1]) {
                bar += buzz[0];
                foo -= buzz[1];
            }
        });
        return bar;
    },
    fromRoman: function(x) {
        var y = 0;
        romanNumerals.forEach(function(z) {
            while (x.substr(0, z[0].length) == z[0]) {
                x = x.substr(z[0].length);
                y += z[1];
            }
        });
        return y;
    }
};

console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.fromRoman('M'));