// Select start button and store
var startBtn = document.getElementById("start");

var questionsElement = document.getElementById("questions");

// Call startQuiz function on button click;
startBtn.onclick = startQuiz;

// Function for kicking off quiz
function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");

    //Unhide the questions 
    questionsElement.removeAttribute("class");
}