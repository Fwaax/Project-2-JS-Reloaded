const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')
let circleTurn


startGame()

restartButton.addEventListener('click', startGame)

//Allows to click once per cell
function startGame() {
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    if (circleTurn === true) {
        currentClass = CIRCLE_CLASS
    }
    else {
        currentClass = X_CLASS
    }
    //// Here question
    // if (checkWin(CIRCLE_CLASS) || checkWin(X_CLASS)) {
    //     console.log('Game Over');
    //     return
    // }
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false);
        // console.log('winner');
    }
    else if (isDraw()) {
        endGame(true);
    }
    else {
        swapTurns()
        setBoardHoverClass()
    }


}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    }
    else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
    circleTurn = false;
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    }
    else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}