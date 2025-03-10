const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load Images
const dogImg = new Image();
dogImg.src = "tesla_dog.png";  
const foodImg = new Image();
foodImg.src = "food.png";  
const carImg = new Image();
carImg.src = "tesla_car.png";  

let dog = { x: 350, y: 480, width: 100, height: 100, speed: 5 };
let food = { x: Math.random() * 700, y: Math.random() * 300, width: 40, height: 40, visible: false };
let car = { x: 340, y: 530, width: 120, height: 60, speed: 7 };

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(dogImg, dog.x, dog.y, dog.width, dog.height);
    ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
    
    if (food.visible) {
        ctx.drawImage(foodImg, food.x, food.y, food.width, food.height);
    }
}

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && dog.x > 0) dog.x -= dog.speed;
    if (event.key === "ArrowRight" && dog.x + dog.width < canvas.width) dog.x += dog.speed;
    if (event.key === "ArrowUp" && dog.y > 0) dog.y -= dog.speed;
    if (event.key === "ArrowDown" && dog.y + dog.height < canvas.height) dog.y += dog.speed;

    if (event.key === "a" && car.x > 0) car.x -= car.speed;
    if (event.key === "d" && car.x + car.width < canvas.width) car.x += car.speed;
});

// Feed the Dog
document.getElementById("feedBtn").addEventListener("click", () => {
    food.x = dog.x + 20;
    food.y = dog.y - 20;
    food.visible = true;

    setTimeout(() => {
        food.visible = false; 
    }, 2000);
});

function gameLoop() {
    drawGame();
    requestAnimationFrame(gameLoop);
}

gameLoop();

gameLoop();
