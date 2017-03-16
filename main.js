function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();
    update();
    requestAnimationFrame(render);
}

function updateBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].ballXSpeed;
        balls[i].y += balls[i].ballYSpeed;
        if(balls[i].x + balls[i].ballXSpeed > canvas.width-ballRadius || balls[i].x + balls[i].ballXSpeed < ballRadius) {
            balls[i].ballXSpeed = -balls[i].ballXSpeed;
        }
        if(balls[i].y + balls[i].ballYSpeed > canvas.height-ballRadius) {
            alert("Game Over");
            balls[i].ballXSpeed = 0;
            balls[i].ballYSpeed = 0;
        }
        if (balls[i].y + balls[i].ballYSpeed < ballRadius) {
            balls[i].ballYSpeed = -balls[i].ballYSpeed;
        }
    }
}

function update() {
    updateBalls();
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += paddleSpeed;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= paddleSpeed;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

render();