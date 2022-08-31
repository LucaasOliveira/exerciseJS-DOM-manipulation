/* 1. Crie uma página HTML simples contendo uma div identificada com
um id e um botão, depois crie um arquivo javascript com uma
função addConteudo() que deve ser vinculado ao onclick do botão.
Ao clicar no botão adicionar na div o texto “Olá Mundo”. */

let btn = document.querySelector("button");
btn.addEventListener("click", addConteudo);

function addConteudo() {
    const div = document.querySelector("#content");
    div.innerHTML = "Olá Mundo";

    btn.innerText = "fui clicado";
};