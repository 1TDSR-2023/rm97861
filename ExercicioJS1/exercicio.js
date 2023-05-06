let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  let r = 0;
  let g = 0;
  let b = 0;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

let 
