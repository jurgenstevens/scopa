console.log("Sanity check!")
import Deck from "./deck.js"

/*-------------------------------- Constants --------------------------------*/
// S4 - Set up the necessary variables
let deck, field, turn, round, winner

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



/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener("click", init)


/*-------------------------------- Functions --------------------------------*/


// S4 - Create a new deck and shuffle it by initializing the game and setting the turn and round to 1
function init(){
    turn = 1
    round = 1
    winner = null
    deck = new Deck()
    deck.reset()
    deck.shuffle()
    console.log("Deck before deal: ", deck)
    field = deck.dealField()
    player.hand = deck.dealPlayer()
    computer.hand = deck.dealComputer()
    console.log("Deck before deal: ", deck)
    console.log("Field cards: ", field)
    console.log("Player's Hand: ", player.hand)
    console.log("Computer's Hand: ", computer.hand)
}

// S7: Create functions to render player, computer and field hands ref Ian's function on lines 488 - 512
