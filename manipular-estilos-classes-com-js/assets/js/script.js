const loginTitle = document.querySelector("h2");
const loginButton = document.querySelector("button");

loginTitle.style.color = "tomato";
loginTitle.style.fontSize = "2rem";

loginButton.style.borderRadius = "10px";
loginButton.style.backgroundColor = "orange";
loginButton.style.width = "100%";

const userInput = document.getElementById("user-login");
const userError = document.getElementsByClassName("error-text");
const passwordInput = document.getElementById("login-password");

userInput.classList.add("correct");
passwordInput.classList.add("error");
userError[1].classList.add("visible");
