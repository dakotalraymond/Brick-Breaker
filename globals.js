var canvas = document.getElementById("gameScreen");
var context = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var balls = [];
var ball1 = {};
ball1.x = canvas.width/2;
ball1.y = canvas.height - 100;
ball1.ballXSpeed = 5;
ball1.ballYSpeed = -5;
balls.push(ball1);
var ballColor = "#ff8000";
var ballRadius = 5;
var paddleHeight = 20;
var paddlePad = 20;
var paddleSpeed = 7;
var paddleWidth = 150;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 8;
var brickColumnCount = 14;
var brickWidth = 62;
var brickHeight = 20;
var brickPadding = 5;
var brickOffsetTop = 20;
var brickOffsetLeft = 13;
var gameRunning = false;
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}