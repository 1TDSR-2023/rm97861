// // var nome1 = "Petroni";
// // let nome1 = "Dareick";

// // //Regara 1: Inicializar na declaracao
// // //Regra 2: Nao alterar o seu valor durante o programa
// // const nome1 = "Ruan";

// // var nome1 = "Petroni";

// // if (nome1 != "") {
// //   var nome1 = "Geovanna";
// // }

// // console.log(nome1);

// // let botao = document.getElementById("meu-btn");
// // // console.log(botao.textContent);

// // botao.addEventListener("click", function () {
// //   // console.log(this.textContent);
// //   // Funcao Math
// //   // random = retorna 1 numero aleatorio entre 0 e 1
// //   // floor =  Ela arredonda um numero para baixo
// //   // ceil =  Ela arredonda um numero para cima
// //   // round =  Ela arredonda um numero aleatoriamente

// //   let r = 0;
// //   let g = 0;
// //   let b = 0;
// //   r = Math.round(Math.random() * 255);
// //   g = Math.round(Math.random() * 255);
// //   b = Math.round(Math.random() * 255);

// //   // this.setAttribute("Nome do Atributo", "Valor do Atributo")

// //   // this.setAttribute("style","background-color:rgb(" + r + "," + g + "," + b + ");");
// //   this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
// // });

// // Estudar
// // querySelector
// // querySelectorAll
// // Array
// // Estruturas de repeticao

// let frutas = [
//   "banana",
//   "maça",
//   "pessego",
//   "laranja",
//   "limao",
//   "melancia",
//   "kiwi",
// ];

// console.log(frutas);
// console.table(frutas);
// console.table(frutas[0]);
// console.table(frutas[6]);

// //inserir um item no final do array com o metodo push(nome do item);
// frutas.push("manga");
// console.log(frutas);

// //inserir um item no inicio do array com o metodo unshift(nome do item);
// frutas.unshift("pitaya");
// console.log(frutas);

// //remover o ultimo item do array com o metodo pop();
// frutas.pop("pitaya");
// console.log(frutas);

// //remover o primeiro item do array com o metodo shift();
// frutas.shift("pitaya");
// console.log(frutas);

// //Localizar um item no array utilizando um metodo indexOf(nome do item);
// //OBS: este metodo retorna o indice do item encontrado.
// // let indice = frutas.indexOf("laranja");
// // console.log(`O indice encontrado foi: ${indice}`);
// // console.log(`O item buscado foi: ${frutas[indice]}`);

// //Realizando uma remocao de item utilizando o metodo splice;
// //O metodo splice() recebe 2 parametros, O indicie do item que sera removido e quantidade de vezes que este mesmo indice sera removido. Ex: splice(indice, 1);
// //Dica: utilize o metodo indexOf() para buscar o indice do item no array

// let indice = frutas.indexOf("melancia");
// console.log(
//   `O item encontrdo no indice antes da remocao foi: ${frutas[indice]}`
// );
// frutas.splice(indice, 1);
// console.log(frutas);
// console.log(
//   `O item encontrdo no indice depois da remocao foi: ${frutas[indice]}`
// );

// //conctenacao de array
// let nr1 = [1, 2, 3, 4, 5];
// let nr2 = [6, 7, 8, 9, 10];
// console.log("Array 1: " + nr1);
// console.log("Array 2: " + nr2);

// //Concatenando os 2 arryas em um novo array.
// let nr3 = [nr1, nr2];
// console.log("Array 3: " + nr3);

// nr3.forEach((nr) => {
//   console.log("Itens do Array 3: " + nr);
// });


//conctenacao os 2 arrays em um novo array com o operador SPREAD
let nr1 = [1, 2, 3, 4, 5];
let nr2 = [6, 7, 8, 9, 10];
console.log("Array 1: " + nr1);
console.log("Array 2: " + nr2);

//Concatenando os 2 arryas em um novo array.
let nr3 = [...nr1,...nr2];
console.log("Array 3: " + nr3);

nr3.forEach((nr) => {
  console.log("Itens do Array 3: " + nr);
});