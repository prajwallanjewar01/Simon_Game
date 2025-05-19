let gameSeq = []
let userSeq = []
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Stated");
        started = true;
        // h2.innerText = `Game Started`;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log("randIdx : ",randIdx);
    // console.log("randBtn : ",randBtn);
    // console.log("randColor : ",randColor);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level : ", level);
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! <br> Your score was <b>${level}</b> <br> Press any Key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    // btnFlash(btn);
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1); 
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// Checking the random number generator
// for(let i =1; i<100; i++){
//     let randnumber = Math.floor(Math.random() * 4);
//     console.log(randnumber);
// }


function reset(){
    started == false;
    gameSeq = []; 
    userSeq = [];
    level = 0;
}