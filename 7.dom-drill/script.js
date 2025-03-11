const body = document.body;
const liste = document.querySelector("ul");
const listeChildren = liste.children;
const firstChildListe = listeChildren[0];
const newDiv = document.createElement("div");
const newSelect = document.createElement("select");
const newOption = document.createElement("option");
const newOption2 = document.createElement("option");
newOption.textContent = "important franchises";
newOption2.textContent = "normal franchises";
const eventFaf = () => {
  alert(
    "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
  );
};

function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// console.log(liste);
// console.log(listeChildren);
// console.log(firstChildListe);

for (let i = 0; i < listeChildren.length; i++) {
  const currentFilm = listeChildren[i];

  if (listeChildren[i].nodeType === 1) {
    // console.log(listeChildren[i]);
  }

  if (currentFilm.innerText === "Fast and Furious") {
    liste.insertBefore(currentFilm, firstChildListe);
    currentFilm.className = "important";

    currentFilm.addEventListener("click", eventFaf);
  } else {
    currentFilm.addEventListener("click", () => {
      alert(currentFilm.innerText);
    });
  }

  for (let j = i + 1; j < listeChildren.length; j++) {
    if (listeChildren[i].isEqualNode(listeChildren[j])) {
      let removedChild = liste.removeChild(listeChildren[j]);
      //   console.log(removedChild.innerText);
    }
  }
}

body.addEventListener("keyup", (event) => {
  const keyName = event.key;
  if (keyName === "r") {
    let listeChildrenArray = [...listeChildren];
    let removedElem = listeChildrenArray.shift();
    shuffleArray(listeChildrenArray);
    listeChildrenArray.unshift(removedElem);
    console.log(listeChildrenArray);
    listeChildrenArray.forEach((elem) => {
      liste.appendChild(elem);
    });
  } else if (keyName === "d") {
    let childFAF = liste.firstElementChild;
    let childClone = childFAF.cloneNode(true);
    childClone.addEventListener("click", eventFaf);
    // console.log(childClone);
    childClone.addEventListener("click", eventFaf);
    liste.insertBefore(childClone, childFAF);
  }
});

newSelect.appendChild(newOption);
newSelect.appendChild(newOption2);
newDiv.appendChild(newSelect);
body.insertBefore(newDiv, liste);

const importantCollection = document.getElementsByClassName("important");
// console.log(importantCollection);
const normalCollection = document.querySelectorAll("li:not([class])");

// console.log(newSelect.value);
newSelect.addEventListener("change", (e) => {
  if (newSelect.value === "normal franchises") {
    for (let item of importantCollection) {
      //   console.log(item);
      item.style.visibility = "hidden";
    }
    for (let item of normalCollection) {
      item.style.visibility = "visible";
    }
  } else if (newSelect.value === "important franchises") {
    for (let item of normalCollection) {
      //   console.log(item);
      item.style.visibility = "hidden";
    }
    for (let item of importantCollection) {
      item.style.visibility = "visible";
    }
  }
});
