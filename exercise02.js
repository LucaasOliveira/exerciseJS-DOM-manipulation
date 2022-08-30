
/* 2. Crie uma página HTML simples contendo um botão, depois crie um
arquivo javascript contendo uma função addImagem() que deve
ser vinculado ao onclick do botão. Ao clicar no botão deve ser
adicionado uma imagem qualquer na tela. */

let image = true;

let btnTwo = document.querySelector("#btnTwo");
btnTwo.addEventListener("click", (event) => {

    addImagem();

});
function addImagem() {

    if (image) {
        const img = document.createElement('img');
        img.src = 'https://www.growdev.com.br/assets/images/logo-dark.png';
        img.width = 400;
        document.body.appendChild(img);
        image = false;
    };
};
