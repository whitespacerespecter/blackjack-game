let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#cards-el")
cardEl.textContent += " "
let cardsArray = []
let sum = []

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: | "
    
    for (let i = 0; i < cardsArray.length; i++){
        cardEl.textContent += cardsArray[i] + " | "
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
        let nodeList = document.querySelectorAll("button")
        
        for (let i = 0; i < nodeList.length; i++){
            nodeList[i].style.backgroundColor = "#FF0000";
            nodeList[i].style.color = "#FFFFFF";
        }
        
        document.querySelector("#message-el").style.backgroundColor = "#FF0000";
        setTimeout( () => {
            location.reload();
            }, 1000)

    }
}

function drawButton(){
    document.querySelector("#draw-btn").style.backgroundColor = "#DAA520";
    document.querySelector("#draw-btn").style.color = "#016f32";
}

function newCard() {
    messageEl.textContent = "Drawing a new card from the deck!"
    card = getRandomCard(11);
    cardsArray.push(card)
    sum = sum + card;

    renderGame()
    
    console.log("Card: +", card)
    console.log("Sum: ", sum)
}

function getRandomCard() {
    
    let cardDraw = Math.ceil(Math.random() * 13);
    
    if (cardDraw === 1) {
        return 11
    } else if (cardDraw >= 11) {
        return 10
    } else {
        return cardDraw
    }
    
}