const body = document.body;
const bodyChildren = body.children;

document.title = "Modifying the dom";

body.style.background = "rgb(255, 127,0)";

for (const elem of bodyChildren) {
  console.log(elem);
}

console.log(document.title);
