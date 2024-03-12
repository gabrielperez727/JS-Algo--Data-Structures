const callStack = [
  `a(): returns "freeCodeCamp " + b()`,
  `b(): returns "is " + c()`,
  `c(): returns "awesome!"`,
];

const a = function () {
  return "freeCodeCamp " + b();
};
const b = function () {
  return "is " + c();
};
const c = function () {
  return "awesome!";
};
console.log(a());
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = function (input) {
  let binary = "";
  if (input === 0) {
    binary = "0";
  }
  while (input > 0) {
    input = Math.floor(input / 2);
    binary = (input % 2) + binary;
  }
  result.innerText = binary;
};

const checkUserInput = function () {
  console.log(numberInput.value);
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
