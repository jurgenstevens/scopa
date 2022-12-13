console.log("Sanity check!")
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
let startBtnEl = document.getElementById("startBtn")
let roundEl = document.getElementById("round")
let fieldCardsEl = document.getElementById("fieldCards")
let fieldEl = document.querySelector(".field")
let dealerDeckEl = document.getElementById("dealerDeck")
let playerHandEl = document.getElementById("playerHand")

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
}

// S8a: Create a function to render the four field cards
function renderFieldCards(){
    fieldEl.innerHTML = ""
    field.forEach((card) => {
        let fieldCard = document.createElement('div')
        fieldCard.className = 'field-card'
        fieldCard.textContent = `${card}`
        fieldEl.appendChild(fieldCard)
    })
}
// S9: Render the three (upside down) opponent cards
// S10: Render the three player cards