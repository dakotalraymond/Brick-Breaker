function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (gameRunning) {
        drawBall();
        drawPaddle();
        drawBricks();
        drawScore();
        drawParticles();
    } else if (displayCountdown) {
        writeCountdown();
    } else if (displayHighScore) {
        drawHighScores();
    } else if (displayCredits) {
        drawCredits();
    } else if (displayMainMenu) {
        drawMainMenu();
    } else if (displayPauseMenu) {
        drawBall();
        drawPaddle();
        drawBricks();
        drawScore();
        drawPauseMenu();
    }
}

function gameLoop() {
    render();
    update();
    requestAnimationFrame(gameLoop);
}

function updateBalls() {
    collisionDetection();
    for (let i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].ballXSpeed;
        balls[i].y += balls[i].ballYSpeed;
        if(balls[i].x + balls[i].ballXSpeed > canvas.width-ballRadius || balls[i].x + balls[i].ballXSpeed < ballRadius) {
            balls[i].ballXSpeed = -balls[i].ballXSpeed;
        }
        if (balls[i].y + balls[i].ballYSpeed < ballRadius) {
            balls[i].ballYSpeed = -balls[i].ballYSpeed;
        }
        if(balls[i].y + balls[i].ballYSpeed > canvas.height-ballRadius) {
            //Game Over
            balls.splice(i, 1);
            bricksRemoved = 0;
        }
    }
    if (balls.length == 0) {
        if (playerBalls > 0) {
            playerBalls = playerBalls - 1;
            gameRunning = false;
            ball1.x = canvas.width/2;
            ball1.y = canvas.height - 100;
            ball1.ballXSpeed = 5;
            ball1.ballYSpeed = -5;
            paddleX = (canvas.width-paddleWidth)/2;
            balls.push(ball1);
            startBall();
        } else {
            var playerName = prompt("Congrats! Please enter your name for the high score board!", "Player 1");
            gameRunning = false;
            updateHighScores(playerScore, playerName);
            displayHighScore = true;
        }
    }
}

function update() {
    if (gameRunning) {
        updateBalls();
        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += paddleSpeed;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= paddleSpeed;
        }
        for (var i = 0; i < particles.length; i++) {
            if (particles[i].lifetime > 0) {
                particles[i].Update();
            } else {
                particles.splice(i, 1);
            }
        }
    }
}

function writeCountdown() {
    if (countdown < 1) {
        clearInterval(countdownInterval);
        displayCountdown = false;
        gameRunning = true;
    } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();
        drawBricks();
        drawScore();
        context.font = "100px Arial";
        context.fillStyle = "#fff";
        context.fillText(countdown,canvas.width/2-25,canvas.height/2-25);
    }
}

function drawScore() {
    context.font = "30px Arial";
    context.fillStyle = "#fff";
    context.fillText(playerScore,canvas.width - 100,canvas.height - 20);
    if (playerBalls == 2) {
        context.beginPath();
        context.rect(canvas.width - 150, 15, 60, 10);
        context.fillStyle = "#ff8000";
        context.fill();
        context.closePath();
    }
    if (playerBalls >= 1) {
        context.beginPath();
        context.rect(canvas.width - 70, 15, 60, 10);
        context.fillStyle = "#ff8000";
        context.fill();
        context.closePath();
    }
}

function decreaseCountdown() {
    countdown = countdown-1;
}

function startBall() {
    displayCountdown = true;
    countdown = 3;
    countdownInterval = setInterval(decreaseCountdown, 1000);
    if (paddleHalved) {
        paddleWidth = paddleWidth*2;
        paddleHalved = false;
    }
}

function initializeGame() {
    displayMainMenu = false;
    displayCountdown = true;
    paddleX = (canvas.width-paddleWidth)/2;
    balls = [];
    ball1 = {};
    ball1.x = canvas.width/2;
    ball1.y = canvas.height - 100;
    ball1.ballXSpeed = 5;
    ball1.ballYSpeed = -5;
    balls.push(ball1);
    paddleWidth = 150;
    rightPressed = false;
    leftPressed = false;
    bricks = [];
    paddleHalved = false;
    playerBalls = 2;
    playerScore = 0;
    extraBallScore = 0;
    bricksRemoved = 0;
    mainMenuSelection = "new";
    for(c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }
    countdown = 3;
    countdownInterval = setInterval(decreaseCountdown, 1000);
    if (paddleHalved) {
        paddleWidth = paddleWidth*2;
        paddleHalved = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

displayMainMenu = true;
gameLoop();