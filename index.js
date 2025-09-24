import {modalGame, openModal} from "./modalGame.js";
import {modalGameState, modalState, secret} from "./state.js";
import {secretModal} from "./secretGame.js";


const board = document.getElementById('board');
const context = board.getContext('2d');


const blockSize = 50;
const gridWidth = 25;
const gridHeight = 13

board.width = gridWidth * blockSize;
board.height = gridHeight * blockSize;

let backgroundImg = new Image();
backgroundImg.src = "img/backgrounds/overlay.png";
backgroundImg.onload = function () {
    drawScene();
};

let backgroundImgSecret = new Image();
backgroundImgSecret.src = "img/backgrounds/overlay-secret.png";
backgroundImgSecret.onload = function () {
    drawScene();
};

let ruslanImg = new Image();
ruslanImg.src = "img/sprites/ruslan/test1.jpg";
ruslanImg.onload = function () {
    drawScene();
};

export let boxClose = new Image();
boxClose.src = "img/sprites/box/chest-close.png";
boxClose.onload = function () {
    drawScene();
};

export let boxOpen = new Image();
boxOpen.src = "img/sprites/box/chest-open.png";
boxOpen.onload = function () {
    drawScene();
}


const boxes = [
    {x: 5, y: 2, name: 'box1'},
    {x: 10, y: 10, name: 'box2'},
    {x: 17, y: 3, name: 'box3'},
];

const ruslan = {x: 10, y: 5};


document.addEventListener('keyup', (event) => {

    if (modalState.instructions === false || modalState.box1 || modalState.box2 || modalState.box3) {
        return
    }

    let newX = ruslan.x
    let newY = ruslan.y

    if (event.key === 'ArrowDown') newY += 1
    if (event.key === 'ArrowUp') newY -= 1
    if (event.key === 'ArrowLeft') newX -= 1
    if (event.key === 'ArrowRight') newX += 1

    if (newX < 0 || newY < 0 || newX >= gridWidth || newY >= gridHeight) {
        return
    }

    if (!isColliding(newX, newY)) {
        ruslan.x = newX
        ruslan.y = newY
    }


    if (secret.secret) {
        drawSecret()
    } else {
        drawScene()
    }


    if (event.key === 'E' || event.key === 'e' || event.key === 'у' || event.key === 'У') {

        const nearbyBox = getNearbyBox(newX, newY)

        if (nearbyBox.isNearby) {

            if (nearbyBox.box.name === 'box1') {
                openModal(nearbyBox.box)
                modalGame(nearbyBox.box)
            } else if (nearbyBox.box.name === 'box2' && modalGameState.box1) {
                openModal(nearbyBox.box)
                modalGame(nearbyBox.box)
            } else if (nearbyBox.box.name === 'box3' && modalGameState.box2) {
                openModal(nearbyBox.box)
                modalGame(nearbyBox.box)
            }

            if (nearbyBox.box.name === 'secret') {
                secretModal()
            }
        }


        if (newX === secret.coordinates.x && newY === secret.coordinates.y) {
            secret.secret = true
            drawSecret()
        }

        if (newX === secret.exit.x && newY === secret.exit.y) {
            secret.secret = false
            drawScene()
        }

    }
})


function instructionsModal() {
    if (modalState.instructions === true) {
        return
    }

    const instructions = document.getElementById('instructions')
    const overlay = document.getElementById('overlay')
    const closeButton = instructions.querySelector('.close')

    closeButton.addEventListener('click', () => {
        instructions.classList.add('hidden')
        overlay.classList.add('hidden')
        modalState.instructions = true
    })
}


function getNearbyBox(x, y) {
    let box = boxes.find(box => (
            (x - box.x === 1 || x - box.x === -1) && y - box.y === 0)
        ||
        ((y - box.y === 1 || y - box.y === -1) && x - box.x === 0)
    );

    if (box) {
        return {isNearby: true, box}
    }

    if (secret.secret) {
        let secretBox = secret.secretBox

        if (
            ((x - secretBox.x === 1 || x - secretBox.x === -1) && y - secretBox.y === 0)
            ||
            ((y - secretBox.y === 1 || y - secretBox.y === -1) && x - secretBox.x === 0)) {

            return {isNearby: true, box: secretBox};
        }
    }

    return {isNearby: false, box: null}
}

function isColliding(x, y) {

    if (secret.secret && secret.secretBox.x === x && secret.secretBox.y === y) {
        return true
    }

    return boxes.some(box => box.x === x && box.y === y)
}


export function drawSecret() {

    const unlocked = true

    drawBackground()

    context.drawImage(boxOpen, secret.secretBox.x * blockSize, secret.secretBox.y * blockSize, blockSize, blockSize)

    drawRuslan()

}

function drawBackground() {
    if (secret.secret) {
        context.drawImage(backgroundImgSecret, 0, 0, board.width, board.height)
    } else {
        context.drawImage(backgroundImg, 0, 0, board.width, board.height)
    }
}

function drawBox(box) {

    const unlocked =
        (box.name === 'box1') ||
        (box.name === 'box2' && modalGameState.box1) ||
        (box.name === 'box3' && modalGameState.box2)

    if (unlocked) {
        context.drawImage(boxOpen, box.x * blockSize, box.y * blockSize, blockSize, blockSize)
    } else {
        context.drawImage(boxClose, box.x * blockSize, box.y * blockSize, blockSize, blockSize)
    }

}

function drawRuslan() {
    context.drawImage(ruslanImg, ruslan.x * blockSize, ruslan.y * blockSize, blockSize, blockSize)
}

export function drawScene() {
    drawBackground()
    boxes.forEach(drawBox)
    drawRuslan()
}

drawSecret()

if (secret.secret) {
    drawSecret()
} else {
    drawScene()
}

instructionsModal()