let cardsArr = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let response = "";
let gamePlayed = 0;
let gameWon = 0;
const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#cards-el");
let gamesPlayed = document.querySelector("#games-played");
let gamesWon = document.querySelector("#games-won");
gamesPlayed.textContent = "Partite giocate: ";
gamesWon.textContent = "Partite vinte: ";

function getRandomCard() {
  let randNumber = Math.floor(Math.random() * 13) + 1;
  if (randNumber > 10) {
    return 10;
  } else if (randNumber === 1) {
    return 11;
  } else {
    return randNumber;
  }
}

function playGame() {
  cardEl.textContent = "Carte: ";
  for (let i = 0; i < cardsArr.length; i++) {
    cardEl.textContent += cardsArr[i] + " ";
  }
  sumEl.textContent = `Somma: ${sum}`;
  if (sum <= 20) {
    response = "Vuoi un'altra carta?";
  } else if (sum === 21) {
    response = "Complimenti, hai fatto Blackjack!";
    hasBlackjack = true;
    gameWon++;
    gamesWon.textContent = "Partite vinte: " + gameWon;
  } else {
    response = "Spiacente, sei fuori!";
    isAlive = false;
  }

  messageEl.textContent = response;
}

function startGame() {
  if (!isAlive || hasBlackjack) {
    isAlive = true;
    hasBlackjack = false;
    gamePlayed++;
    gamesPlayed.textContent = "Partite giocate: " + gamePlayed;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArr = [firstCard, secondCard];
    sum = cardsArr[0] + cardsArr[1];
    playGame();
  }
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    sum += card;
    cardsArr.push(card);
    playGame();
  }
}

console.log("partite giocate", gamePlayed);
