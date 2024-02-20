let roundCount;
let clickSequence = [];
let playerSequence = [];
let clickOrder;


let startScreen = document.getElementById('btnDiv')
const cRed = document.querySelector('red');
const cGreen = document.querySelector('green');
const cYellow = document.querySelector('yellow');
const cBlue = document.querySelector('blue');
const delay = 1000
let clickAllow = true

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function gameStart() {
    roundCount = 0;
    clickSequence = [];
    startScreen.style.display = 'none' // <--------------------
    rounds();
}

async function rounds() {

    clickSequence.push(Math.floor(Math.random() * 4))
    console.log(clickSequence);
    let glowSequence = [clickSequence]
    clickOrder = [];

    roundCount++;

    await glowEffect(clickSequence);
}

async function glowEffect(glowSequence) {
    console.log(`False text: ${clickAllow}`);
    clickAllow = false
    for (let i = 0; i < glowSequence.length; i++) {
        const divNumber = glowSequence[i]

        let div = null
        if (divNumber == 0) {
            div = document.getElementById('colorDiv red')
        }
        if (divNumber == 1) {
            div = document.getElementById('colorDiv green')
        }
        if (divNumber == 2) {
            div = document.getElementById('colorDiv yellow')
        }
        if (divNumber == 3) {
            div = document.getElementById('colorDiv blue')
        }

        div.classList.add('glow')
        await sleep(delay)
        div.classList.remove('glow')
        await sleep(delay * 0.5)
    }
    console.log(`Some Text`);
    clickAllow = true;
}

function check(x) {
    if (!clickAllow) {
        return
    }

    console.log(x);
    userArrayBuild(x);
}

function userArrayBuild(y) {
    let i;

    switch (y) {
        case 0: clickOrder.push(0);
            break;
        case 1: clickOrder.push(1);
            break;
        case 2: clickOrder.push(2);
            break;
        case 3: clickOrder.push(3);
            break;
        default:
    }
    ryansvesion();
}

function ryansvesion() {
    console.log(`roundCount: ${roundCount}`);
    console.log(clickSequence, clickOrder);

    if (clickSequence[clickOrder.length - 1] == clickOrder[clickOrder.length - 1]) { }
    else {
        console.log(`Game Over!`);
        startScreen.style.display = 'flex';
        startScreen.style.alignItems = 'center';
        startScreen.style.justifyContent = 'center';
        roundCount = roundCount - 1;
        document.getElementById('scoreboard').innerHTML = `Game Over score: ${roundCount}` //---------------------------
        return;
    }
    if (clickSequence.length == clickOrder.length) {
        rounds();
    }
    console.log(clickOrder);
}

document.getElementById('start').addEventListener('click', gameStart)