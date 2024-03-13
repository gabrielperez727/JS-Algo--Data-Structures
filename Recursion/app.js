const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const countDownAndUp = function (number) {
  console.log(number);
  if (number === 0) {
    return console.log("Reached base case");
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};

countDownAndUp(3);

const decimalToBinary = function (input) {
  let binary = "";
  if (input === 0) {
    binary = "0";
  }
  while (input > 0) {
    input = Math.floor(input / 2);
    binary += input % 2;
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
