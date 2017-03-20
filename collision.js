function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            for (let i = 0; i < balls.length; i++){
                let x = balls[i].x - ballRadius;
                let y = balls[i].y - ballRadius;
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        balls[i].ballYSpeed = -balls[i].ballYSpeed;
                        let rowCleared = true;
                        b.status = 0;
                        for (let x = 0; x < brickColumnCount; x++) {
                            if (bricks[x][r].status == 1) {
                                rowCleared = false;
                            }
                        }
                        if (rowCleared) {
                            playerScore += 25;
                        }
                        let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                        let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                        let color = "#fff";
                        if (r < 2) {
                            color = "#47d147";
                        } else if (r < 4) {
                            color = "#0080ff";
                        } else if (r < 6) {
                            color = "#ff471a";
                        } else {
                            color = "#ffff00";
                        }
                        createParticles(brickX, brickY, color);
                        if (r == 0) {
                            if (!paddleHalved) {
                                paddleWidth = paddleWidth/2;
                                paddleHalved = true;
                            }
                            playerScore += 5;
                        } else if (r < 2) {
                            playerScore += 5;
                        } else if (r < 4) {
                            playerScore += 3;
                        } else if (r < 6) {
                            playerScore += 2;
                        } else {
                            playerScore += 1;
                        }
                        bricksRemoved += 1;
                        if (bricksRemoved == 4) {
                            balls[i].ballYSpeed = balls[i].ballYSpeed * 1.20;
                            balls[i].ballXSpeed = balls[i].ballXSpeed * 1.20;
                        } else if (bricksRemoved == 12) {
                            balls[i].ballYSpeed = balls[i].ballYSpeed * 1.20;
                            balls[i].ballXSpeed = balls[i].ballXSpeed * 1.20;
                        } else if (bricksRemoved == 36) {
                            balls[i].ballYSpeed = balls[i].ballYSpeed * 1.20;
                            balls[i].ballXSpeed = balls[i].ballXSpeed * 1.20;
                        } else if (bricksRemoved == 62) {
                            balls[i].ballYSpeed = balls[i].ballYSpeed * 1.20;
                            balls[i].ballXSpeed = balls[i].ballXSpeed * 1.20;
                        }
                    }
                }
            }
        }
        if (playerScore - extraBallScore >= 100) {
            extraBallScore = playerScore;
            var ball2 = {};
            ball2.x = canvas.width/2;
            ball2.y = canvas.height - 100;
            ball2.ballXSpeed = 5;
            ball2.ballYSpeed = -5;
            balls.push(ball2);
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