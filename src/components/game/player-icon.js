
const emojiIcon = [
    '😀',
    '😁',
    '😂',
    '🤣',
    '😉',
    '😎',
    '🤩',
    '👽',
    '🤓',
    '🤡'
]

const createPlayerIcon = (playerNum) => {
    let num = playerNum;
    let playerIconArr = [];
    while (num !== 0){
        playerIconArr.push(emojiIcon[Math.floor(Math.random()*10)]);
        num --;
    }
    return playerIconArr;
}

export {createPlayerIcon, emojiIcon};