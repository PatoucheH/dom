// first ecercise

const firstNameInput = document.getElementById("firstname");
const firstNameSpan = document.getElementById("display-firstname");
firstNameSpan.style.textTransform = "capitalize";

firstNameInput.addEventListener("keyup", (e) => {
  if (e.key.length < 2) {
    firstNameSpan.append(e.key);
  }

  if (e.key === "Backspace") {
    firstNameSpan.lastChild.remove();
  }
});

// second exercise

const ageInput = document.getElementById("age");
const ageSpan = document.getElementById("a-hard-truth");

const spanErrorAge = document.createElement("span");

ageInput.addEventListener("keyup", (e) => {
  if (e.target.value >= 18) {
    if (e.target.value > 130) {
      spanErrorAge.textContent = `God you are pretty old, do you really are ${e.target.value} years old ? `;
      ageInput.insertAdjacentElement("afterend", spanErrorAge);
    }
    ageSpan.style.visibility = "visible";
  } else if (e.target.value <= 0) {
    spanErrorAge.textContent = "You can't be 0 years old ! ";
    ageInput.insertAdjacentElement("afterend", spanErrorAge);
  } else if (e.target.value < 18) {
    ageSpan.style.visibility = "hidden";
    spanErrorAge.remove();
  }
});

// third exercise

const passwordInput = document.getElementById("pwd");
const passwordVerifInput = document.getElementById("pwd-confirm");

const newSpan = document.createElement("span");
const newSpan2 = document.createElement("span");
const spanDontMatch = document.createElement("span");
spanDontMatch.textContent = "The two password must be the same !";

passwordInput.addEventListener("keyup", (e) => {
  if (e.target.value.length < 6) {
    passwordInput.style.border = "3px solid red";

    newSpan.textContent = "The password muste be greater than 6 !";
    passwordInput.insertAdjacentElement("afterend", newSpan);
  } else if (passwordInput.value !== passwordVerifInput.value) {
    passwordInput.style.border = "3px solid red";
    newSpan.remove();
    passwordInput.insertAdjacentElement("afterend", spanDontMatch);
  } else {
    passwordInput.style.border = "3px solid green";
    passwordVerifInput.style.border = "3px solid green";
    newSpan.remove();
    spanDontMatch.remove();
  }
});

passwordVerifInput.addEventListener("keyup", (e) => {
  if (e.target.value.length < 6) {
    passwordVerifInput.style.border = "3px solid red";

    newSpan2.textContent = "The password muste be greater than 6 !";
    passwordVerifInput.insertAdjacentElement("afterend", newSpan2);
  } else if (passwordInput.value !== passwordVerifInput.value) {
    passwordVerifInput.style.border = "3px solid red";
    newSpan2.remove();
    passwordVerifInput.insertAdjacentElement("afterend", spanDontMatch);
  } else {
    passwordInput.style.border = "3px solid green";
    passwordVerifInput.style.border = "3px solid green";
    newSpan2.remove();

    spanDontMatch.remove();
  }
});

//   fourth exercise

const selectMode = document.getElementById("toggle-darkmode");
const body = document.body;

selectMode.addEventListener("change", (e) => {
  if (e.target.value === "dark") {
    body.style.color = "white";
    body.style.background = "black";
  } else if (e.target.value === "light") {
    body.style.color = "black";
    body.style.background = "white";
  }
});
