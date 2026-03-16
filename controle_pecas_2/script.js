let pecas = JSON.parse(localStorage.getItem("pecas")) || []
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function salvar(){

localStorage.setItem("pecas",JSON.stringify(pecas))
localStorage.setItem("usuarios",JSON.stringify(usuarios))

}

function pagina(id){

document.querySelectorAll(".tela")
.forEach(t => t.style.display="none")

document.getElementById(id).style.display="block"

}

pagina("dashboard")

document.getElementById("formPeca")
.addEventListener("submit",function(e){

e.preventDefault()

let p = {

nome:nome.value,
codigo:codigo.value,
quantidade:Number(quantidade.value)

}

pecas.push(p)

salvar()
listarPecas()
grafico()

this.reset()

})

function listarPecas(){

let tabela = document.getElementById("listaPecas")
let select = document.getElementById("pecaSelect")

tabela.innerHTML=""
select.innerHTML=""

pecas.forEach((p,i)=>{

tabela.innerHTML += `
<tr>
<td>${p.nome}</td>
<td>${p.codigo}</td>
<td>${p.quantidade}</td>
</tr>
`

select.innerHTML += `
<option value="${i}">${p.nome}</option>
`

})

}

document.getElementById("formMov")
.addEventListener("submit",function(e){

e.preventDefault()

let id = pecaSelect.value
let tipo = document.getElementById("tipo").value
let q = Number(qtdMov.value)

if(tipo==="entrada")
pecas[id].quantidade += q
else
pecas[id].quantidade -= q

salvar()
listarPecas()
grafico()

})

document.getElementById("formUser")
.addEventListener("submit",function(e){

e.preventDefault()

usuarios.push({

nome:nomeUser.value,
login:loginUser.value

})

salvar()
listarUsers()

})

function listarUsers(){

let tabela = document.getElementById("listaUsers")

tabela.innerHTML=""

usuarios.forEach(u=>{

tabela.innerHTML+=`
<tr>
<td>${u.nome}</td>
<td>${u.login}</td>
</tr>
`

})

}

function grafico(){

let ctx = document.getElementById("grafico")

new Chart(ctx,{
type:"bar",
data:{
labels:pecas.map(p=>p.nome),
datasets:[{
label:"Estoque",
data:pecas.map(p=>p.quantidade)
}]
}
})

}

listarPecas()
listarUsers()
grafico()
