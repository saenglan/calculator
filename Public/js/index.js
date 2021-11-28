let totalStr = "";
let displayTotalStr = "";
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
document.getElementById(clearId).addEventListener("click", checkClicks);

//Get percent element
const percentId = document.querySelector(".calc-percent").id;
//Add event listener to percent button
let percent = document.getElementById(percentId);
percent.addEventListener("click", function () {
  //Allows user to use what is currently on the display in their next query
  if (isDisplayClear) {
    addToNumber("/100");
  } else {
    displayTotalStr = totalStr;
    addToNumber("/100");
    isDisplayClear = true;
  }
});

//Get submit element
const submitId = document.querySelector(".calc-submit").id;
//Evaluate submitted string with Function()
document.getElementById(submitId).addEventListener("click", function () {
  let result = Function("return " + totalStr)();
  //Checks if user submits number without operand
  if (totalStr == result) {
    display.value = result; //Don't update with displayTotalStr
    history.value = result; //Don't update with displayTotalStr
    totalStr = result;
    isDisplayClear = false; //Prevents users from accidentally appending numbers to their displayed result
  } else {
    display.value = result; //Don't update with displayTotalStr
    history.value = displayTotalStr + " = " + result; //ToDo: change totalStr with displayTotalStr
    totalStr = result;
    isDisplayClear = false; //Prevents users from accidentally appending numbers to their displayed result
  }
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
      totalStr = "";
      displayTotalStr = "";
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
function addToNumber(num) {
  totalStr = totalStr + num;
  if (num === "/100") {
    num = "%";
  } else if (num === "*") {
    num = " x ";
  }
  displayTotalStr = displayTotalStr + num;
  display.value = displayTotalStr;
  console.log(displayTotalStr);
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
  totalStr = "";
  displayTotalStr = "";
  display.value = displayTotalStr;
  isDisplayClear = true;
}
function clearHistory() {
  totalStr = "";
  displayTotalStr = "";
  display.value = displayTotalStr;
  history.value = displayTotalStr;
  isDisplayClear = true;
}
