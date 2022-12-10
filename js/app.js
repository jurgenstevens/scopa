console.log("Sanity check!")
import Deck from "./deck.js"

/*-------------------------------- Constants --------------------------------*/
let deck


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
    deck = new Deck()
    deck.reset()
    deck.shuffle()
    console.log(deck)
}