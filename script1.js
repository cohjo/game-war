class War { // class names should be capitalized
    constructor() {
        this.players = [];
        this.winner = false;
        this.round = 1;
    }

    createPlayer(name) {
        this.players.push(new Player(name));
    }

    deal() {
        var d = new Deck(); // creating a new Deck instance and naming it 'd'
        d.createDeck();
        console.log(d); // TESTING IN BROWSER CONSOLE
        d.shuffler();
        console.log(d);
        for(let i = 51, j = 0; i >= 0, j < 26; j++) {
            this.players[0].cards[j] = d.cardArray[i];
            i--;
            this.players[1].cards[j] = d.cardArray[i];
            i--;

            d.cardArray.pop();
            d.cardArray.pop();
        }
    }

    playGame() {
        if (this.players[0].cards.length !== 0 || this.players[0].cards.length !== 0) {
            if (this.players[0].cards[0].score > 
                this.players[1].cards[0].score) {
                    this.players[0].cards.push(this.players[1].cards[0]);
                    this.players[1].cards.shift();
            } else if (this.players[0].cards[0].score < 
                this.players[1].cards[0].score) {
                    this.players[1].cards.push(this.players[0].cards[0]);
                    this.players[0].cards.shift();
            } else {
                this.warMeth();
            }
        } else {
            this.winner = true;
            if(this.players[0].cards.length === 0) {
                console.log('Player 2 wins!')
            } else {
                console.log('Player 1 wins!')
            }
        }
    }

    warMeth() {
        if (this.players[0].cards.length < 3 || 
            this.players[1].cards.length < 3) {
                this.winner = true
        } else {
            if(this.players[0].cards[2] > 
                this.players[1].cards[2]) {
                    this.players[0].cards.push(this.players[1].cards[0]);
                    this.players[0].cards.push(this.players[1].cards[1]);
                    this.players[0].cards.push(this.players[1].cards[2]);
                    this.players[1].shift();
                    this.players[1].shift();
                    this.players[1].shift();
                }
        }
    }

    startGame() {
        this.createPlayer('Player 1');
        this.createPlayer('Player 2');
        this.deal();
        console.log(this.players);
        while (this.winner === false) {
            this.playGame();
            this.round ++;
        }
    }
}
    
class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
}
    
class Deck {                 
    constructor() {
        this.cardArray = [];
    }

    createDeck() {
        let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // I always assume 'Ace' > 'King' (aka 'Ace' = 14)
            
        for(let i = 0; i < rank.length; i++) {  
            for(let j = 0; j < suit.length; j++) {
                this.cardArray.push(new Card(suit[j], rank[i], score[i]));
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
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}
    
// testing in browser console
const w = new War();
w.startGame();