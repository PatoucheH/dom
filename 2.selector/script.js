const important = document.querySelectorAll(".important");
const allImg = document.querySelectorAll("img");
const allParagraphs = document.querySelectorAll("p");

function getRandomColor() {
  const choice = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += choice[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(important)

important.forEach((elem) => {
  elem.setAttribute("title", "This is an important item");
});

// console.log(allImg);

for (let i = 0; i < allImg.length; i++) {
  if (!allImg[i].classList.contains("important")) {
    allImg[i].style.display = "none";
  }
}

console.log(allParagraphs);

for (let i = 0; i < allParagraphs.length; i++) {
  console.log(allParagraphs[i].innerText);

  if (allParagraphs[i].className !== "") {
    console.log(allParagraphs[i].className);
  }

  if (allParagraphs[i].className === "") {
    allParagraphs[i].style.color = getRandomColor();
  }
}
