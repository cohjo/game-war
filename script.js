// Creating 3 attributes a card will have

var card = {
    suit: ['Hearts', 'Spades', 'Clubs', 'Diamonds'],
    rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    score: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}

// Creates array of all cards, a function to tell length of deck, and a function to draw cards
var deck = {
    cardArray: [],

    length: function() {
        var count = 0;
        for(let i = 0; i < card.rank.length; i++) {
            for(let j = 0; j < card.suit.length; j++) {
                count++;
            }
        }
        return count;
    },

    cards: function() {
        for(let i = 0; i < card.rank.length; i++) {
            for(let j = 0; j < card.suit.length; j++) {
                this.cardArray[i][j] = [card.suit[j], card.rank[i], card.score[i]];
            }
        }
        return this.cardArray;
    },

    draw: function() {

    }
}
