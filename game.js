/* game.js */
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load Images
const dogImg = new Image();
dogImg.src = "tesla_dog.png";
const ballImg = new Image();
ballImg.src = "ball.png";
const carImg = new Image();
carImg.src = "tesla_car.png";

let dog = { x: 350, y: 480, width: 100, height: 100, speed: 5 };
let ball = { x: Math.random() * 750, y: Math.random() * 300, width: 30, height: 30 };
let car = { x: 340, y: 530, width: 120, height: 60, speed: 7 };

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(dogImg, dog.x, dog.y, dog.width, dog.height);
    ctx.drawImage(ballImg, ball.x, ball.y, ball.width, ball.height);
    ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
}

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && dog.x > 0) dog.x -= dog.speed;
    if (event.key === "ArrowRight" && dog.x + dog.width < canvas.width) dog.x += dog.speed;
    if (event.key === "a" && car.x > 0) car.x -= car.speed;
    if (event.key === "d" && car.x + car.width < canvas.width) car.x += car.speed;
});

function gameLoop() {
    drawGame();
    requestAnimationFrame(gameLoop);
}

gameLoop();