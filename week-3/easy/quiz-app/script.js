const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
  const currentData = quizData[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${currentData.question}`;
  optionsEl.innerHTML = "";

  currentData.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(index, li));
    optionsEl.appendChild(li);
  });
}

function selectOption(index, li) {
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach(opt => opt.classList.remove("selected"));
  li.classList.add("selected");
  selectedOption = index;
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === null) {
    alert("Please select an option before proceeding!");
    return;
  }

  if (selectedOption === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  selectedOption = null;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = `You got ${score} out of ${quizData.length} correct! 🎉`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
