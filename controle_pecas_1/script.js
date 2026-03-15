let pecas = JSON.parse(localStorage.getItem("pecas")) || [];

const form = document.getElementById("formPeca");
const tabela = document.getElementById("tabelaPecas");
const buscar = document.getElementById("buscar");

function salvar(){

localStorage.setItem("pecas", JSON.stringify(pecas));

}

function listar(){

tabela.innerHTML = "";

pecas.forEach((peca, index)=>{

let linha = `
<tr>

<td>${peca.nome}</td>
<td>${peca.codigo}</td>
<td>${peca.quantidade}</td>
<td>R$ ${peca.preco}</td>

<td class="acoes">

<button class="editar" onclick="editar(${index})">Editar</button>
<button class="excluir" onclick="excluir(${index})">Excluir</button>

</td>

</tr>
`;

tabela.innerHTML += linha;

});

}

form.addEventListener("submit", function(e){

e.preventDefault();

let novaPeca = {

nome: document.getElementById("nome").value,
codigo: document.getElementById("codigo").value,
quantidade: document.getElementById("quantidade").value,
preco: document.getElementById("preco").value

};

pecas.push(novaPeca);

salvar();
listar();

form.reset();

});

function excluir(index){

pecas.splice(index,1);

salvar();
listar();

}

function editar(index){

let peca = pecas[index];

document.getElementById("nome").value = peca.nome;
document.getElementById("codigo").value = peca.codigo;
document.getElementById("quantidade").value = peca.quantidade;
document.getElementById("preco").value = peca.preco;

excluir(index);

}

buscar.addEventListener("keyup", function(){

let termo = buscar.value.toLowerCase();

let linhas = document.querySelectorAll("tbody tr");

linhas.forEach(linha=>{

linha.style.display = linha.innerText.toLowerCase().includes(termo)
? ""
: "none";

});

});

listar();
