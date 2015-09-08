var santa = {
    sayHoHoHo: function () {
        console.log('Ho Ho Ho!')
    },
    distributeGifts: function () {
        console.log('Gifts for all!');
    },
    goDownTheChimney: function () {
        console.log('*whoosh*');
    }
};

var notSanta = {
    sayHoHoHo: function () {
        console.log('Oink Oink!')
    }
    // no distributeGifts() and no goDownTheChimney()
};


function isSantaClausable(obj) {
    if (obj.sayHoHoHo && typeof obj.sayHoHoHo=="function" && obj.distributeGifts && obj.goDownTheChimney) {
        return true;
    }
    return false;
}

console.log(isSantaClausable(santa));