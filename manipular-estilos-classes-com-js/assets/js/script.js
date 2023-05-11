//Elementos capturados:
const loginTitle = document.querySelector("h2");
const loginButton = document.querySelector("button");
//Aplicando estilização via JS:
loginTitle.style.color = "blue";
loginTitle.style.fontSize = "2rem";

loginButton.style.borderRadius = "10px";
loginButton.style.backgroundColor = "orange";
loginButton.style.width = "100%";
//Simulando interação do usuário:
// 1 - Username incorrect:
const userLogin = document.getElementById("user-login");
const userErrorText = document.querySelector(".error-text");
console.log(userErrorText);

userLogin.classList.add("error");
userErrorText.classList.add("visible");
// 2 - Username correct, password incorrect:
const loginPassword = document.querySelector("#login-password");
const passwordErrorText = document.querySelector(".error-text");
console.log(passwordErrorText);

loginPassword.classList.add("error");