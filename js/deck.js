class Deck {
    constructor(){
        this.deck = []
    }

    reset(){
        this.deck = []
//     dealerDeck = ["clubsAce1", "clubs2", "clubs3", "clubs4",             "clubs5",   "clubs6", "clubs7", "clubsFante8", "clubsCavallo9", "clubsRe10", "coinsAce1", "coins2", "coins3", "coins4", "coins5", "coins6", "coins7", "coinsFante8", "coinsCavallo9", "coinsRe10", "cupsAce1", "cups2", "cups3", "cups4", "cups5", "cups6", "cups7", "cupsFante8", "cupsCavalo9", "cupsRe10", "spadesAce1", "spades2", "spades3", "spades4", "spade5", "spades6", "spades7", "spadesFante8", "spadesCavallo9", "spadesRe10"]

        const suits = ['clubs', 'spades', 'coins', 'cups']
        const royalty = ['Fante', 'Cavallo', 'Re']
        const suitsValues = ['0', '1', '2', '3', '4', '5', '6', '7']
        const royaltyValues = ['8', '9', '10']

        for (let suit in suits){
            for (let suitValue in suitsValues){
                console.log(`${suits[suit]}${suitValues[suitValue]}`)
            }
            for (let royal in royalty){
                console.log(`${suits[suit]}${royalty[royal]}`)
            }

        }

    }

    shuffle(){}
    dealField(){}
    dealPlayer(){}
    dealComputer(){}
}

export default Deck;