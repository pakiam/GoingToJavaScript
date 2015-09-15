var effects = {
    fire: {
        fire: 0.5,
        grass: 2,
        water: 0.5,
        electric: 1
    },
    water: {
        fire:2,
        grass: 0.5,
        water: 0.5,
        electric: 0.5
    },
    grass: {
        fire:0.5,
        grass: 0.5,
        water:2,
        electric: 1
    },
    electric: {
        fire:1,
        grass:1,
        water:2,
        electric: 0.5
    }
};

function calculateDamage(yourType, opponentType, attack, defense) {
    "use strict";
    var damage = 50 * (attack/defense) * effects[yourType][opponentType];
    return Math.ceil(damage);
}