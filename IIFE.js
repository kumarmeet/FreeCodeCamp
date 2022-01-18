//Immediately Invoked Function Expression

(function () {
  console.log("Immediately Invoked Function Expression");
})();

const obj1 = {
  prop1: "true",
};

const obj2 = {
  prop2: "false",
};

const funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

funModule.singMixin(obj1);
console.log(obj1.sing());
