const article = document.querySelector("article");
const nameArray = [
  "Stephan",
  "Jordan",
  "Antoine",
  "Martin",
  "Arseniia",
  "Inna",
  "Liana",
  "Manu",
  "Valentin",
  "Kamal",
];

function getRandomColor() {
  const choice = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += choice[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hexaToRgb(hexa) {
  const r = parseInt(hexa.slice(1, 3), 16);
  const g = parseInt(hexa.slice(3, 5), 16);
  const b = parseInt(hexa.slice(5, 7), 16);
  return { r, g, b };
}

function getDarkBrightColor(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  //   console.log(rgb);
  //   console.log(r, g, b);

  if (0.3 * r + 0.59 * g + 0.11 * b <= 128) {
    return "#fff";
  } else {
    return "#000";
  }
}

function getRandomNameArray(nameArray) {
  for (let i = nameArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nameArray[i], nameArray[j]] = [nameArray[j], nameArray[i]];
  }
  return nameArray;
}

// console.log(getDarkBrightColor(0, 12, 100));
// console.log(getDarkBrightColor(255, 255, 255));

getRandomNameArray(nameArray);

for (const name of nameArray) {
  const randomColor = getRandomColor();
  const nameToAdd = document.createTextNode(name);
  const section = document.createElement("section");

  section.appendChild(nameToAdd);
  section.style.background = randomColor;
  section.style.color = getDarkBrightColor(hexaToRgb(randomColor));
  article.appendChild(section);
}
