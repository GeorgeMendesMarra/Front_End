let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const form = document.getElementById("formProduto");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const descricao = document.getElementById("descricao").value;
const qtd = document.getElementById("qtd").value;

const produto = {

id: Date.now(),
descricao,
qtd

};

produtos.push(produto);

localStorage.setItem("produtos", JSON.stringify(produtos));

render();

});

}

function render(){

const lista = document.getElementById("listaProdutos");

if(!lista) return;

lista.innerHTML = "";

produtos.forEach(p => {

lista.innerHTML += `
<tr>
<td>${p.id}</td>
<td>${p.descricao}</td>
<td>${p.qtd}</td>
<td><button onclick="remover(${p.id})">Excluir</button></td>
</tr>
`;

});

}

function remover(id){

produtos = produtos.filter(p => p.id !== id);

localStorage.setItem("produtos", JSON.stringify(produtos));

render();

}

render();
