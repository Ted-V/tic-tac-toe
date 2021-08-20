const gameBoard = (() => {
    const board = [[0,0,0], [0,0,0], [0,0,0]];
    return {board};
})();

const gameController = (() => {
    const turn = 0;
    function nextTurn() {
        turn++;
    }
    return { turn, nextTurn}

})

const player = (name, piece) => {
    return { name, piece};
};
