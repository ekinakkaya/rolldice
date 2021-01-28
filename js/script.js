const rollButton = document.querySelector(".rollbutton");
const dice = document.querySelector(".dice");

const containerDot = dice.querySelector(".container__dot");
const dots = dice.querySelectorAll(".dot");

const diceFaces = 6;

let lastRotationFactor = randomNumber(4);

rollButton.addEventListener("click", () => {
    rollDice(dice, diceFaces);
});

containerDot.addEventListener("click", () => {
    rollDice(dice, diceFaces);
});

document.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
        rollDice(dice, diceFaces);
    }
});

rollDice(dice, diceFaces);

/* returns a number from 1 to max (1 and max included)*/
function randomNumber(max) {
    return Math.floor(Math.random() * (max)) + 1;
}

function rollDice(dice, facenum) {
    let rn = randomNumber(4);
    while (rn === lastRotationFactor || (rn === 1 && lastRotationFactor === 4)) {
        rn = randomNumber(4);
    }
    lastRotationFactor = rn;

    dice.style.transform = `rotate(${90 * rn}deg)`;

    let num = randomNumber(facenum);
    let dots = dice.querySelectorAll(".dot");
    hideDots(dots, facenum - num);
}

function hideDots(dots, n) {
    resetDots(dots);
    for (let i = 0; i < n; i++) {
        dots[i].classList.add("hidden");
    }
}

function resetDots(dots) {
    for (dot of dots) {
        dot.classList.remove("hidden");
    }
}