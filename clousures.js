function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}

let ducky = new Bird();
ducky.hatchedEgg = 16;

console.log(ducky);
