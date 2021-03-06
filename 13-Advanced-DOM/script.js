"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
/*
// Selecting elements
console.log(document.documentElement); //entire HTML
console.log(document.head);
console.log(document.body); // no need for selectors

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
document.getElementsByTagName("button");

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
// .insertAdjacentHTML -> convenient
const message = document.createElement("div"); //object that represents DOM element
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it! </button>";

// header.prepend(message); //first child of the header element
header.append(message); //last child of the header element -> moved the element from prepend to last child
// header.append(message.cloneNode(true)); //copying

header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

//Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%"; //inline styles

console.log(message.style.color);
console.log(message.style.backgroundColor); //inline style so you can see it on the console
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// if you can change sth on the css file you can do it on JS too

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
//can only read standard property
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minilist logo";

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src); //absolute URL different from folder URL
console.log(logo.getAttribute("src")); //reltive URL

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber); //always stored in the dataset object, storing data in the user interface -> HTML code

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// shouldn't use this
logo.className = "jonas";
*/
/*
// Events and removing events
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading");
  //mouseenter -> hovering
  // h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// old school
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You are reading the heading");
// };
*/

/*
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  // Stop propagation can be done
  // e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor(); //background for .nav__links also changes because it is the parent element
  console.log("CONTAINER", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget); // current target is the same as the 'this' keyword
  },
  false
);
*/

/*
const h1 = document.querySelector("h1");

// Goind downwards: child
console.log(h1.querySelectorAll(".highlight")); // children of the h1 element
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-secondary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5";
});
*/

// const section1 = document.querySelector("#section--1");

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshhold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
/*
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
*/

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree build!", e);
});

window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
});

//When the user is about to leave an important page like filling out something
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });
