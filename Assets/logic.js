// Select start button and store
var startBtn = $("#start");

var questionsElement = $("#questions")
questionsElement.hide()

// Function for kicking off quiz
function startQuiz() {
    console.log("start quiz");
    var startScreen = $("#start-screen");
    startScreen.hide()

    //Unhide the questions 
    questionsElement.removeAttr("style")
}

startBtn.on('click', startQuiz)