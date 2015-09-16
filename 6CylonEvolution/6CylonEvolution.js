function Cylon(model) {
    this.model = model;
}
Cylon.prototype.attack = function () {
    return "Destroy all humans!";
};

HumanSkin.prototype = Object.create(Cylon.prototype);

function HumanSkin(model) {
    this.model = model;
}

HumanSkin.prototype.infiltrate = function () {
    return "Infiltrate the colonies";
};