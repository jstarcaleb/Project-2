let player1Time = 102
let player2Time = 107

function totaltime(){
  return player1Time+player2Time
}
let totalracetime = totaltime()
console.log(totalracetime)

let randomNumber = Math.floor(Math.random() * 7)+1

function rollDice(){
  return Math.floor(Math.random()*6) + 1
} 
let Roll = rollDice()
console.log(Roll)

//innerhtml
const buyEl = document.getElementById("container")
buyEl.innerHTML = "<button>Buy!</button>"

const container = document.getElementById("contqiner")
container.innerHTML = "<button onclick = 'buy()'>BUY!</button>"

function buy(){
  console.log(container.innerHTML += "<p>'Thank you for buying!'</p>")
}