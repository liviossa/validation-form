const form = {
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  button: document.querySelector(".button"),
  error: document.querySelector(".input-error"),
};

function checkForm() {
  const email = form.email.getElementsByTagName("input")[0].value;
  const password = form.password.getElementsByTagName("input")[0].value;
  if (email && password) {
    form.button.classList.remove("disabled");
  } else {
    form.button.classList.add("disabled");
  }
}
function handleInput(e, name) {
  const { value } = e.target;
  if (value) {
    form[name].classList.add("filled");
  } else {
    form[name].classList.remove("filled");
  }
  checkForm();
}
function validateEmail() {
  const { value } = form.email.getElementsByTagName("input")[0];
  const reg = /[a-z]{3,20}@[a-z]{3,10}\.[a-z]{2,6}/;
  if (reg.test(value)) {
    form.email.classList.remove("error");
    form.error.classList.remove("view");
    alert("Welcome");
  } else {
    form.button.classList.add("disabled");
    form.email.classList.add("error");
    form.error.classList.add("view");
  }
}

form.email.oninput = (e) => handleInput(e, "email");
form.password.oninput = (e) => handleInput(e, "password");
form.button.onclick = validateEmail;
