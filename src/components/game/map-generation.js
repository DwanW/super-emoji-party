import { effects } from '../../assests/emoji/effects';


// define effect generation probability
const buildingProb = 0.1;
const foodProb = 0.4;
const animalProb = 0.05;
const weatherProb = 0.1;
const transportProb = 0.01;

// sum of weights must be <= 1;
const weights = [buildingProb, foodProb, animalProb, weatherProb, transportProb];
const correspondingResult = ['buildings', 'foods', 'animals', 'weather', 'transportation'];

const getRandomEffect = () => {
    let randomNum = Math.random(),
        sum = 0,
        lastIndex = weights.length - 1;

    for (let i = 0; i < lastIndex; ++i) {
        if (weights[i] === 0) {
            continue;
        }
        sum += weights[i];
        if (randomNum < sum) {
            let keyArray = Object.keys(effects[correspondingResult[i]]);
            let randomEffect = keyArray[Math.floor(Math.random() * keyArray.length)]
            return {effectCategory: 'foods', effect: 'burger'};
        }
    }
    return {effectCategory: 'none', effect: 'none'};
}

//return {effectCategory: correspondingResult[i], effect: randomEffect};

// const template = {
//     top: 0,
//     left: 0,
//     elevation: 0,
//     effect: 'none'
// }

//[1,2,3,4] means moving direction [up, right, down ,left];

//boarder 1024 x 673  //width:17, height: 10;

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
    console.log(board);
    return board;
};

export default createMap;