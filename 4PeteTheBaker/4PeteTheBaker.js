function getMissingIngredients(recipe, added) {
    var missingengr = {};
    var numOfCakes=1;

    for (var ingredient in added){
        var cakesMadeByIngredient=Math.ceil(added[ingredient]/recipe[ingredient]);
        numOfCakes=cakesMadeByIngredient>numOfCakes ?cakesMadeByIngredient : numOfCakes;
    }

    for (var ingredient in recipe) {
        missingengr[ingredient] = (recipe[ingredient] * numOfCakes) - (added[ingredient] || 0);
        if (missingengr[ingredient] === 0) delete missingengr[ingredient];
    }

    return missingengr;
}

var recipe = {flour: 200, eggs: 1, sugar: 100};

console.log(getMissingIngredients(recipe, {flour: 50, eggs: 1}));