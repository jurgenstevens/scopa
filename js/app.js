console.log("Sanity check!")
// VARIABLES
// S1: Define variables used to keep the state of the game
let turn
let round = null
let playerHand = []
let opponentHand = []
let playerCardsCollected = []
let opponentCardsCollected = []
let tableCards = []
let dealerDeck = []
let isWinner = null
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

// CACHED ELEMENTS
// S3: Set up your cached elements to connect your JS to your HTML to get some functionality going.
// let turnEl = document.getElementById("turn")
let playerScoreEl = document.getElementById("playerScore")
let opponentScoreEl = document.getElementById("opponentScore")
let messageEl = document.getElementById("message")
let roundEl = document.getElementById("round")
let opponentHandEl = document.getElementById("opponentHand")
let tableCardsEl = document.getElementById("tableCards")
let dealerDeckEl = document.getElementById("dealerDeck")
let playerHandEl = document.getElementById("playerHand")
let startBtnEl = document.getElementById("startBtn")
let resetBtnEl = document.getElementById("resetBtn")

// EVENT LISTNENERS
// S4 Set up event listeners
// S4.1 Start off with console logging to make sure they work.
// console.log("This starts the game")
// S4.3 Then call the init function to initialize the game. 
startBtnEl.addEventListener("click", init)
// FUNCTIONALITY
// S4.2 Create the init function to initialize the game.
function init(){
    // S5: When initializing the game we want to...
    // S5.1 Start round count
    round += 1
    roundEl.innerText = `Round: ${round}`
    // S5.2 Render a message to the page on the game starting and whose turn it is
    // S5.3 Call function to shuffle cards
    shuffleCards()
    // S5.3.1 Push the cards to the dealer's card deck
    dealerDeck = ["clubsAce1", "clubs2", "clubs3", "clubs4", "clubs5", "clubs6", "clubs7", "clubsFante8", "clubsCavallo9", "clubsRe10", "coinsAce1", "coins2", "coins3", "coins4", "coins5", "coins6", "coins7", "coinsFante8", "coinsCavallo9", "coinsRe10", "cupsAce1", "cups2", "cups3", "cups4", "cups5", "cups6", "cups7", "cupsFante8", "cupsCavalo9", "cupsRe10", "spadesAce1", "spades2", "spades3", "spades4", "spade5", "spades6", "spades7", "spadesFante8", "spadesCavallo9", "spadesRe10"]
    dealerDeckEl.innerText = `Number of Cards left: ${dealerDeck.length}`
    // S5.4 Call function to give player cards
    dealCardsPlayer()
    // S5.5 Call function to give opponent cards
    dealCardsOpponent()
    // S5.6 Set turn to person playing
    console.log(dealerDeck)
    console.log(round)
}

// S6 Create a shuffle function before dealing the cards
function shuffleCards(){
    console.log("Cards have been shuffled.")
}

// S6.1 Create a function to deal cards to the player
function dealCardsPlayer(){
    console.log("Three cards have been dealt to player")
}

// S7: Create a function to deal cards to the opponent
function dealCardsOpponent(){
    console.log("Three cards have been dealt to opponent")
} 