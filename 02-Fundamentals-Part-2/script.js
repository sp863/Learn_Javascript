"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio";
*/

/*
function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oragnes.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

/*
//Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(age1, age2);
*/

//Arrow function
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1991, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oragnes.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  //return retirement

  if (retirement > 0) {
    console.log(`${firstName} reitres in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

/*
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const dolphinsAvg = calcAverage(44, 23, 71);
const koalaAvg = calcAverage(65, 54, 49);

function checkWinner(avgD, avgK) {
  if (avgD > avgK) {
    console.log(`Dolphins win (${avgD} vs. ${avgk})`);
  } else {
    console.log(`Koalas win (${avgK} vs. ${avgD})`);
  }
}

checkWinner(dolphinsAvg, koalaAvg);
*/

/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Par", 2037 - 1991, "teacher", friends];

console.log(jonas);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const y = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(y[0]);
const age2 = calcAge(y[1]);
const age3 = calcAge(y[y.length - 1]);

console.log(age1, age2, age3);
*/

/*
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Peter")) {
  console.log("You have a friends called Peter");
}
*/

// Coding Challenge #2
/*
function calcTip(bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 155, 44];
const tips = [calcTip(125), calcTip(155), calcTip(44)];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Park",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you watn to know about Jonas Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@mememe";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Park",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas["calcAge"](1991));

console.log(jonas.getSummary());
*/

/*
const mark = {
  firstName: "Mark",
  LastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: "John",
  LastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();

if (mark.bmi > john.bmi) {
  const temp = `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`;
  console.log(temp);
} else {
  const temp = `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`;
  console.log(temp);
}
*/
/*
console.log("Lifting weights repetition");
//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
  "Jonas",
  "Park",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  // types[i] = typeof jonasArray[i];

  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

/*
const jonasArray = [
  "Jonas",
  "Park",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

for (let i = 1; i < 4; i++) {
  console.log(`-----starting exercise ${i}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
*/

/*
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice == 6) console.log("Loop is about to end...");
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    tips[i] = 0.15 * bills[i];
    total[i] = tips[i] + bills[i];
  } else {
    tips[i] = 0.2 * bills[i];
    total[i] = tips[i] + bills[i];
  }
}

console.log(tips);
console.log(total);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
