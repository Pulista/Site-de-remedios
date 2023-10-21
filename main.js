let element = document.querySelectorAll(".card"); // ou document.getElementById('tilt')
VanillaTilt.init(element, {
  max: 25, // ângulo máximo de inclinação (em graus)
  speed: 400, // velocidade da transição (em milissegundos)
  glare: true, // habilita o efeito de brilho
  "max-glare": 0.5, // intensidade máxima do brilho (de 0 a 1)
});

//pop-up

const abrirPops = document.querySelectorAll(".abrirPop");
const popups = document.querySelectorAll(".popup");
const fecharPops = document.querySelectorAll(".fecharPop");

abrirPops.forEach(function (abrirPop, index) {
  abrirPop.addEventListener("click", function () {
    popups[index].showModal();
  });
});

fecharPops.forEach(function (fecharPop, index) {
  fecharPop.addEventListener("click", function () {
    popups[index].close();
  });
});
