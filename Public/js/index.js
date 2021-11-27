let num1 = "";
let operator = "";
let num2 = "";
let isFirstNum = true;

let numIdsArr = [];
let opIdsArr = [];
let specIdsArr = [];

//Get display element
const displayId = document.querySelector(".calc-display").id;

//Get display value
let display = document.getElementById(displayId);

//Get array of number butons
const numArray = Array.from(document.querySelectorAll(".calc-number"));
for (let i = 0; i < numArray.length; i++) {
  numArray[i].addEventListener("click", function (event) {
    const id = event.target.id;
    const btn = document.getElementById(id);
    addToNumber(btn.value);
  });
}

//Add event listener to number buttons
function addToNumber(b) {
  num1 = num1 + b;
  display.value = Number(num1);
  console.log(display.value);
}
//On number button click, check if number is first number

// for (let i = 0; i < numArray.length; i++) {
//   numIds.push(numArray[i].attributes.id.value);
// }
// const opArray = Array.from(document.querySelectorAll(".calc-operator"));

// for (let i = 0; i < opArray.length; i++) {
//   opIds.push(opArray[i].attributes.id.value);
// }
// const specArray = Array.from(document.querySelectorAll(".calc-special"));

// for (let i = 0; i < specArray.length; i++) {
//   specIds.push(specArray[i].attributes.id.value);
// }

// document.addEventListener("click", function (event) {
//   const id = event.target.id;
//   const btn = document.getElementById(id);
//   if (numIds.includes(id)) {
//     if (isFirstNum === true) {
//       num1 = num1 + btn.value;
//     } else {
//       num2 = num2 + btn.value;
//     }
//   } else if (opIds.includes(id)) {
//     if (isFirstNum === true) {
//       operator = btn.value;
//       isFirstNum = false;
//     } else if (isFirstNum === false) {
//       num1 = "0";
//       operator = "";
//       num2 = "0";
//       isFirstNum = true;
//     }
//   } else if (specIds.includes(id)) {
//   } else {
//   }
//   document;

//   console.log(Number(num1));
//   console.log(operator);
//   console.log(Number(num2));
// });

// document.getElementById(display).value = num1 + operator + num2;
