const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (firstName) {
    fullName = `${firstName} ${fullName.split(" ")[1]}`;
  };

  this.setLastName = function (lastName) {
    fullName = `${fullName.split(" ")[0]} ${lastName}`;
  };

  this.setFullName = function (name) {
    fullName = name;
  };

  return fullName;
};

const bob = new Person("Bob Ross");
bob.getFullName();
