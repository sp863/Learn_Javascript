"use strict";

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers //dynamically calculated
) {
  //old way ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

/*
//valuev vs. reference
const flight = "LH234";
const jonas = {
  name: "Sejin Park",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name; //reference type, so same address in the memory heap

  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const flightNum = flight;
const passenger = jonas; // reference type

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

//HIGHER ORDER FUNCTIONS
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//higher-order function
const transformer = function (str, fn) {
  //fn is the callback function
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); //name of the function
};

transformer("JavaScript is the best!", upperFirstWord);

transformer("JavaScript is the best!", oneWord);

// JS uses call backs all the time
const high5 = function () {
  console.log("high five");
};

document.body.addEventListener("click", high5); //will call when you click on the button

["Jonas", "Martha", "Adam"].forEach(high5);
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); //this value is a function bc greet returns a function
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

// const greet2 = (greeting) => {
//   return (name) => console.log(`${greeting} ${name}`);
// };

// const greeterHey2 = greet2("Hey");
// greeterHey2("Park");
// greeterHey2("Miwon");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Jonas");
*/
/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Sejin Park");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

//DOES NOT WORK
// book(23, "SarahWillams"); // doesn't work because the 'this' keyword doesn't point to the object any more in a regular function call

//SOLUTION -> Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

//Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData); //not used in modern javascript
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
const bookEW = book.bind(eurowings); //doesn't call book function but binds the function to a certain object
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

//first argument is preset, presetting parameters
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Martha Cooper");
bookEW23("Sejin Park");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/*
//Coding Challenge #1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),
  resterNewAnswer() {
    let promptMessage = this.question + "\n";
    for (const option of this.options) {
      promptMessage += option + "\n";
    }
    promptMessage += "(Write option number)";
    const answer = Number(prompt(promptMessage));

    if (
      typeof answer === "number" &&
      answer < this.answers.length &&
      answer >= 0
    ) {
      this.answers[answer]++;
    } else {
      console.log("Invalid Option!");
    }
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const getPoll = poll.resterNewAnswer.bind(poll);

document.querySelector(".poll").addEventListener("click", getPoll);

// [5, 2, 3]
//[ [1, 5, 3,9,6,1]]

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
*/

/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

//IIFE - immediately invoked function
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

//console.log(isPrivate);
console.log(notPrivate);
*/

////////////////////////////////
//CLOSURE
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// securebooking function finished executing but how can 'booker' function update the variable inside that function?
// secureBooking's execution context isn't in the call stack anymore
booker();
booker();
booker();

console.dir(booker);
*/

/*
//EXAMPLE 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); //variable environment of g() is no longer there but closure exists
// Re-assigning f function
h();
f();
// by this piont closure cntains the value of b

//EXAMPLE 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; //closure has priority
boardPassengers(180, 3);

//closure is created so the call back function can still access the 'n' 'waiit' 'perGroup' after 3 seconds even thogh the board Passengers function is done executing
*/

// Coding Challenge #2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
