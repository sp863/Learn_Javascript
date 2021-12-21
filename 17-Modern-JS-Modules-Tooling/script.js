// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart";
// console.log(price ,tq);
// addToCart("bread", 5);
// import * as ShoppingCart from "./shoppingCart.js";

// console.log("Importing module");
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

/*
import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apple", 4);

console.log(cart);
*/

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // blocking the entire code when slow
// const data = await res.json();
// console.log(data);
// console.log("Something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
