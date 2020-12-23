// Select start button and store
var startBtn = $("#start");
var secondsLeft = 60
var secondsText = $('#secondsLeft')
var onQuestion = 0;
var quizTime;


var endGame = $("#end-game")
endGame.hide()

var questionsElement = $("#questions")
questionsElement.hide()

// Function for kicking off quiz
function startQuiz() {
  console.log("start quiz");
  var startScreen = $("#start-screen");
  startScreen.hide()

  //Unhide the questions 
  questionsElement.removeAttr("style")
  writeNextQuestion();
  $(".choice").on("click", onQuestionClick);
  setTime()
}

startBtn.on('click', startQuiz)

//Setting the timer
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    console.log(secondsLeft)
    $('#secondsLeft').html(secondsLeft)

    if (secondsLeft === 0) {

      clearInterval(timerInterval);
      endQuiz();

    }

  }, 1000);
}
//Adding text to the buttons
function writeQuestion(questions) {
  $("#card-title").html(questions.title);
  $("#button1").html(questions.choices[0]);
  $("#button2").html(questions.choices[1]);
  $("#button3").html(questions.choices[2]);
  $("#button4").html(questions.choices[3]);
}

//What happens when someone clicks an answer
function onQuestionClick(e) {
  console.log(e);
  var target = $(this);
  var answerClick = target.html();
  console.log(answerClick);
  var answer = questions[onQuestion].answer;
  if (answer != answerClick) {
    secondsLeft -= 5;
  }
  writeNextQuestion();
}
//moves onto the next question
function writeNextQuestion() {
  var question = questions[onQuestion]
  writeQuestion(question)
  onQuestion++
  if (onQuestion >= questions.length) {
    endQuiz();
  }
}

function endQuiz() {
  quizTime = secondsLeft;
  questionsElement.hide()
  endGame.removeAttr("style")
  $("#secondsLeft").attr("id", "quiz-time")
}

// what happens when you click view highscores
function highScoresBtn(e) {
  var value = $("#initials-here").val();
  var highScores = localStorage.getItem("high");
  localStorage.setItem("high", highscores + "," + value + ":" + quizTime);



}
$("#highscores").on("click", highScoresBtn);

