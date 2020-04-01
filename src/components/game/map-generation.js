// const template = {
//     top: 0,
//     left: 0,
//     elevation: 0,
//     effect: 'none'
// }
const defineNextPossibleMoves = (top, left) => {
    if (top > 0 && left > 0) {
        return [1, 2, 3, 4];
    } else if (top > 0) {
        return [1, 2, 3];
    } else if (left > 0) {
        return [2, 3, 4];
    } else {
        return [2, 3];
    }
};

const createMap = cellNum => {
    let board = [
        {
            top: Math.round((Math.random() * cellNum) / 2),
            left: Math.round((Math.random() * cellNum) / 2),
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
                cellToCreate--;
                break;
            case 2:
                left++;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 4);
                cellToCreate--;
                break;
            case 3:
                top++;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 1);
                cellToCreate--;
                break;
            case 4:
                left--;
                increaseEle();
                board.push({ top: top, left: left, elevation: elevation, effect: "none" });
                possibleMoves = defineNextPossibleMoves(top, left);
                possibleMoves = possibleMoves.filter(e => e !== 2);
                cellToCreate--;
                break;
            default:
                console.log("what");
                return;
        }
    }
    console.log(board);
    return board;
};

export default createMap;