// 10 + 8 + 23 - 10;
// console.log(10 + 8 + 23 - 10);
/*
console.log("Johnas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let Person = "jonas";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";

lastName = "Park";
console.log(lastName);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3;

const firstName = "Jonas";
const lastName = "Park";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; //x = x + 10
x * -4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*
// Coding Challenge #1
const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const johnBmi = johnWeight / johnHeight ** 2;
const markBmi = markWeight / markHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/
