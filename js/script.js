console.log("Venerdì");

let numRandomYou = Math.floor(Math.random() * 6) + 1;
let numRandomCpu = Math.floor(Math.random() * 6) + 1;

console.log(numRandomYou, numRandomCpu);

if (numRandomYou > numRandomCpu) {
  console.log("Hai vinto!");
} else if (numRandomYou === numRandomCpu) {
  console.log("Pareggio");
} else {
  console.log("Hai perso.. Ritenta!");
}
