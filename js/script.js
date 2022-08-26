console.log("Venerdì");

let buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", function () {
  let numRandomYou = Math.floor(Math.random() * 6) + 1;
  let numRandomCpu = Math.floor(Math.random() * 6) + 1;
  let punteggioYou = document.getElementById("punteggioYou");
  let punteggioCpu = document.getElementById("punteggioCpu");
  let result = document.getElementById("result");
  let newgame = document.getElementById("newgame");
  console.log(numRandomYou, numRandomCpu);

  punteggioYou.innerHTML = numRandomYou;
  punteggioCpu.innerHTML = numRandomCpu;
  newgame.style.visibility = "visible";

  newgame.addEventListener("click", function () {
    location.reload();
  });

  if (numRandomYou > numRandomCpu) {
    result.innerHTML = "Hai vinto!";
  } else if (numRandomYou === numRandomCpu) {
    result.innerHTML = "Pareggio";
  } else {
    result.innerHTML = "Hai perso... Ritenta!";
  }
});
