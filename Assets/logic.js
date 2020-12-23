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
  writeQuestion(questions[0]);
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
    secondsLeft -= 10;
    $("#ans").html("WRONG!");
  } else {
    console.error("wtf")
    $("#ans").html("CORRECT!")
  }
  writeNextQuestion();
}
//moves onto the next question
function writeNextQuestion() {
  onQuestion++
  if (onQuestion >= questions.length) {
    endQuiz();
  }
  var question = questions[onQuestion]
  writeQuestion(question)
}

function endQuiz() {
  quizTime = secondsLeft;
  questionsElement.hide()
  endGame.removeAttr("style")
  $("#secondsLeft").attr("id", "quiz-time")
}

// what happens when you click view highscores
function highScoresBtn(e) {
  // get their initials
  var value = $("#initials-here").val();
  // get any previous high scores
  var highScores = localStorage.getItem("btx111");
  if (highScores) {
    // save the high scores in localstorage
    localStorage.setItem("btx111", highscores + "," + value + ":" + quizTime);
    return;
  }
  localStorage.setItem("btx111", value + ":" + quizTime);
}

$("#highscores").on("click", highScoresBtn);

