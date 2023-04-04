console.log("tacos");
var startQuizButton = document.querySelector("#startButton");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;

function startQuiz() {
  startTimer();
}

startQuizButton.addEventListener("click", function (event) {
  console.log(event);
});
