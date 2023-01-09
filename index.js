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
const gamesPlayed = document.querySelector("#games-played");
const gamesWon = document.querySelector("#games-won");
const cardsGallery = document.querySelector(".cards-holder");
gamesPlayed.textContent = "Partite giocate: ";
gamesWon.textContent = "Partite vinte: ";
let cardNumber;

function getRandomCard() {
  let randNumber = Math.floor(Math.random() * 13) + 1;
  switch (randNumber) {
    case 1:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/1200px-01_of_spades_A.svg.png";
      break;
    case 2:
      cardSeed = 2;
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/614px-Playing_card_spade_2.svg.png";
      break;
    case 3:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1638px-Playing_card_spade_3.svg.png";
      break;
    case 4:
      cardNumber =
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/74939/four-of-spades-clipart-xl.png";
      break;
    case 5:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/706px-5_of_spades.svg.png";
      break;
    case 6:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/6_of_spades.svg/1200px-6_of_spades.svg.png";
      break;
    case 7:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/7_of_spades.svg/1200px-7_of_spades.svg.png";
      break;
    case 8:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/1200px-8_of_spades.svg.png";
      break;
    case 9:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/9_of_spades.svg/1200px-9_of_spades.svg.png";
      break;
    case 10:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/10_of_spades.svg/1200px-10_of_spades.svg.png";
      break;
    case 11:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_jack_of_spades.svg/360px-English_pattern_jack_of_spades.svg.png";
      break;
    case 12:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Queen_of_spades_en.svg/1200px-Queen_of_spades_en.svg.png";
      break;
    case 13:
      cardNumber =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/King_of_spades_en.svg/1200px-King_of_spades_en.svg.png";
      break;
  }
  if (randNumber > 10) {
    cardsGallery.innerHTML += `<img src=${cardNumber} />`;
    return 10;
  } else if (randNumber === 1) {
    cardsGallery.innerHTML += `<img src=${cardNumber} />`;
    return 11;
  } else {
    cardsGallery.innerHTML += `<img src=${cardNumber} />`;
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
    response = "Il banco vince!";
    isAlive = false;
  }

  messageEl.textContent = response;
}

function startGame() {
  if (!isAlive || hasBlackjack) {
    cardsGallery.innerHTML = "";
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
