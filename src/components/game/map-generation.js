// const template = {
//     top: 0,
//     left: 0,
//     elevation: 0,
//     effect: 'none'
// }

//[1,2,3,4] means moving direction [up, right, down ,left];

//boarder 1024 x 673  //width:18, height: 11;

const maxWidth = 18;
const maxHeight = 11;
const chanceToGoStraight = 0.4;

const defineNextPossibleMoves = (top, left) => {
    if (top > 0 && top < 11 && left > 0 && left < 18) {
        return [1, 2, 3, 4];
    } else if (top > 0 && top < 11 && left < 18) {
        return [1, 2, 3];
    } else if (top < 11 && left > 0 && left < 18) {
        return [2, 3, 4];
    } else if (top > 0 && top < 11 && left > 0) {
        return [1, 3, 4];
    } else if (top > 0 && left > 0 && left < 18) {
        return [1, 2, 4];
    } else if (top > 0 && left < 18) {
        return [1, 2];
    } else if (top > 0 && left > 0 ) {
        return [1, 4];
    } else if (top < 11 && left > 0) {
        return [3, 4];
    } else if (top < 11 && left < 18) {
        return [2, 3];
    }
};

const createMap = cellNum => {
    let board = [
        {
            top: Math.round((Math.random() * maxHeight)),
            left: Math.round((Math.random() * maxWidth)),
            elevation: 0,
            effect: "none"
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
        let move =
            possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        switch (move) {
            case 1:
                top--;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 3);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight){
                    possibleMoves = [1];
                }
                cellToCreate--;
                break;
            case 2:
                left++;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 4);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight){
                    possibleMoves = [2];
                }
                cellToCreate--;
                break;
            case 3:
                top++;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 1);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight){
                    possibleMoves = [3];
                }
                cellToCreate--;
                break;
            case 4:
                left--;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 2);
                if (possibleMoves.length === 3 && Math.random() < chanceToGoStraight){
                    possibleMoves = [4];
                }
                cellToCreate--;
                break;
            default:
                console.log("what");
                return;
        }
    }
    return board;
};

export default createMap;