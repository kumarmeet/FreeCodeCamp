// //classes in javascript is like syntactical sugar of constructor function, there is not any fancy thing but behind the scene its act like same as constructor function
// function Laptop(brand, price, color) {
//   (this.brand = brand), (this.price = price), (this.color = color);
// }

// Laptop.prototype = {
//   constructor: Laptop,
//   ram: 8,
//   processor: "Octa Core",
//   isOn: function (bool) {
//     return bool;
//   },
// };

// const dell = new Laptop("Dell", 25000, "Black");
// const hp = new Laptop("HP", 64000, "Grey");

// console.log(dell.isOn(true));
// console.log(hp.constructor === Laptop);

// console.log(dell);
// console.log(hp);

// console.log(Laptop.prototype.isPrototypeOf(dell));

// console.log(typeof Laptop);

// Object.prototype.isPrototypeOf(Laptop.prototype);

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  // eat: function () {
  //   console.log("nom nom nom");
  // },
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  // eat: function () {
  //   console.log("nom nom nom");
  // },
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

let smokey = new Cat("Smokey");
let bunny = new Bear("Bunny");

//inheritance
let smack = new Cat("smack");
smack = Object.create(Animal.prototype);
let big = new Bear("big");

console.log(smack.eat());
// console.log(big);
