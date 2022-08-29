import blue from './data/mythicCards/blue/index.js';
import brown from './data/mythicCards/brown/index.js';
import green from './data/mythicCards/green/index.js';
const card = document.querySelector('.click-card');
const thisCard = document.querySelector('.current-card');
const firstGreen = document.querySelector('.first-stage-green');
const firstBrown = document.querySelector('.first-stage-brown');
const firstBlue = document.querySelector('.first-stage-blue');
const secondGreen = document.querySelector('.second-stage-green');
const secondBrown = document.querySelector('.second-stage-brown');
const secondBlue = document.querySelector('.second-stage-blue');
const thirdBlue = document.querySelector('.third-stage-blue');
const thirdBrown = document.querySelector('.third-stage-brown');
const thirdGreen = document.querySelector('.third-stage-green');

const blueCards = blue;
const brownCards = brown;
const greenCards = green;

const randomBlue = blueCards.map(i=>[Math.random(),i]).sort().slice(0,2);
const randomBrown = brownCards.map(i=>[Math.random(),i]).sort().slice(0,9);
const randomGreen = greenCards.map(i=>[Math.random(),i]).sort().slice(0,5);

const firstStage = [randomBlue[0][1], randomBrown[0][1], randomGreen[0][1],  randomBrown[1][1]];
const secondStage = [randomGreen[1][1], randomGreen[2][1], randomBrown[2][1], randomBrown[3][1], randomBrown[4][1], randomBlue[1][1]];
const thirdStage = [randomGreen[3][1], randomGreen[4][1], randomBrown[5][1], randomBrown[6][1], randomBrown[7][1], randomBrown[8][1]];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

shuffle(firstStage);
shuffle(secondStage);
shuffle(thirdStage);

const game = [
    firstStage, secondStage, thirdStage
]

let index = 0;

function showCard() {
    let currentCard;
    currentCard = game[index].pop();
    if (game[index] && game[index].length === 0) {
        index += 1;
    }

   thisCard.style.backgroundImage = `url(${currentCard.cardFace})`;

    let firstStageBrown = game[0].filter((obj) => obj.color === "brown");
    let firstStageGreen = game[0].filter((obj) => obj.color === "green");
    let firstStageBlue = game[0].filter((obj) => obj.color === "blue");
    let secondStageBrown = game[1].filter((obj) => obj.color === "brown");
    let secondStageGreen = game[1].filter((obj) => obj.color === "green");
    let secondStageBlue = game[1].filter((obj) => obj.color === "blue");
    let thirdStageBrown = game[2].filter((obj) => obj.color === "brown");
    let thirdStageGreen = game[2].filter((obj) => obj.color === "green");
    let thirdStageBlue = game[2].filter((obj) => obj.color === "blue");

    firstGreen.textContent = `${firstStageGreen.length}`;
    firstBrown.textContent = `${firstStageBrown.length}`;
    firstBlue.textContent = `${firstStageBlue.length}`;
    secondBlue.textContent = `${secondStageBlue.length}`;
    secondBrown.textContent = `${secondStageBrown.length}`;
    secondGreen.textContent = `${secondStageGreen.length}`;
    thirdBlue.textContent = `${thirdStageBlue.length}`;
    thirdBrown.textContent = `${thirdStageBrown.length}`;
    thirdGreen.textContent = `${thirdStageGreen.length}`;

    if (game[0].length === 0 && game[1].length === 0 && game[2].length === 0) {
        document.querySelector('.mythic-card').remove();
    }

    console.log(game);
}

card.addEventListener('click', showCard);

    