let total = "";

//Get display element
const displayId = document.querySelector(".calc-display").id;
//Get display value
let display = document.getElementById(displayId);

//Get submit element
const submitId = document.querySelector(".calc-submit").id;
//Evaluate string with Function()
let submit = document
  .getElementById(submitId)
  .addEventListener("click", function () {
    let result = Function("return " + total)();
    display.value = result;
    total = result;
  });

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
    addToNumber(btn.value);
  });
}

//Save number buttons
function addToNumber(btn) {
  total = total + btn;
  display.value = total;
  console.log(total);
}
