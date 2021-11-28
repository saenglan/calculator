let total = "";
isDisplayClear = true;
clearCount = 0;

//Get display element
const displayId = document.querySelector(".calc-display").id;
//Get display value
let display = document.getElementById(displayId);

//Get history element
const historyId = document.querySelector(".calc-history").id;
//Get history value
let history = document.getElementById(historyId);

//Get clear element
const clearId = document.querySelector(".calc-clear").id;
//Clear calculator
let clear = document
  .getElementById(clearId)
  .addEventListener("click", checkClicks);

//Get submit element
const submitId = document.querySelector(".calc-submit").id;
//Evaluate submitted string with Function()
let submit = document
  .getElementById(submitId)
  .addEventListener("click", function () {
    let result = Function("return " + total)();
    display.value = result;
    history.value = total + " = " + result;
    total = result;
    isDisplayClear = false; //Prevents users from accidentally appending numbers to their displayed result
  });

//Get array of number butons
const numArray = Array.from(document.querySelectorAll(".calc-number"));
//Add event listeners to number buttons
for (let i = 0; i < numArray.length; i++) {
  numArray[i].addEventListener("click", function (event) {
    const id = event.target.id;
    const btn = document.getElementById(id);
    //Clears the display if the user presses a number while the result is displayed
    if (isDisplayClear) {
      addToNumber(btn.value);
    } else {
      console.log(isDisplayClear);
      total = "";
      addToNumber(btn.value);
      isDisplayClear = true;
    }
  });
}

//Get array of operator butons
const oprArray = Array.from(document.querySelectorAll(".calc-operator"));
//Add event listeners to operator buttons
for (let i = 0; i < oprArray.length; i++) {
  oprArray[i].addEventListener("click", function (event) {
    const id = event.target.id;
    const btn = document.getElementById(id);
    //Allows user to use what is currently on the display in their next query
    if (isDisplayClear) {
      addToNumber(btn.value);
    } else {
      isDisplayClear = true;
      addToNumber(btn.value);
    }
  });
}

//Save number buttons
function addToNumber(btn) {
  total = total + btn;
  display.value = total;
  console.log(total);
}
function checkClicks() {
  // After each click, the function checks if the click was a single or double after a delay of 300ms.
  // This gives the user 300ms to click the button again. If clicked again, the first click will result in a "single-click",
  // but the second click will result in a "double-click" because 300ms was enough time to update clearCount to 2
  clearCount++;
  console.log(clearCount);
  if (clearCount === 1) {
    setTimeout(function () {
      if (clearCount === 1) {
        clearCalculator();
      } else {
        clearHistory();
      }
      clearCount = 0;
    }, 300);
  }
}
function clearCalculator() {
  total = "";
  display.value = total;
  isDisplayClear = true;
}
function clearHistory() {
  total = "";
  display.value = total;
  history.value = total;
  isDisplayClear = true;
}
