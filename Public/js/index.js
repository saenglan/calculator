let num1 = "";
let operator = "";
let num2 = "";

document.addEventListener("click", function (event) {
  const id = event.target.id;
  const btn = document.getElementById(id).innerText;
  num1 = num1 + btn;
  console.log(num1);
});
