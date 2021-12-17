"use strict";
/*
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
*/

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a proprety that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    // creates a new object
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // -> true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();

const account = {
  owner: "jonas",
  movements: [200, 400, 300, 120],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Static Methods
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log("Hey there");
};

Person.hey(); // -> this keyword here is the entire constructor function
// jonas.hey() -> error since not in the prototype

//Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // steven linked to Person Proto
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1978);
sarah.calcAge();
