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
  const quadratosx = document.getElementById("quadratosx");
  const quadratodx = document.getElementById("quadratodx");
  // let numRandomRotate = Math.floor(Math.random() * 30) + 1;

  punteggioYou.innerHTML = numRandomYou;
  punteggioCpu.innerHTML = numRandomCpu;
  newgame.style.visibility = "visible";
  buttonPlay.style.display = "none";
  // buttonPlay.style.visibility = "hidden";

  numeroRandom30();

  quadratosx.style.transform = `rotate(${numeroRandom30(-30, 30)}deg)`;
  quadratodx.style.transform = `rotate(${numeroRandom30(-30, 30)}deg)`;

  /*
ho provato ad utilizzare querySelectorAll al posto dei due ID (quadrato sx e quadratodx) ma esce un allarme in console... why?!
*/

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

function numeroRandom30(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
