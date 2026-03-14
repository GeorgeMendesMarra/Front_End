const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const usuario = document.getElementById("usuario").value;
const senha = document.getElementById("senha").value;

if(usuario === "admin" && senha === "123"){

localStorage.setItem("logado", true);

window.location.href = "index.html";

}else{

document.getElementById("erroLogin").innerText = "Usuário ou senha inválidos";

}

});

}
