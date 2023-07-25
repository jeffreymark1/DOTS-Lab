/*
 * DOTS: Level One
 *
 */
let score = 0;

const ball = document.querySelector(".js-ball");
const scoreDisplay = document.querySelector(".js-score")
const levelWinner = document.querySelector(".level-winner");

ball.addEventListener('click', function() {
    if (scoreDisplay.innerText < 90) {
    scoreDisplay.innerText = score += 10;
    } else{
        scoreDisplay.innerText = "100";
        document.querySelector(".level-winner").style.opacity=100;
    }
    console.log("Ball Clicked");
});