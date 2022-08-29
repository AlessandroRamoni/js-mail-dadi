console.log("Venerdì");

let buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", function () {
  let numRandomYou = Math.floor(Math.random() * 6) + 1;
  let numRandomCpu = Math.floor(Math.random() * 6) + 1;
  let punteggioYou = document.getElementById("punteggioYou");
  let punteggioCpu = document.getElementById("punteggioCpu");
  let result = document.getElementById("result");
  console.log(numRandomYou, numRandomCpu);

  const quadratosx = document.getElementById("quadratosx");
  const quadratodx = document.getElementById("quadratodx");

  // let numRandomRotate = Math.floor(Math.random() * 30) + 1;

  punteggioYou.innerHTML = numRandomYou;
  punteggioCpu.innerHTML = numRandomCpu;
  newgame.style.visibility = "visible";
  // reload.style.visibility = "visible";
  buttonPlay.style.display = "none";
  // buttonPlay.style.visibility = "hidden";

  numeroRandom30();

  quadratosx.style.transform = `rotate(${numeroRandom30(-30, 30)}deg)`;
  quadratodx.style.transform = `rotate(${numeroRandom30(-30, 30)}deg)`;
  quadratosx.style.borderRadius = "30px";
  quadratodx.style.borderRadius = "30px";

  /*
ho provato ad utilizzare querySelectorAll al posto dei due ID (quadratosx e quadratodx) ma esce un allarme in console... why?!
*/
  if (numRandomYou > numRandomCpu) {
    result.innerHTML = "Hai vinto!";
    quadratosx.style.border = "8px solid green";
    quadratodx.style.border = "3px solid red";
  } else if (numRandomYou === numRandomCpu) {
    result.innerHTML = "Pareggio";
    quadratosx.style.border = "5px solid yellow";
    quadratodx.style.border = "5px solid yellow";
  } else {
    result.innerHTML = "Hai perso... Ritenta!";
    quadratosx.style.border = "3px solid red";
    quadratodx.style.border = "8px solid green";
  }
});

let newgame = document.getElementById("newgame");
newgame.addEventListener("click", function () {
  location.reload();
});

let reload = document.getElementById("reload");
reload.addEventListener("click", function () {
  location.reload();
});

function numeroRandom30(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

////////////////// ESERCIZIO ARRAY EMAIL

const emails = [
  "alessandroramo1@yahoo.it",
  "alessandroramo2@yahoo.it",
  "alessandroramo3@yahoo.it",
  "alessandroramo4@yahoo.it",
  "alessandroramo5@yahoo.it",
  "alessandroramo6@yahoo.it",
  "alessandroramo7@yahoo.it",
  "alessandroramo8@yahoo.it",
  "alessandroramo@yahoo9.it",
  "alessandroramo@yahoo10.it",
  "alessandroramoni@yahoo.it",
  "alessandroramo11@yahoo.it",
  "alessandroramo12@yahoo.it",
];

console.log(emails);

let mailUtente = prompt("Inserisci la tua mail");

let found = emails.includes(mailUtente);
console.log(found);

for (i = 0; i < emails.length; i++) {
  if (mailUtente === emails[i]) {
    console.log("Benvenuto");
  } else {
    console.log("Non puoi entrare");
  }
}
