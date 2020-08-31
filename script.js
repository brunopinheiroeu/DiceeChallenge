var diceP1 = 0;
var diceP2 = 0;
function rollDice(){
  diceP1 = Math.floor(Math.random()*6)+1;
  diceP2 = Math.floor(Math.random()*6)+1;
}

document.Refresh;
rollDice();
document.querySelector("img.img1").setAttribute("src", "images/dice"+diceP1+".png");
document.querySelector("img.img2").setAttribute("src", "images/dice"+diceP2+".png");

if (diceP1 > diceP2) {
  document.querySelector("h1").innerHTML = "Player One Wins";
}


else if (diceP1 < diceP2) {
  document.querySelector("h1").innerHTML = "Player Two Wins";
}

else {
  document.querySelector("h1").innerHTML = "It's a Draw";
}
