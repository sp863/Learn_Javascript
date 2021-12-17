"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this -> use prototypal inheritance
  // this.calcAge = function() {
  //   console.log(2037-this.birthYear);
  // }
};

const jonas = new Person("Jonas", 1991);

console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "Jay";

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
