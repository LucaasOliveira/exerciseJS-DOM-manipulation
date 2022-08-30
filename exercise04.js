const increment = document.querySelector("#btn-increment");
const resetCounter = document.querySelector("#btn-reset-counter");
const p = document.querySelector("#p");
let count = 0;

increment.addEventListener("click", (event) => {
    count++

    count == 1 ? p.innerText = `O contador está com ${count} clique.` : p.innerText = `O contador está com ${count} cliques.`
});


resetCounter.addEventListener("click", (event) => {
    count = 0;
    p.innerText = "";
});