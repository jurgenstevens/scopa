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



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()
// S4 - Create a new deck and shuffle it by initializing the game
function init(){
    deck = new Deck()
    deck.reset()
    deck.shuffle()
    console.log(deck)
}