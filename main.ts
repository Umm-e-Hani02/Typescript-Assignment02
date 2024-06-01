// Part 1: Employee Data

type Employee = {
    name: string,
    department: string,
    role: "Manager" | "Engineer" | "Intern",
    contact? :{
        phone?: number,
        email?: string
    };
    skills?: string[]
};

// Part 2: Car Details

type Car = {
    engine: {
        horsePower: number,
    };
    getHorsePower: () => number;
};
let car: Car = {
    engine: {
        horsePower: 200
    },
    getHorsePower: () => this.engine.horsePower    
};

console.log(car.engine.horsePower);

// // Part 3: Colorful T-Shirts

type Product = {
    name: string,
    price: number,
    colour: string,
    inventory: {
        stock: number,
        colourOptions?: string[],
        changeColour :(newColour: string) => any
    };
};

let tshirt: Product = {
    name: "T-Shirts",
    price: 500,
    colour: "Black",
    inventory: {
        stock: 10,
        colourOptions: ["Green", "Purple", "Yellow", "White"],
        changeColour: (newColour: string) => {
            if(newColour === "Red"){
                tshirt.price *= 1.10
            }
            else if (newColour === "Blue") {
                tshirt.price *= 0.95
            }
            tshirt.colour = newColour
        },
    },
};

console.log(`\nBefore colour change of T-Shirt price: ${tshirt.price}\n`);
tshirt.inventory.changeColour("Red")
console.log(`After colour change to Red: ${tshirt.price}\n`);
tshirt.inventory.changeColour("Blue")
console.log(`After colour change to Blue: ${tshirt.price}`);


