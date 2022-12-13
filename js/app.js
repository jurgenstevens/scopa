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
    round = 1
    winner = null
    deck = new Deck()
    deck.reset()
    deck.shuffle()
    field = deck.dealField()
    player.hand = deck.dealPlayer()
    computer.hand = deck.dealComputer()
    // S7a: create a ul to store cards in field
    const fieldCardsUl = document.createElement('ul')
    render()
}

// S8: Create functions to render player, computer and field hands ref Ian's function on lines 488 - 512
function render(){
    roundEl.innerText = `Round: ${round}`
    dealerDeckEl.innerText = `${deck.deck.length} cards left`
    renderFieldCards()
    renderComputerCards()
}

// S8a: Create a function to render the four field cards
function renderFieldCards(){
    fieldEl.innerHTML = ""
    field.forEach((card) => {
        let fieldCard = document.createElement('div')
        fieldCard.className = card
        fieldCard.textContent = `${card}`
        fieldEl.appendChild(fieldCard)
        console.log(fieldCard)
    })
}
// S9: Render the three (upside down) opponent cards
function renderComputerCards(){
    computerHandEl.innerHTML = ""
    computer.hand.forEach((card) => {
        let computerCard = document.createElement('div')
        computerCard.className = card
        computerCard.id = card.replace(/\s/g, '')
        computerCard.textContent = `${card}`
        computerHandEl.appendChild(computerCard)
        console.log(computerCard)
    })
}
// S10: Render the three player cards
// S11: Create a function to match cards upon being clicked to push to field