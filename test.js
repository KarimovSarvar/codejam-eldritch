const hardBlue = blueCards.filter((obj) => obj.difficulty !== 'easy').map(i=>[Math.random(),i]).sort().slice(0,2);
const hardBrown = brownCards.filter((obj) => obj.difficulty !== 'easy').map(i=>[Math.random(),i]).sort().slice(0,9);
const hardGreen = greenCards.filter((obj) => obj.difficulty !== 'easy').map(i=>[Math.random(),i]).sort().slice(0,5);
const firstStageHard = [hardBlue[0][1], hardBrown[0][1], hardGreen[0][1],  hardBrown[1][1]];
const secondStageHard = [hardGreen[1][1], hardGreen[2][1], hardBrown[2][1], hardBrown[3][1], hardBrown[4][1], hardBlue[1][1]];
const thirdStageHard = [hardGreen[3][1], hardGreen[4][1], hardBrown[5][1], hardBrown[6][1], hardBrown[7][1], hardBrown[8][1]];