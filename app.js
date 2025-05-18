let gameSeq = []
let userSeq = []
let btns = ["color1", "color2", "color3", "color4"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Stated");
        started = true;
        h2.innerText = `Game Started`;
        levelUp()
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log("randIdx : ",randIdx);
    console.log("randBtn : ",randBtn);
    console.log("randColor : ",randColor);
    btnFlash(randBtn);
}