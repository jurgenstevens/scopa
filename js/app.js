import Deck from "./deck.js"

/*-------------------------------- Constants --------------------------------*/
// S4 - Set up the necessary variables
// S4a: Set up the visibile variables like deck, field, turn, round, winner
let deck, field, turn, round, winner, combinations = []

// S4a: Set up the player with its necessary properties
let player = {
    playerName: "Player",
    hand: [],
    combinations: [],
    selectedCard: null,
    selectedCardIdx: null,
    collectedCards: [],
    coinsCardsCollected: 0,
    scopas: 0,
    sevenOfCoins: false,
    primieraPoints: 0,
    scoreTotal: 0
}

// S4b: Set up the computer with its necessary properties
let computer = {
    playerName: "Computer",
    hand: [],
    combinations: [],
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
let buttonsEl = document.querySelector(".buttons")
let turnEl = document.querySelector(".turn")
let startBtnEl = document.querySelector(".startBtn")
let resetBtnEl = document.querySelector(".resetBtn")
let roundEl = document.querySelector(".round")
let dealerDeckEl = document.querySelector(".dealerDeck")
let fieldCardsDiv = document.querySelector(".field")
let computerCardsDiv = document.querySelector(".computer")
let playerDiv = document.querySelector(".player")

let fieldEl = document.querySelector(".fieldCards")
let playerHandEl = document.querySelector(".playerHand")
let computerHandEl = document.querySelector(".computerHand")
let sameValCardsEl = document.querySelector(".sameValueCards")

/*----------------------------- Event Listeners -----------------------------*/
startBtnEl.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/
// resetBtnEl.style.visibility = "hidden"

// S7 - Create a new deck and shuffle it by initializing the game and setting the turn and round to 1
function init(){
    turn = 1
    turnEl.innerText = `${turn}`
    round = 1
    winner = null
    deck = new Deck()
    deck.reset()
    deck.shuffle()
    field = deck.dealField()
    player.hand = deck.dealPlayer()
    computer.hand = deck.dealComputer()
    startBtnEl.style.visibility = "hidden"
    resetBtnEl.style.visibility = "visible"
    resetBtnEl.addEventListener("click", init)
    render()
}

// S8: Create functions to render player, computer and field hands ref Ian's function on lines 488 - 512
function render(){
    roundEl.innerText = `Round: ${round}`
    dealerDeckEl.innerText = `${deck.deck.length} cards left`
    renderFieldCards()
    renderComputerCards()
    renderPlayerCards()
}

// S8a: Create a function to render the four field cards
function renderFieldCards(){
    fieldEl.innerHTML = ""
    field.forEach((card) => {
        let fieldCard = document.createElement('div')
        fieldCard.className = card
        fieldCard.id = card
        fieldCard.textContent = `${card}`
        fieldEl.appendChild(fieldCard)
        // Eventually create a function for the computer to match cards on its own.
    })
}
// S9: Render the three (upside down later) opponent cards
function renderComputerCards(){
    computerHandEl.innerHTML = ""
    computer.hand.forEach((card) => {
        let computerCard = document.createElement('div')
        computerCard.className = card
        computerCard.id = card
        computerCard.textContent = `${card}`
        computerHandEl.appendChild(computerCard)
    })
}
// S10: Render the three player cards
function renderPlayerCards(){
    playerHandEl.innerHTML = ""
    player.hand.forEach((card) => {
        let playerCard = document.createElement('div')
        playerCard.className = card
        playerCard.id = card
        playerCard.textContent = `${card}`
        playerHandEl.appendChild(playerCard)
        playerCard.addEventListener('click', putUserCardDown)
    })
}
// S11: Create a function to push user cards to field
function putUserCardDown(event){
    // S11a: Target the card and then append it to the field array
    let cardSelected = event.target
    let cardSelectedId = event.target.id
    player.selectedCard = cardSelectedId
    // S11b:
    playerCardSumOrCompared(cardSelected)
}
// S12: Stub up function that will match cards upon being clicked and call in putUserCardDown function above.
function playerCardSumOrCompared(cardSelected){
    // S12a: Compare last card in the field array (card you set) with the rest of the cards by looping
    let cardSelectedValue = Math.floor(cardSelected.id.slice(-2))
    playerCompareCards(cardSelected, cardSelectedValue)
}
// Create a function to compare the cards once player selects a card
function playerCompareCards(cardSelected, cardSelectedValue){
    console.log("This was the card selected: ", cardSelected)
    let sameValCardOrCards = field.filter(card => card.charAt(card.length-1) == cardSelectedValue)
    // If one card matches the card placed, push the cards to the collection array
    if(sameValCardOrCards.length){
        console.log("Single matching card: ", sameValCardOrCards)
        moveMatchingCardToCollection(cardSelected, sameValCardOrCards)
    } 
    // If two or more cards match the value of the card placed, render the card options for the player to pick which card will go to their collection
    if(sameValCardOrCards.length > 1){
        console.log("Mutliple matching cards: ", sameValCardOrCards)
    }
    if(!sameValCardOrCards.length) {
    // Call S14 function here
        console.log("No exact matches. Checking if they sum up to the placed card's value.")
        let cardSelectedValue = Math.floor(cardSelected.id.slice(-2))
        let fieldNums = field.map(fieldCard => {
            return parseInt(fieldCard.slice(-2))
        })
        comparePossibleSumCards(fieldNums,fieldNums, 0, cardSelectedValue, player.combinations, 0)
        if(combinations){
            console.log("These are the sum combos: ", combinations)
        }
        if(!combinations){
            console.log("No matches. It's the computer's turn.")
        }
    }
}

// Create a function to handle moving matching cards to player's collected array
function moveMatchingCardToCollection(cardSelected, sameValCardOrCards){
    // Write condionts for player hand to match playerHandEl cards
    player.hand.forEach((card, idx) => {
        if(card == player.selectedCard){
            player.collectedCards.push(player.hand.at(idx))
            player.hand.splice(idx, 1)
        } 
    })
    // Set condition to remove both cards that matched from the field.
    if(sameValCardOrCards.length == 1){
        console.log("Just one card matches")
        //! Create a setTimeout on this later
        document.getElementById(cardSelected.id).remove()
        document.querySelector(`.${sameValCardOrCards[0]}`).remove()
        // Render a quick message saying those two cards matched
    }
}
// S14: Create an function to compare field cards for value of selected card. Ref: 
// Call this function on line 146
// Refered to: threeSum(): https://www.tutorialspoint.com/finding-three-elements-with-required-sum-in-an-array-in-javascript
// twoSum() and threeSum() https://javascript.plainenglish.io/algorithm-problem-solving-two-sum-and-three-sum-problem-762606f68b65
// Final solution below uses recursion and is passed an empty array to push sum combos, credit goes to chatGPT:
function comparePossibleSumCards(fieldNums, originalFieldNums, currentIdx, cardSelectedValue, combination, sum){
    if(sum === cardSelectedValue){
        // pushing the combination var will only push the obj represenation and initial index so create an empty array here to map through the combos in the combination array to push the comboArr to the combinations global arr var
        console.log(combination)
        let comboArr = []
        combination.map(combo => comboArr.push(combo))
        combinations.push(comboArr)
        return
    }
    if(sum > cardSelectedValue){
        return
    }
    for (let i = 0; i < fieldNums.length; i++){
        let cardIdx = currentIdx + i;
        combination.push(cardIdx)
        let newSum = sum + fieldNums[i]
        comparePossibleSumCards(fieldNums.slice(i + 1), originalFieldNums, cardIdx + 1, cardSelectedValue, combination, newSum)
        combination.pop()
    }
}

