const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = function (number) {
  if (!numberInput.value) {
    output.innerText = "Please enter a valid number";
  } else if (numberInput.value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    numberInput.value = "";
  } else if (numberInput.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    numberInput.value = "";
  } else {
    output.innerText = toRomanNumeral(numberInput.value);
    numberInput.value = "";
  }
};

const toRomanNumeral = (num) => {
  const lookup = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  return lookup.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v));
    num = num % v;
    return acc;
  }, "");
};

convertButton.addEventListener("click", convert);
//output.innerText = numberInput.value;
