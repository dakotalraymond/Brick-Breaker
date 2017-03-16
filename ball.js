function drawBall() {
    for (let i = 0; i < balls.length; i++) {
        context.beginPath();
        context.arc(balls[i].x, balls[i].y, ballRadius, 0, Math.PI*2);
        context.fillStyle = ballColor;
        context.fill();
        context.closePath();
    }
}