

let cards = []
let sum = 0
let messageEl = document.querySelector(".message-el")
console.log(messageEl)
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")
let hasBlackJack = false
let isAlive = false
let message = " " 
let player= {
  name: "Caleb",
  chips: 350
}

let playerEl = document.querySelector(".player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard() {
  let black = (Math.floor(Math.random() * 13) + 1)
  if (black===1){
    return 11
  }
  else if (black > 10){
    return 10
  }
  else{
    return black
  }

}


function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()

}

function renderGame(){
  cardsEl.textContent = "cards: "
  for (let a = 0; a < cards.length; a += 1){
    cardsEl.textContent += cards[a] + " "
  }

  sumEl.textContent = "Sum:"+ sum
  if (sum < 21){
    message = "Do you want to draw a new card?"
  }
  else if(sum === 21){
    message = "Yayyy you won!"
    hasBlackJack = true
  }
  else {
    message = "You've lost!"
    isAlive = false
  }
  messageEl.textContent = message
  
}
function newCard(){
  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   }
  
}


