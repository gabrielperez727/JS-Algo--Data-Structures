const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const input = document.getElementById("user-input");
const validPhone = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;

checkButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  }
  const phone = input.value;
  const trim = phone.replace(/\D/g, "");
  if (validPhone.test(trim)) {
    results.textContent = `Valid US number: ${phone}`;
  } else {
    results.textContent = `Invalid US number: ${phone}`;
  }
  console.log(trim);
  phone === "";
});

clearButton.addEventListener("click", () => {
  results.textContent = "";
});
