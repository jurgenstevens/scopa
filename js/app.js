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
let dealerDeckEl = document.querySelector("#dealerDeck")
let playerHandEl = document.querySelector("#playerHand")
let startBtnEl = document.querySelector("#startBtn")
let resetBtnEl = document.querySelector("#resetBtn")


// DID YE BRING DE CAIRDS
// let cards = [clubsAce1, clubs2, clubs3, clubs4, clubs5, clubs6, clubs7, clubsFante8, clubsCavallo9, clubsRe10, coinsAce1, coins2, coins3, coins4, coins5, coins6, coins7, coins8, coinsFante8, coinsCavallo9, coinsRe10, cupsAce1, cups2, cups3, cups4, cups5, cups6, cups7, cupsFante8, cupsCavalo9, cupsRe10, spadesAce1, spades2, spades3, spades4, spade5, spades6, spades7, spadesFante8, spadesCavallo9, spadesRe10]

// Event Listeners
// S4 Set up event listeners
startBtnEl.addEventListener("click", () => {
    // S4.1 Start off with console logging to make sure they work.
    console.log("This starts the game")
})

// Functionality