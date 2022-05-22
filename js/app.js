console.log("Sanity check!")
// Variables
// S1: Define variables used to keep the state of the game
let turn
let round
let playerHand = []
let opponentHand = []
let playerCardsCollected = []
let opponentCardsCollected = []
let dealerDeck = []
let tableCards = []
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

// Cached Elements
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

// Event Listeners
// S4 Set up event listeners
startBtnEl.addEventListener("click", init
    // S4.1 Start off with console logging to make sure they work.
    // console.log("This starts the game")
    // S4.3 Then call the init function to initialize the game. 
)

// Functionality
// S4.2 Create the init function to initialize the game.
function init(){
    // S5: When initializing the game we want to...
    // S5.1 Set round count to 0
    round = 0
    roundEl.innerText = `Round: ${round}`
    // S5.2 Render a message to the page on the game starting and whose turn it is
    // S5.3 Push the cards to the dealer's card deck
    dealerDeck = ["clubsAce1", "clubs2", "clubs3", "clubs4", "clubs5", "clubs6", "clubs7", "clubsFante8", "clubsCavallo9", "clubsRe10", "coinsAce1", "coins2", "coins3", "coins4", "coins5", "coins6", "coins7", "coins8", "coinsFante8", "coinsCavallo9", "coinsRe10", "cupsAce1", "cups2", "cups3", "cups4", "cups5", "cups6", "cups7", "cupsFante8", "cupsCavalo9", "cupsRe10", "spadesAce1", "spades2", "spades3", "spades4", "spade5", "spades6", "spades7", "spadesFante8", "spadesCavallo9", "spadesRe10"]
    dealerDeckEl.innerText = `Number of Cards left: ${dealerDeck.length - 1}`
    // S5.4 Call function to give player cards
    // S5.5 Call function to give opponent cards
}
