function drawMainMenu() {
    if (mainMenuSelection == "new") {
        context.beginPath();
        context.rect(canvas.width/2-110, 165, 200, 50);
        context.fillStyle = "#ff8000";
        context.fill();
        context.closePath();
    } else if (mainMenuSelection == "high") {
        context.beginPath();
        context.rect(canvas.width/2-110, 265, 200, 50);
        context.fillStyle = "#ff8000";
        context.fill();
        context.closePath();
    } else {
        context.beginPath();
        context.rect(canvas.width/2-110, 365, 200, 50);
        context.fillStyle = "#ff8000";
        context.fill();
        context.closePath();
    }
    context.font = "60px Arial";
    context.fillStyle = "#fff";
    context.fillText("Brick Breaker Extraordinaire",120,100);
    context.font = "30px Arial";
    context.fillStyle = "#fff";
    context.fillText("New Game",canvas.width/2 - 82,200);
    context.fillText("High Scores",canvas.width/2 - 90,300);
    context.fillText("Credits",canvas.width/2 - 60,400);
}

function drawHighScores() {
    context.font = "40px Arial";
    context.fillStyle = "#fff";
    context.fillText("High Scores",370,100);
    context.font = "30px Arial";
    context.fillStyle = "#fff";
    context.fillText("1. " + localStorage.getItem("firstName") + " - " + localStorage.getItem("firstScore"),370,150);
    context.fillText("1. " + localStorage.getItem("secondName") + " - " + localStorage.getItem("secondScore"),370,200);
    context.fillText("1. " + localStorage.getItem("thirdName") + " - " + localStorage.getItem("thirdScore"),370,250);
    context.fillText("1. " + localStorage.getItem("fourthName") + " - " + localStorage.getItem("fourthScore"),370,300);
    context.fillText("1. " + localStorage.getItem("fifthName") + " - " + localStorage.getItem("fifthScore"),370,350);
    context.font = "15px Arial";
    context.fillStyle = "#fff";
    context.fillText("Press ESC to return to main menu, or Backspace/Delete to clear scores",250,500);
}

function drawPauseMenu() {
    context.font = "50px Arial";
    context.fillStyle = "#fff";
    context.fillText("Game Paused",320,300);
    context.font = "20px Arial";
    context.fillStyle = "#fff";
    context.fillText("Press ESC to return to Main Menu or Enter to resume playing",210,400);
}

function drawCredits() {
    context.font = "20px Arial";
    context.fillStyle = "#fff";
    context.fillText("All work done by Dakota Raymond, under the direction of Dean Mathias",160,200);
    context.font = "15px Arial";
    context.fillStyle = "#fff";
    context.fillText("Press ESC to return to main menu",370,500);
}

function mainMenuUp() {
    if (mainMenuSelection == "new") {
        mainMenuSelection = "credits";
    } else if (mainMenuSelection == "high") {
        mainMenuSelection = "new";
    } else {
        mainMenuSelection = "high";
    }
}

function mainMenuDown() {
    if (mainMenuSelection == "new") {
        mainMenuSelection = "high";
    } else if (mainMenuSelection == "high") {
        mainMenuSelection = "credits";
    } else {
        mainMenuSelection = "new";
    }
}

function mainMenuSelect() {
    if (mainMenuSelection == "new") {
        initializeGame();
    } else if (mainMenuSelection == "high") {
        displayMainMenu = false;
        displayHighScore = true;
    } else {
        displayMainMenu = false;
        displayCredits = true;
    }
}

function clearHighScores(){
    localStorage.removeItem("fifthScore");
    localStorage.removeItem("fourthScore");
    localStorage.removeItem("thirdScore");
    localStorage.removeItem("secondScore");
    localStorage.removeItem("firstScore");
    localStorage.removeItem("fifthName");
    localStorage.removeItem("fourthName");
    localStorage.removeItem("thirdName");
    localStorage.removeItem("secondName");
    localStorage.removeItem("firstName");
}

function updateHighScores(playerScore, playerName) {
    if (playerScore > localStorage.getItem("firstScore")) {
        localStorage.setItem("fifthScore", localStorage.getItem("fourthScore"));
        localStorage.setItem("fifthName", localStorage.getItem("fourthName"));
        localStorage.setItem("fourthScore", localStorage.getItem("thirdScore"));
        localStorage.setItem("fourthName", localStorage.getItem("thirdName"));
        localStorage.setItem("thirdScore", localStorage.getItem("secondScore"));
        localStorage.setItem("thirdName", localStorage.getItem("secondName"));
        localStorage.setItem("secondScore", localStorage.getItem("firstScore"));
        localStorage.setItem("secondName", localStorage.getItem("firstName"));
        localStorage.setItem("firstScore", playerScore);
        localStorage.setItem("firstName", playerName);
    } else if (playerScore > localStorage.getItem("secondScore")) {
        localStorage.setItem("fifthScore", localStorage.getItem("fourthScore"));
        localStorage.setItem("fifthName", localStorage.getItem("fourthName"));
        localStorage.setItem("fourthScore", localStorage.getItem("thirdScore"));
        localStorage.setItem("fourthName", localStorage.getItem("thirdName"));
        localStorage.setItem("thirdScore", localStorage.getItem("secondScore"));
        localStorage.setItem("thirdName", localStorage.getItem("secondName"));
        localStorage.setItem("secondScore", playerScore);
        localStorage.setItem("secondName", playerName);
    } else if (playerScore > localStorage.getItem("thirdScore")) {
        localStorage.setItem("fifthScore", localStorage.getItem("fourthScore"));
        localStorage.setItem("fifthName", localStorage.getItem("fourthName"));
        localStorage.setItem("fourthScore", localStorage.getItem("thirdScore"));
        localStorage.setItem("fourthName", localStorage.getItem("thirdName"));
        localStorage.setItem("thirdScore", playerScore);
        localStorage.setItem("thirdName", playerName);
    } else if (playerScore > localStorage.getItem("fourthScore")) {
        localStorage.setItem("fifthScore", localStorage.getItem("fourthScore"));
        localStorage.setItem("fifthName", localStorage.getItem("fourthName"));
        localStorage.setItem("fourthScore", playerScore);
        localStorage.setItem("fourthName", playerName);
    } else if (playerScore > localStorage.getItem("fifthScore")) {
        localStorage.setItem("fifthScore", playerScore);
        localStorage.setItem("fifthName", playerName);
    }
}