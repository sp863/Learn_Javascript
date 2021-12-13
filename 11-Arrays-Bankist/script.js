"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ["a", "b", "c", "d", "e"];

//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); //last element
console.log(arr.slice(1, -2));
console.log(arr.slice()); //exact same array
console.log([...arr]);

//splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //start with index 1 and delete 2
console.log(arr);

// Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(" - "));
