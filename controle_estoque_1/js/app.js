const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn?.addEventListener("click", () => {

menu.classList.toggle("active");

});

const produtos = [];

const formProduto = document.getElementById("formProduto");

formProduto?.addEventListener("submit", function(e){

e.preventDefault();

const descricao = this.elements[0].value;

produtos.push({

descricao: descricao,
quantidade: 0

});

renderProdutos();

this.reset();

});

function renderProdutos(){

const tabela = document.getElementById("tabelaProdutos");

if(!tabela) return;

tabela.innerHTML="";

produtos.forEach((p,i)=>{

tabela.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${p.descricao}</td>
<td>${p.quantidade}</td>
<td><button onclick="remover(${i})">Excluir</button></td>
</tr>
`;

});

}

function remover(i){

produtos.splice(i,1);

renderProdutos();

}
