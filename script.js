let score = 0;
let timeLeft = 30;
let gameInterval;

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.top = `${Math.random() * (gameContainer.offsetHeight - 50)}px`;
    square.style.left = `${Math.random() * (gameContainer.offsetWidth - 50)}px`;
    gameContainer.appendChild(square);

    square.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        square.remove();
        createSquare();
    });
}

function startGame() {
    createSquare();
    gameInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = `Time: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert(`Game Over! Your score is ${score}.`);
        }
    }, 1000);
}

startGame();