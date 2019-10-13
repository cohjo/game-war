
var card = {
    suit: ['Hearts', 'Spades', 'Clubs', 'Diamonds'],
    rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    score: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}

class deck  {
    //cardArray = [];
    constructor(name) {
    var cardArray = [];
        card = {
            suit: ['Hearts', 'Spades', 'Clubs', 'Diamonds'],
            rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
            score: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        }
    }
    length() {
        var count = 0;
        for(let i = 0; i < this.card.rank.length; i++) {
            for(let j = 0; j < this.card.suit.length; j++) {
                count++;
            }
        }
        return count;
    }
    cards() {
        for(let i = 0; i < this.card.rank.length; i++) {
            for(let j = 0; j < this.card.suit.length; j++) {
                this.cardArray[i][j] = [card.suit[j], card.rank[i], card.score[i]];
            }
        }
        return this.cardArray;
    }
    draw() {

    }
    
}


class player {
    constructor(name, cards) {

    }
}

