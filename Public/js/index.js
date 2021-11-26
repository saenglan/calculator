let num1 = "";
let operator = "";
let num2 = "";
const display = document.getElementById("30a4d507-0a1d-4029-afdb-4bdf0acd0bdb");

document.addEventListener("click", function (event) {
  const id = event.target.id;
  const btn = document.getElementById(id);
  //To Do:
  if (
    btn.classList.contains("calc-history") !== true ||
    btn.classList.contains("calc-display") !== true
  ) {
    console.log(btn.classList.contains("calc-history"));
    if (btn.value === "CLR") {
      num1 = "";
    } else {
      num1 = num1 + btn.value;
    }
    display.value = num1;
    console.log(Number(display.value));
  } else {
    console.log("Input or History Clicked");
  }
});
