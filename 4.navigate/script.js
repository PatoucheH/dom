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

secondChild.appendChild(thirdTitle);
thirdChild.appendChild(secondTitle);

// third exercise

thirdChild.remove();
