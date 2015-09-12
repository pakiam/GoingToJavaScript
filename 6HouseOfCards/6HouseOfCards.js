function houseOfCards(floors) {
    if (floors<1||floors!==parseInt(floors)) throw new Error();
    return (1.5 * floors + 2) * (floors + 1);
}
console.log(houseOfCards(2));
