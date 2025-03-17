// first exercise

const liste = document.querySelector("ol");
const lastChild = liste.lastElementChild;
const firstChild = liste.firstElementChild;
liste.insertBefore(lastChild, firstChild);

// second exercise

const main = document.querySelector("main");
const mainChilds = main.children;

const secondChild = mainChilds[1];
const thirdChild = mainChilds[2];

const secondTitle = secondChild.querySelector("h2");
const thirdTitle = thirdChild.querySelector("h2");

const secondSectP = secondChild.querySelector("p");
const thirdSectP = thirdChild.querySelector("p");

secondChild.insertBefore(thirdTitle, secondSectP);
thirdChild.appendChild(secondTitle);
thirdChild.appendChild(thirdSectP);
console.log(thirdChild);

// third exercise

thirdChild.remove();
