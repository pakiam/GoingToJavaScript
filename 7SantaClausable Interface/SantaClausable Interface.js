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
    if (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney) {

    }
}

console.log(santa.sayHoHoHo);