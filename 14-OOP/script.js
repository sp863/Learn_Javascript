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

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); //doesn't have the calcAge method but because of prototype, jonas can use this method
matilda.calcAge();

console.log(jonas.__proto__); // -> prototype of jonas created by step 3 form above
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); // -> this is false!

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species")); // -> false

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // -> Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // -> null

console.log(Person.prototype.constructor); // -> points to Person

const arr = [3, 4, 5, 6, 6, 7, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // -> true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// Coding Challenge #1
//1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//2
Car.prototype.accel = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car("BMW", 120);
const benz = new Car("Mercedes", 95);

bmw.accel();
bmw.brake();
benz.accel();
benz.brake();
