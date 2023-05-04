// var nome1 = "Petroni";
// let nome1 = "Dareick";

// //Regara 1: Inicializar na declaracao
// //Regra 2: Nao alterar o seu valor durante o programa
// const nome1 = "Ruan";

// var nome1 = "Petroni";

// if (nome1 != "") {
//   var nome1 = "Geovanna";
// }

// console.log(nome1);

let botao = document.getElementById("meu-btn");
// console.log(botao.textContent);

botao.addEventListener("click", function () {
  // console.log(this.textContent);
  // Funcao Math
  // random = retorna 1 numero aleatorio entre 0 e 1
  // floor =  Ela arredonda um numero para baixo
  // ceil =  Ela arredonda um numero para cima
  // round =  Ela arredonda um numero aleatoriamente

  let r = 0;
  let g = 0;
  let b = 0;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  // this.setAttribute("Nome do Atributo", "Valor do Atributo")

  // this.setAttribute("style","background-color:rgb(" + r + "," + g + "," + b + ");");
  this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});


// Estudar 
// querySelector
// querySelectorAll
// Array
// Estruturas de repeticao