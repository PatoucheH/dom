const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// first exercise

const divContainer = document.querySelector(".actionsquare-wrapper");
const containerToDisplayNewDiv = document.querySelector(
  ".displayedsquare-wrapper"
);
const liste = document.querySelector("ul");

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("displayedsquare");
    newDiv.classList.add(actionSquare.classList[1]);
    // third exercise
    newDiv.addEventListener("click", () => alert(newDiv.classList[1]));

    containerToDisplayNewDiv.appendChild(newDiv);

    const newLi = document.createElement("li");
    const textToAdd = `[${getElapsedTime()}] : Created a new ${
      actionSquare.classList[1]
    } square.`;
    newLi.innerHTML = textToAdd;
    liste.appendChild(newLi);
  });
}

// second exercise

const body = document.body;

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

body.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "Space") {
    body.style.background = randomColor();
    const newLi = document.createElement("li");
    const textToAdd = `[${getElapsedTime()}] : Space is pressed and background is : ${randomColor()}`;
    newLi.innerHTML = textToAdd;
    liste.appendChild(newLi);
  } else if (e.code === "KeyI") {
    while (liste.children.length > 0) {
      liste.children[0].remove();
    }
  } else if (e.code === "KeyS") {
    while (containerToDisplayNewDiv.children.length > 0) {
      containerToDisplayNewDiv.children[0].remove();
    }
  }
});
