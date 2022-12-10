// S1 - Set up the deck class with an emptry deck as the the only property.
// Inspired by Ian's Hanafuda Deck class. Thank you Ian!
class Deck {
    constructor(){
        this.deck = []
    }
    
    reset(){
        this.deck = []
        const suits = ['clubs', 'spades', 'coins', 'cups']
        const suitsValues = ['1', '2', '3', '4', '5', '6', '7']
        const royaltyValues = ['Fante8', 'Cavallo9', 'Re10']

        for (let suit in suits){
            for (let suitValue in suitsValues){
                this.deck.push(`${suits[suit]}${suitsValues[suitValue]}`)
            }
            for (let royalValue in royaltyValues){
                this.deck.push(`${suits[suit]}${royaltyValues[royalValue]}`)
            }
        }
    }

    // Referencing Ian's and the Fisher-Yates (Knuth) Shuffle algorithms
    shuffle(){
        const { deck } = this;
        let currentIndex = deck.length, randomIndex;
      
        while (currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex--);
      
          [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
        }
      
        return this;
    }
    dealField(){}
    dealPlayer(){}
    dealComputer(){}
}

export default Deck;