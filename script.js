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
