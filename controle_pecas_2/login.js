function entrar(){

let login = document.getElementById("login").value
let senha = document.getElementById("senha").value

if(login === "admin" && senha === "123"){

localStorage.setItem("logado","true")
window.location = "index.html"

}else{

document.getElementById("erro").innerText = "Login inválido"

}

}
