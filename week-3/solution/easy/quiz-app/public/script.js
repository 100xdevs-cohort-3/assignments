const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let quizData = [];
let selectedOption = null;
let userAnswers = []; // Track user's answers

// Fetch quiz data from the server
async function fetchQuizData() {
  const response = await fetch('/quiz-data');
  quizData = await response.json();
}

// Start the quiz
startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide');
  questionContainer.classList.remove('hide');
  backBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  showQuestion();
});

// Show the current question
function showQuestion() {
  if (quizData.length === 0) {
    questionElement.innerText = "No questions available.";
    optionsContainer.innerHTML = '';
    return;
  }

  const question = quizData[currentQuestionIndex];
  questionElement.innerText = question.question;
  optionsContainer.innerHTML = '';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => selectAnswer(option, button));
    optionsContainer.appendChild(button);
  });

  // Restore selected option
  selectedOption = userAnswers[currentQuestionIndex] || null;
  if (selectedOption) {
    const selectedButton = Array.from(optionsContainer.children).find(
      btn => btn.innerText === selectedOption
    );
    selectedButton.classList.add('selected');
  }

  // Disable "Back" button on the first question
  backBtn.disabled = currentQuestionIndex === 0;
}

// Handle answer selection and deselection
function selectAnswer(option, button) {
  if (selectedOption === option) {
    button.classList.remove('selected');
    selectedOption = null;
    userAnswers[currentQuestionIndex] = null; // Deselect the answer
  } else {
    if (selectedOption) {
      const previouslySelectedButton = Array.from(optionsContainer.children).find(
        btn => btn.innerText === selectedOption
      );
      previouslySelectedButton.classList.remove('selected');
    }
    button.classList.add('selected');
    selectedOption = option;
    userAnswers[currentQuestionIndex] = option; // Store the selected answer
  }
}

// Move to the next question
nextBtn.addEventListener('click', () => {
  if (selectedOption === null) {
    alert('Please select an option before proceeding!');
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    calculateScore(); // Recalculate score before ending the quiz
    endQuiz();
  }
});

// Move to the previous question
backBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

// Calculate the score
function calculateScore() {
  score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === quizData[index].answer) {
      score++;
    }
  });
}

// End the quiz and show the score
function endQuiz() {
  questionContainer.classList.add('hide');
  backBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  scoreElement.classList.remove('hide');
  scoreElement.innerText = `Your score: ${score} out of ${quizData.length}`;
}

// Initialize the app
fetchQuizData();