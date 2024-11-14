const body = document.body;

// function to create and append an element
function createElement(type, textContent = "", className = "") {
  const element = document.createElement(type);
  if (textContent) element.textContent = textContent;
  if (className) element.className = className;
  return element;
}

// function to render the quiz UI
function renderQuiz() {
  const quizContainer = createElement("div", "", "quiz-container");
  const title = createElement("h1", "Quiz Application");
  quizContainer.appendChild(title);

  quizData.forEach((item, index) => {
    const questionContainer = createElement("div", "", "question-container");
    const questionTitle = createElement("h2", `${index + 1}. ${item.question}`);
    questionContainer.appendChild(questionTitle);

    item.options.forEach((option) => {
      const label = createElement("label", option);
      const input = createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = option;
      label.prepend(input);
      questionContainer.appendChild(label);
    });

    quizContainer.appendChild(questionContainer);
  });

  // create Submit Button
  const submitButton = createElement("button", "Submit Quiz", "submit-button");
  submitButton.onclick = submitQuiz;
  quizContainer.appendChild(submitButton);

  // append quizContainer to body
  body.appendChild(quizContainer);
}

// function to calculate and display results
function submitQuiz() {
  let score = 0;

  quizData.forEach((item, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (selectedOption && selectedOption.value === item.answer) {
      score++;
    }
  });

  // display result
  displayResult(score);
}

// function to display the score after submission
function displayResult(score) {
  const resultContainer = createElement(
    "div",
    `You scored ${score} out of ${quizData.length}`,
    "result-container"
  );

  // Remove previous result if present
  const existingResult = document.querySelector(".result-container");
  if (existingResult) {
    existingResult.remove();
  }

  body.appendChild(resultContainer);
}

// Call renderQuiz to start the app
renderQuiz();
