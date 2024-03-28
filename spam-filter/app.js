const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});

const helpRegex = /please help|assist me/i;
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /[s5][t7][o0]ck [a@4]l[e3]r[t7]/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
