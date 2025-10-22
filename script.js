// function for
function getInnertext(id) {
  const htmlElement = document.getElementById(id);
  const htmlElementText = htmlElement.innerText;
  const htmlElementTextConverted = parseInt(htmlElementText);

  return htmlElementTextConverted;
}

// heart icon
const hearts = document.getElementsByClassName("heart-click");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    const countHeart = document.getElementById("heart-click-count");
    countHeart.innerText = getInnertext("heart-click-count") + 1;
  });
}

// call button
const calls = document.querySelectorAll(".call-btn");
const callHistoryContainer = document.getElementById("call-history-cont");
for (let call of calls) {
  call.addEventListener("click", function () {
    let coins = getInnertext("coin-count");

    if (coins < 20) {
      alert("Sorry, you don’t have sufficient coins for this call.");
      return;
    }
    document.getElementById("coin-count").innerText = coins - 20;
    const card = call.closest(".card-container");
    const serviceName = card.querySelector(".card-title").innerText;
    const serviceNumber = card.querySelector(".contact-num").innerText;

    alert(`Calling to ${serviceName} at ${serviceNumber}`);

    const localTime = new Date().toLocaleTimeString("en-US", { hour12: true });
    const history = document.createElement("div");
    history.className =
      "call-history flex justify-between items-center bg-gray-50 p-4 mt-2 rounded-lg";

    history.innerHTML = `
    <div>
    <h3 class="text-md font-bold">${serviceName}</h3>
    <h4 class-"text-md">${serviceNumber}</h4>
    </div>
    <h4>${localTime}</h4>`;
    callHistoryContainer.append(history);
  });
}
// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  callHistoryContainer.innerHTML = "";
});

// copy button
let copyCount = document.getElementById("copy-count");
let copyButtons = document.querySelectorAll(".copy-btn");

for (let btn of copyButtons) {
  btn.addEventListener("click", function () {
    let card = this.closest(".card-container");
    let number = card.querySelector(".contact-num").innerText;

    navigator.clipboard.writeText(number).then(() => {
      let count = parseInt(copyCount.innerText);
      copyCount.innerText = count + 1;

      alert(`Hotline number ${number} copied to clipboard!`);
    });
  });
}
