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
const easyLevel = document.querySelector('.easy');
const normalLevel = document.querySelector('.normal');
const hardLevel = document.querySelector('.hard');
const difficultyButton = document.querySelector('.difficulty');
let game;

const blueCards = blue;
const brownCards = brown;
const greenCards = green;

const normalBlue = blueCards.map(i=>[Math.random(),i]).sort().slice(0,2);
const normalBrown = brownCards.map(i=>[Math.random(),i]).sort().slice(0,9);
const normalGreen = greenCards.map(i=>[Math.random(),i]).sort().slice(0,5);
const firstStageNormal = [normalBlue[0][1], normalBrown[0][1], normalGreen[0][1],  normalBrown[1][1]];
const secondStageNormal = [normalGreen[1][1], normalGreen[2][1], normalBrown[2][1], normalBrown[3][1], normalBrown[4][1], normalBlue[1][1]];
const thirdStageNormal = [normalGreen[3][1], normalGreen[4][1], normalBrown[5][1], normalBrown[6][1], normalBrown[7][1], normalBrown[8][1]];

const easyBlue = blueCards.filter((obj) => obj.difficulty !== 'hard').map(i=>[Math.random(),i]).sort().slice(0,2);
const easyBrown = brownCards.filter((obj) => obj.difficulty !== 'hard').map(i=>[Math.random(),i]).sort().slice(0,9);
const easyGreen = greenCards.filter((obj) => obj.difficulty !== 'hard').map(i=>[Math.random(),i]).sort().slice(0,5);
const firstStageEasy = [easyBlue[0][1], easyBrown[0][1], easyGreen[0][1],  easyBrown[1][1]];
const secondStageEasy = [easyGreen[1][1], easyGreen[2][1], easyBrown[2][1], easyBrown[3][1], easyBrown[4][1], easyBlue[1][1]];
const thirdStageEasy = [easyGreen[3][1], easyGreen[4][1], easyBrown[5][1], easyBrown[6][1], easyBrown[7][1], easyBrown[8][1]];

const hardBlue = blueCards.filter((obj) => obj.difficulty !== 'easy').map(i=>[Math.random(),i]).sort().slice(0,2);
const hardBrown = brownCards.filter((obj) => obj.difficulty !== 'easy').map(i=>[Math.random(),i]).sort().slice(0,9);
const hardGreen = greenCards.filter((obj) => obj.difficulty !== 'easy').map(i=>[Math.random(),i]).sort().slice(0,5);
const firstStageHard = [hardBlue[0][1], hardBrown[0][1], hardGreen[0][1],  hardBrown[1][1]];
const secondStageHard = [hardGreen[1][1], hardGreen[2][1], hardBrown[2][1], hardBrown[3][1], hardBrown[4][1], hardBlue[1][1]];
const thirdStageHard = [hardGreen[3][1], hardGreen[4][1], hardBrown[5][1], hardBrown[6][1], hardBrown[7][1], hardBrown[8][1]];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

shuffle(firstStageNormal);
shuffle(secondStageNormal);
shuffle(thirdStageNormal);

shuffle(firstStageEasy);
shuffle(secondStageEasy);
shuffle(thirdStageEasy);

shuffle(firstStageHard);
shuffle(secondStageHard);
shuffle(thirdStageHard);

function normalGame () {
    const gameNormal = [firstStageNormal, secondStageNormal, thirdStageNormal];
    game = gameNormal;
    normalLevel.classList.add('difficulty-toggle');
    easyLevel.classList.remove('difficulty-toggle');
    hardLevel.classList.remove('difficulty-toggle');
    index = 0;
}

function easyGame () {
const gameEasy = [firstStageEasy, secondStageEasy, thirdStageEasy];
game = gameEasy;
easyLevel.classList.add('difficulty-toggle');
normalLevel.classList.remove('difficulty-toggle');
hardLevel.classList.remove('difficulty-toggle');
index = 0;
}

function hardGame () {
const gameHard = [firstStageHard, secondStageHard, thirdStageHard];
game = gameHard;
hardLevel.classList.add('difficulty-toggle');
normalLevel.classList.remove('difficulty-toggle');
easyLevel.classList.remove('difficulty-toggle');
index = 0;
}

normalLevel.addEventListener('click', normalGame);
easyLevel.addEventListener('click', easyGame);
hardLevel.addEventListener('click', hardGame);

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
   