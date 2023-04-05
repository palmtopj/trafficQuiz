// console.log("tacos");
var timerElement = document.querySelector(".timerCount");
var startQuizButton = document.querySelector("#startButton");

var root;
var timer;
var timerCount;

startQuizButton.addEventListener("click", startQuiz);

function introScreen() {
  var introEl = document.querySelector("#intro");
  questionCard.style.display = "none";
}

introScreen();

function startQuiz() {
  // do I need this? event.preventDefault();
  var introEl = document.querySelector("#intro");
  introEl.style.display = "none";
  questionCard.style.display = "block";
  timerCount = 20;
  console.log("startQuiz");
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
  console.log("QuizStarted");
}
