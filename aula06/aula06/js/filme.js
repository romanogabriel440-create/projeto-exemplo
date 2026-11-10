const botao = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click",
function () {

    const filme = document.getElementById("filme").value;
    const ano = document.getElementById("ano").value;
    const nota = document.getElementById("nota").value;

    // desafio 3
    let anoAtual = 2026;
    let idade = anoAtual - ano; 

    resultado.textContent =
      "Seu filme favorito é: " + filme +
      " Lançado em " + ano + 
      " Nota informada "+ nota + "."
      " Este Filme tem "+ idade + " anos";

    // desafio 1


    // desafio 2

    
   

});

