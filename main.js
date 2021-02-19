const form1 = document.querySelector(".form-1");
const forms = document.querySelectorAll(".form");
const progress = document.querySelector(".form__progress");
const inputs = document.querySelectorAll("input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

forms.forEach((form, index) => {
  const height = 100 / forms.length;
  form.classList.add("next");
  const buttons = form.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = button.textContent.trim();
      if (index < 0) {
        index = 0;
      }
      if (index > buttons.length) {
        index = buttons.length - 1;
      }
      if (action === "Next") {
        forms[index].classList.add("previous");
        forms[index].classList.remove("active");
        forms[index + 1].classList.add("active");
        forms[index + 1].classList.remove("next");
        progress.style.height = `${height + height * (index + 1)}%`;

        document
          .querySelector(`.form__step-${index + 1}`)
          .classList.add("active");
      }
      if (action === "Back") {
        forms[index - 1].classList.add("active");
        forms[index - 1].classList.remove("previous");
        forms[index].classList.add("next");
        forms[index].classList.remove("active");
        progress.style.height = `${height * index - forms.length}%`;

        document
          .querySelector(`.form__step-${index}`)
          .classList.remove("active");
      }
    });
  });
});
form1.classList.remove("next");
form1.classList.add("active");

const iconLock = document.querySelector("#pwdIcon");
const pwd = document.querySelector("#pwd");
function show(iconLock, input) {
  if (input.type === "password") {
    input.type = "text";
    iconLock.classList.remove("fa-lock");
    iconLock.classList.add("fa-lock-open");
  } else {
    input.type = "password";
    iconLock.classList.add("fa-lock");
    iconLock.classList.remove("fa-lock-open");
  }
}

iconLock.addEventListener("click", () => {
  show(iconLock, pwd);
});
