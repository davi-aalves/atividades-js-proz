// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  const valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  const valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
})

// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.querySelector("#senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.querySelector("#senha-helper");

togglePopup(senhaInput, senhaLabel);

// Validar valor do input
senhaInput.addEventListener("blur", (e)=> {
  const valor = e.target.value
  
  if(valor == ""){
    senhaHelper.innerText = "O campo de senha não pode estar vazio";
    estilizarInputIncorreto(senhaInput, senhaHelper);
  }else{
    estilizarInputCorreto(senhaInput, senhaHelper);    
  }
})

// ---------- VALIDAÇÃO DE CONFIRMAÇÃO DE SENHA ---------- //
const confSenhaInput = document.querySelector("#confirma-senha");
const confSenhaLabel = document.querySelector('label[for="confirma-senha"]');
const confSenhaHelper = document.querySelector("#confirma-senha-helper");

togglePopup(confSenhaInput, confSenhaLabel);

// Validar valor do input
confSenhaInput.addEventListener("blur", (e)=> {
  const valorConfSenha = e.target.value
  
  if(valorConfSenha == senhaInput.value){
    estilizarInputCorreto(confSenhaInput, confSenhaHelper);
  }else{
    confSenhaHelper.innerText = "As senhas precisam ser iguais!";
    estilizarInputIncorreto(confSenhaInput, confSenhaHelper);    
  }
})