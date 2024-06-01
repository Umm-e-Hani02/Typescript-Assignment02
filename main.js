// Part 1: Employee Data
var _this = this;
var car = {
    engine: {
        horsePower: 200
    },
    getHorsePower: function () { return _this.engine.horsePower; }
};
console.log(car.engine.horsePower);
var tshirt = {
    name: "T-Shirts",
    price: 500,
    colour: "Black",
    inventory: {
        stock: 10,
        colourOptions: ["Green", "Purple", "Yellow", "White"],
        changeColour: function (newColour) {
            if (newColour === "Red") {
                tshirt.price *= 1.10;
            }
            else if (newColour === "Blue") {
                tshirt.price *= 0.95;
            }
            tshirt.colour = newColour;
        },
    },
};
console.log("\nBefore colour change of T-Shirt price: ".concat(tshirt.price, "\n"));
tshirt.inventory.changeColour("Red");
console.log("After colour change to Red: ".concat(tshirt.price, "\n"));
tshirt.inventory.changeColour("Blue");
console.log("After colour change to Blue: ".concat(tshirt.price));
