let mudarCor = document.querySelector(".cor");
let cores = [
  "rgb(182, 185, 185)", // Verde
  "rgb(165, 230, 197)", // Azul
  "rgb(37, 37, 37)", // Original
];
let indiceCor = 0;

mudarCor.addEventListener("click", () => {
  document.body.style.backgroundColor = cores[indiceCor];

  indiceCor++;

  if (indiceCor >= cores.length) {
    indiceCor = 0;
  }
});

function validar() {
  //declarando as variveis
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario === "Admin" && senha == "12345") {
    window.open("quiz.html");
  } else {
    alert("usuario e senha invalido");
  }
}

// Slide show
let imagens = [
  "../assets/img/convite.png",
  "../assets/img/convite2.png",
  "../assets/img/convite3.png",
];
let index = 0;
let time = 3000;

function slideShow() {
  document.getElementById("bannerImg").src = imagens[index];
  index++;

  if (index === imagens.length) {
    index = 0;
  }
  setTimeout(slideShow, time);
}

slideShow();

window.addEventListener("load", function () {
  alert("Bem-vindo à nossa página!");
});
