function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                if (r < 2) {
                    context.fillStyle = "#ff471a";
                } else if (r < 4) {
                    context.fillStyle = "#0080ff";
                } else if (r < 6) {
                    context.fillStyle = "#ffff00";
                }
                else {
                    context.fillStyle = "#47d147";
                }
                context.fill();
                context.closePath();
            }
        }
    }
}