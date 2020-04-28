import { effects } from '../../assets/emoji/effects';


// define effect generation probability
const buildingProb = 0.1;
const foodProb = 0.2;
const animalProb = 0.2;
const weatherProb = 0.04;
const transportProb = 0.15;

// sum of weights must be <= 1;
const weights = [buildingProb, foodProb, animalProb, weatherProb, transportProb];
const correspondingResult = ['buildings', 'foods', 'animals', 'weather', 'transportation'];

const getRandomEffect = () => {
    let randomNum = Math.random();
    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
        if (weights[i] === 0) {
            continue;
        }
        sum += weights[i];
        if (randomNum < sum) {
            let keyArray = Object.keys(effects[correspondingResult[i]]);
            let randomEffect = keyArray[Math.floor(Math.random() * keyArray.length)]
            return {effectCategory: correspondingResult[i], effect: randomEffect};
        }
    }
    return {effectCategory: 'none', effect: 'none'};
}

//[1,2,3,4] means moving direction [up, right, down ,left];

//board size 1024 x 673  //width:17, height: 10; prevent screen border rendering

const maxWidth = 18;
const maxHeight = 11;
const chanceToGoStraight = 0.4;

const defineNextPossibleMoves = (top, left) => {
    if (top > 1 && top < maxHeight && left > 1 && left < maxWidth) {
        return [1, 2, 3, 4];
    } else if (top > 1 && top < maxHeight && left < maxWidth) {
        return [1, 2, 3];
    } else if (top < maxHeight && left > 1 && left < maxWidth) {
        return [2, 3, 4];
    } else if (top > 1 && top < maxHeight && left > 1) {
        return [1, 3, 4];
    } else if (top > 1 && left > 1 && left < maxWidth) {
        return [1, 2, 4];
    } else if (top > 1 && left < maxWidth) {
        return [1, 2];
    } else if (top > 1 && left > 1) {
        return [1, 4];
    } else if (top < maxHeight && left > 1) {
        return [3, 4];
    } else if (top < maxHeight && left < maxWidth) {
        return [2, 3];
    }
};

const createMap = cellNum => {
    let board = [
        {
            top: Math.round((Math.random() * maxHeight)),
            left: Math.round((Math.random() * maxWidth)),
            elevation: 0,
            effectCategory:'buildings',
            effect: "home",
        }
    ];
    let top = board[0].top;
    let left = board[0].left;
    let elevation = 0;
    let possibleMoves = defineNextPossibleMoves(top, left);
    let cellToCreate = cellNum - 1;

    const increaseEle = (e) => {
        if (board.filter((e) => e.top === top && e.left === left && e.elevation === elevation).length !== 0) {
            elevation++;
        };
    }

    while (cellToCreate !== 0) {
        let move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        switch (move) {
            case 1:
                top--;
                increaseEle();
                if (cellToCreate === 1) {
                    board.push({ top: top, left: left, elevation: elevation, effectCategory:'none', effect: 'none' });
                    cellToCreate--;
                    break;
                }
                board.push({ top: top, left: left, elevation: elevation, ...getRandomEffect() });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 3);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight) {
                    possibleMoves = [1];
                }
                cellToCreate--;
                break;
            case 2:
                left++;
                increaseEle();
                if (cellToCreate === 1) {
                    board.push({ top: top, left: left, elevation: elevation, effectCategory:'none', effect: 'none' });
                    cellToCreate--;
                    break;
                }
                board.push({ top: top, left: left, elevation: elevation, ...getRandomEffect() });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 4);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight) {
                    possibleMoves = [2];
                }
                cellToCreate--;
                break;
            case 3:
                top++;
                increaseEle();
                if (cellToCreate === 1) {
                    board.push({ top: top, left: left, elevation: elevation, effectCategory:'none', effect: 'none' });
                    cellToCreate--;
                    break;
                }
                board.push({ top: top, left: left, elevation: elevation, ...getRandomEffect() });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 1);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight) {
                    possibleMoves = [3];
                }
                cellToCreate--;
                break;
            case 4:
                left--;
                increaseEle();
                if (cellToCreate === 1) {
                    board.push({ top: top, left: left, elevation: elevation, effectCategory:'none', effect: 'none' });
                    cellToCreate--;
                    break;
                }
                board.push({ top: top, left: left, elevation: elevation, ...getRandomEffect() });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 2);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight) {
                    possibleMoves = [4];
                }
                cellToCreate--;
                break;
            default:
                console.log("map-generation failed");
                return;
        }
    }
    return board;
};

export default createMap;