function drawPaddle() {
    context.beginPath();
    context.rect(paddleX, canvas.height-paddleHeight-paddlePad, paddleWidth, paddleHeight);
    context.fillStyle = "#ff8000";
    context.fill();
    context.closePath();
}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    console.log(e.keyCode);
    if (e.keyCode == 38 && displayMainMenu) {
        mainMenuUp();
    }
    if (e.keyCode == 40 && displayMainMenu) {
        mainMenuDown();
    }
    if (e.keyCode == 13 && displayMainMenu) {
        mainMenuSelect();
    }
    if (e.keyCode == 27 && displayCredits) {
        displayCredits = false;
        displayMainMenu = true;
    }
    if (e.keyCode == 27 && displayHighScore) {
        displayHighScore = false;
        displayMainMenu = true;
    }
    if (e.keyCode == 27 && gameRunning) {
        console.log("here");
        gameRunning = false;
        displayPauseMenu = true;
    } else if (e.keyCode == 27 && displayPauseMenu) {
         console.log("hereagain");
        displayPauseMenu = false;
        displayMainMenu = true;
    }
    if (e.keyCode == 13 && displayPauseMenu) {
        displayPauseMenu = false;
        gameRunning = true;
    }
    if (e.keyCode == 8 && displayHighScore) {
        clearHighScores();
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}