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

let btnList = document.querySelector("#btn-list");
let txt = document.querySelector("#idTxt");
const list = document.querySelector("#idList");

btnList.addEventListener("click", function () {
  let value = txt.value;
  const newItem = document.createElement("li");
  newItem.innerText = value;
  list.appendChild(newItem);
  txt.value = "";
});

let aux = 0;

let imgBtb = document.getElementById("img-btn");
imgBtb.addEventListener("click", function () {
  if (aux > 2) aux = 0;
  let img = document.getElementById("img");

  let imagens = ["../img/lobo1.jpg", "../img/lobo2.jpg", "../img/lobo3.jpg"];

  img.setAttribute("src", `${imagens[aux]}`);
  aux++;
});

let btnTitle = document.getElementById("btn-title");
let title = document.getElementById("idTitle");

btnTitle.addEventListener("click", () => {
  if (title.textContent === "") {
    title.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero distinctio ullam asperiores veritatis molestiae neque consequatur deserunt doloremque numquam quaerat perspiciatis placeat, laborum nostrum ut sed ipsum reiciendis a adipisci ducimus eum quas odit! Ab similique maxime animi nisi laudantium reiciendis esse dicta provident, quasi expedita illo totam ea eveniet? Ipsam, nulla molestiae cupiditate nobis adipisci harum, reiciendis doloremque veritatis, minima voluptate similique vero facere blanditiis dolores sapiente. Earum ex ratione, sed velit vel consectetur nostrum eveniet magnam cupiditate! Officia suscipit quia rem velit, sunt impedit autem ab fugiat officiis? Labore, voluptas. Culpa placeat tenetur optio fuga voluptatem voluptate cumque id quidem repellat voluptatibus alias nobis excepturi praesentium, et earum quis dolor officia, ea repellendus ex? Vero deleniti neque officiis sunt! At accusantium tempora iure culpa, dolor dolorem quibusdam fugit blanditiis vitae accusamus ducimus dignissimos distinctio facilis dolores sed vel minima. Temporibus inventore molestias officiis perspiciatis, neque obcaecati incidunt.";
  } else {
    title.textContent = null;
  }
});

let hideBtn = document.getElementById("btn-hide-click");
hideBtn.addEventListener("click", function () {
  let div = document.getElementById("div-bg");

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
