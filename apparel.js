const form = document.querySelector(".input-container");
const input = document.querySelector("#email");
const errorIcon = document.querySelector(".error");
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = input.value.trim();
  const isValid = validate(emailValue);

  if (!isValid) {
    errorIcon.style.visibility = "visible";
    errorText.style.visibility = "visible";
    input.style.border = "2.5px solid hsl(0, 93%, 68%)";
  } else {
    errorIcon.style.visibility = "hidden";
    errorText.style.visibility = "hidden";
  }
});

function validate(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
