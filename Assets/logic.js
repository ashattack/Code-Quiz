// Select start button and store
var startBtn = $("#start");
var secondsLeft = 60
var secondsText = $('#secondsLeft')

var questionsElement = $("#questions")
questionsElement.hide()

// Function for kicking off quiz
function startQuiz() {
    console.log("start quiz");
    var startScreen = $("#start-screen");
    startScreen.hide()

    //Unhide the questions 
    questionsElement.removeAttr("style")
    setTime()
}

startBtn.on('click', startQuiz)

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      console.log(secondsLeft)
      $('#secondsLeft').html(secondsLeft)
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }