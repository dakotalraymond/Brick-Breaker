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
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}