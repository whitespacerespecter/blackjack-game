let firstCard = 4
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let cardEl = document.getElementById("cards-el")
let cardEl = document.querySelector("#cards-el")

function startGame() {
    cardEl.textContent = "Cards: " + firstCard + " | " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
    messageEl.textContent = "You received a new car!"
    card = getRandomCard(11);
    cardEl.textContent += " | " + card;
    sum = sum + card;
    sumEl.textContent = sum;

        if (sum <= 20) {
            messageEl.textContent = "Do you want to draw a new card?"
        } else if (sum === 21) {
            messageEl.textContent = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
        } else {
            messageEl.textContent = "You're out of the game!"
            isAlive = false
        }
    console.log("Sum: ", sum)
    console.log("Card: ", card)
}

function getRandomCard(max) {
    return Math.ceil(Math.random() * max);
  }
  