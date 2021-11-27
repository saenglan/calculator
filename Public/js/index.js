let num1 = "";
let operator = "";
let num2 = "";
let isFirstNum = true;

//Get display element
const displayId = document.querySelector(".calc-display").id;
//Get display value
let display = document.getElementById(displayId);

//Get array of number butons
const numArray = Array.from(document.querySelectorAll(".calc-number"));
//Add event listeners to number buttons
for (let i = 0; i < numArray.length; i++) {
  numArray[i].addEventListener("click", function (event) {
    const id = event.target.id;
    const btn = document.getElementById(id);
    addToNumber(btn.value);
  });
}

//Get array of operator butons
const oprArray = Array.from(document.querySelectorAll(".calc-operator"));
//Add event listeners to operator buttons
for (let i = 0; i < oprArray.length; i++) {
  oprArray[i].addEventListener("click", function (event) {
    const id = event.target.id;
    const btn = document.getElementById(id);
    if (isFirstNum) {
      operator = btn.value;
      isFirstNum = false;
      console.log(btn.value);
    } else {
      //Todo: need to allow users to chain operators
      isFirstNum = true;
      num1 = "";
      operator = "";
      num2 = "";
    }
  });
}

//Save number buttons
function addToNumber(btn) {
  if (isFirstNum) {
    num1 = num1 + btn;
    display.value = Number(num1);
    console.log("Number 1: " + display.value);
  } else {
    num2 = num2 + btn;
    display.value = Number(num2);
    console.log("Number 2: " + display.value);
  }
}
