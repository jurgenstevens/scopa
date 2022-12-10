class Deck {
    constructor(){
        this.deck = []
    }
    
    reset(){
        this.deck = []
        // Inspired by Ian's Hanafuda reset method. Thank you Ian!
        const suits = ['clubs', 'spades', 'coins', 'cups']
        const royalty = ['Fante', 'Cavallo', 'Re']
        const suitsValues = ['0', '1', '2', '3', '4', '5', '6', '7']
        const royaltyValues = ['8', '9', '10']

        for (let suit in suits){
            for (let suitValue in suitsValues){
                this.deck.push(`${suits[suit]}${suitsValues[suitValue]}`)
            }
            for (let royal in royalty){
                for (let royalValue in royaltyValues){
                    this.deck.push(`${suits[suit]}${royalty[royal]}${royaltyValues[royalValue]}`)
                }
            }

        }
    }

    shuffle(){}
    dealField(){}
    dealPlayer(){}
    dealComputer(){}
}

export default Deck;