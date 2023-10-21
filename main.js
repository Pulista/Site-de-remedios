let element = document.querySelectorAll(".card"); // ou document.getElementById('tilt')
VanillaTilt.init(element, {
  max: 25, // ângulo máximo de inclinação (em graus)
  speed: 400, // velocidade da transição (em milissegundos)
  glare: true, // habilita o efeito de brilho
  "max-glare": 0.5, // intensidade máxima do brilho (de 0 a 1)
});

//pop-up

const abrirPop = document.getElementById("abrirPop");
const popup = document.getElementById("popup");
const fecharPop = document.getElementById("fecharPop");

abrirPop.addEventListener("click", function () {
  popup.showModal();
});

fecharPop.addEventListener("click", function () {
  popup.close();
});
