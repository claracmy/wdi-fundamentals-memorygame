cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: 	"images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

cardsInPlay = [];

var score = 0;

var addScore = function(){
  score = score + 1;
  return score;
};


var checkForMatch = function(){
 if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
    addScore();
    console.log(score);
    document.getElementById("score").innerHTML = score;
    } else {
    alert("Sorry, try again.");
    }
  }
};

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  // console.log("User flipped " + cards[cardId].rank + ".");
  // console.log(cards[cardId].cardImage);
  // console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src',cards[cardId].cardImage);
  checkForMatch();
};


var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('class', 'card');
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

var clearBoard = function(){
  cardsInPlay = [];
  var cards = document.getElementsByClassName('card');
  while (cards[0]) {
    cards[0].parentNode.removeChild(cards[0]);
  }
  createBoard();
};

document.getElementById('reset').addEventListener('click', clearBoard);
document.getElementById("score").innerHTML = score;

createBoard();
