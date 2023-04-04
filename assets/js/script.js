console.log("tacos");
var timerElement = document.querySelector(".timerCount");
var startQuizButton = document.querySelector("#startButton");

var root;
var timer;
var timerCount;
// startQuizButton.addEventListener("click", function (event) {
//   console.log(event);
// });
startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
  timerCount = 20;
  console.log("startQuiz");
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
