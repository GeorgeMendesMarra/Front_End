function login(){

let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario === "admin" && senha === "123"){
    
localStorage.setItem("logado", "true");
window.location.href = "index.html";

}else{

document.getElementById("erro").innerText = "Usuário ou senha incorretos";

}

}
