import Deck from "./deck.js"

/*-------------------------------- Constants --------------------------------*/
// S4 - Set up the necessary variables
// S4a: Set up the visibile variables like deck, field, turn, round, winner
let deck, field, turn, round, winner

// S4a: Set up the player with its necessary properties
let player = {
    playerName: "Player",
    hand: [],
    selectedCard: null,
    selectedCardIdx: null,
    collectedCards: [],
    coinsCardsCollected: 0,
    scopas: 0,
    sevenOfCoins: false,
    primieraPoints: 0,
    scoreTotal: 0
}

// S4b: Set up the computer with its necessary properties
let computer = {
    playerName: "Player",
    hand: [],
    selectedCard: null,
    selectedCardIdx: null,
    collectedCards: [],
    coinsCardsCollected: 0,
    scopas: 0,
    sevenOfCoins: false,
    primieraPoints: 0,
    scoreTotal: 0
}

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
let buttonsEl = document.querySelector(".buttons")
let turnEl = document.querySelector(".turn")
let startBtnEl = document.querySelector(".startBtn")
let roundEl = document.querySelector(".round")
let dealerDeckEl = document.querySelector(".dealerDeck")
let fieldCardsDiv = document.querySelector(".field")
let computerCardsDiv = document.querySelector(".computer")
let playerDiv = document.querySelector(".player")

let fieldEl = document.querySelector(".fieldCards")
let playerHandEl = document.querySelector(".playerHand")
let computerHandEl = document.querySelector(".computerHand")

/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/


// S7 - Create a new deck and shuffle it by initializing the game and setting the turn and round to 1
function init(){
    turn = 1
    turnEl.innerText = `${turn}`
    round = 1
    winner = null
    deck = new Deck()
    deck.reset()
    deck.shuffle()
    field = deck.dealField()
    player.hand = deck.dealPlayer()
    computer.hand = deck.dealComputer()
    startBtnEl.style.visibility = 'hidden'
    render()
}

// S8: Create functions to render player, computer and field hands ref Ian's function on lines 488 - 512
function render(){
    roundEl.innerText = `Round: ${round}`
    dealerDeckEl.innerText = `${deck.deck.length} cards left`
    renderFieldCards()
    renderComputerCards()
    renderPlayerCards()
}

// S8a: Create a function to render the four field cards
function renderFieldCards(){
    fieldEl.innerHTML = ""
    field.forEach((card) => {
        let fieldCard = document.createElement('div')
        fieldCard.className = card
        fieldCard.textContent = `${card}`
        fieldEl.appendChild(fieldCard)
        // Eventually create a function for the computer to match cards on its own.
        
    })
}
// S9: Render the three (upside down later) opponent cards
function renderComputerCards(){
    computerHandEl.innerHTML = ""
    computer.hand.forEach((card) => {
        let computerCard = document.createElement('div')
        computerCard.className = card
        computerCard.id = card.replace(/\s/g, '')
        computerCard.textContent = `${card}`
        computerHandEl.appendChild(computerCard)
    })
}
// S10: Render the three player cards
function renderPlayerCards(){
    playerHandEl.innerHTML = ""
    player.hand.forEach((card) => {
        let playerCard = document.createElement('div')
        playerCard.className = card
        playerCard.id = card.replace(/\s/g, '')
        playerCard.textContent = `${card}`
        playerHandEl.appendChild(playerCard)
        playerCard.addEventListener('click', putUserCardDown)
    })
}
// S11: Create a function to push user cards to field
function putUserCardDown(event){
    let cardSelected = event.target
    fieldEl.appendChild(cardSelected)
    console.log(fieldEl)
    playerCardSumOrCompared(cardSelected)
}
// S12: Stub up function that will match cards upon being clicked and call in putUserCardDown function above.
function playerCardSumOrCompared(cardSelected){
    // S12a: Compare last card in the field array (card you set) with the rest of the cards by looping
    console.log("This is the card selected: ", cardSelected)
    console.log("Cards compared!")
    console.log("It's the computer's turn now.")
}




