const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = function (input) {
  const inputs = [];
  const quotients = [];
  const remainders = [];
  while (input > 0) {
    const remainder = input % 2;
    const quotient = Math.floor(input / 2);
    input = quotient;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    console.log("Inputs:", inputs);
    console.log("Remainders:", remainders);
    console.log("Quotients:", quotients);
    result.innerText = remainders.reverse().join("");
  }
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
