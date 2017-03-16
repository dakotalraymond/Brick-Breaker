function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            for (let i = 0; i < balls.length; i++){
                let x = balls[i].x - ballRadius;
                let y = balls[i].y - ballRadius;
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        balls[i].ballYSpeed = balls[i].ballYSpeed * 1.01;
                        balls[i].ballXSpeed = balls[i].ballXSpeed * 1.01;
                        paddleSpeed = paddleSpeed * 1.01;
                        balls[i].ballYSpeed = -balls[i].ballYSpeed;
                        //ballColor = getRandomColor();
                        b.status = 0;
                    }
                }
            }
        }
    }
    for (let i = 0; i < balls.length; i++) {
        if(balls[i].y + balls[i].ballYSpeed > canvas.height-ballRadius-paddleHeight-paddlePad && 
            balls[i].x + balls[i].ballXSpeed > paddleX && 
            balls[i].x + balls[i].ballXSpeed < paddleX + paddleWidth) 
        {
            balls[i].ballXSpeed = (balls[i].x - (paddleX + (paddleWidth/2)))/(paddleWidth/2)*5;
            balls[i].ballYSpeed = -balls[i].ballYSpeed;
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}