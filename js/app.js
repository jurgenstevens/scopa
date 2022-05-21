console.log("Sanity check!")
// Constants


// Variables
// S1: Define variables used to keep the state of the game
let turn
let playerHand = []
let opponentHand = []
let dealerDeck = []
let tableCards = []
let playerScore = {
    cards: 0,
    goldenCards: 0,
    primiera: 0,
    sevenOfCoins: 0,
    scopa: 0
}
let opponentScore = {
    cards: 0,
    goldenCards: 0,
    primiera: 0,
    sevenOfCoins: 0,
    scopa: 0
}

// S2: Next set up your HTML elements in the index.html file to include your cached elements

// Cached Elements
// S3: Set up your cached elements to connect your JS to your HTML to get some functionality going.
let turnEl = document.querySelector("#turn")
let playerScoreEl = document.querySelector("#playerScore")
let opponentScoreEl = document.querySelector("#opponentScore")
let messageEl = document.querySelector("#message")
let opponentHandEl = document.querySelector("#opponentHand")
let tableCardsEl = document.querySelector("#tableCards")
let dealerDeckEl = document.querySelector("#")
let playerHandEl = document.querySelector("#playerHand")
let startBtnEl = document.querySelector("#startBtn")
let resetBtnEl = document.querySelector("#resetBtn")

// Event Listeners


// Functionality