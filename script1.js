class War { // class names should be capitalized
    constructor() {
    this.players = 2;
    this.winner = false;
    }
    // war methods such as 'startGame()' or 'createPlayers()' or 'playRound()'
    startGame() {
    var d = new Deck(); // creating a new Deck instance and naming it 'd'
    d.createDeck();
    console.log(d); // TESTING IN BROWSER CONSOLE
    d.shuffler();
    console.log(d);
    }
}
    
class Player {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }
}
    
class Deck {                 
    constructor() {          // constructor is for initializing a new Deck instance (** see line 8 **)
        this.cardArray = []; // a property of any Deck class (think of 'this' like 'Deck.cardArray') * see line ___ *
    }

    createDeck() {           // 'createDeck()' makes more sense than 'length()'
        let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // I always assume 'Ace' > 'King' (aka 'Ace' = 14)
            
        for(let i = 0; i < rank.length; i++) {  
            for(let j = 0; j < suit.length; j++) {
                this.cardArray.push(new Card(suit[j], rank[i], score[i]));
                    // for example:     new Card('Hearts',  '2'  ,     2   )
            }
        }
    }

    shuffler() {
        let temp = this.cardArray.length;
        let i = 0;
        
        while (temp) {
            i = Math.floor(Math.random() * temp--);
        
            [this.cardArray[temp], this.cardArray[i]] = [this.cardArray[i], this.cardArray[temp]];
        }
        return this.cardArray;
    }
}

    
class Card {
    constructor(suit, rank, score) { // * see line 30 *     for how to create a new card instance and push it into your cardArray
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}
    
// testing in browser console
const w = new War();
w.startGame();