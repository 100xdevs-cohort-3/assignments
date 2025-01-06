import { quizData } from "./data.js";

let totalScore = 0;
const totalQuestion = quizData.length;

let currentQuestionIndex = 0;

function QuestionComponent(question) {
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question");

  const questionEl = document.createElement("h1");
  questionEl.innerHTML = question.question;

  const optionsContainer = document.createElement("div");

  for (let i of "abcd") {
    const optionEl = document.createElement("div");
    const labelEL = document.createElement("label");

    const option = document.createElement("input");
    option.type = "radio";
    option.checked = true;
    option.setAttribute("name", "options");
    option.setAttribute("id", question[i]);

    labelEL.innerHTML = question[i];
    labelEL.htmlFor = question[i];

    optionEl.appendChild(option);
    optionEl.appendChild(labelEL);

    optionsContainer.appendChild(optionEl);
  }

  const submitBtn = document.createElement("button");
  submitBtn.innerHTML = "Submit";
  submitBtn.onclick = () => {
    const options = document.querySelectorAll("input");
    options.forEach((option) => {
      if (option.checked && option.id === question[question.correct])
        totalScore++;
    });

    currentQuestionIndex++;
    render();
  };

  questionContainer.appendChild(questionEl);
  questionContainer.appendChild(optionsContainer);
  questionContainer.appendChild(submitBtn);

  return questionContainer;
}

function ResultComponent() {
  const resultContainer = document.createElement("div");
  resultContainer.setAttribute("id", "result");

  const headingEl = document.createElement("h1");
  headingEl.innerHTML = `You answered ${totalScore}/${totalQuestion} questions correctly.`;

  const reloadBtn = document.createElement("button");
  reloadBtn.innerHTML = "Reload";
  reloadBtn.onclick = () => {
    window.location.reload();
  };

  resultContainer.appendChild(headingEl);
  resultContainer.appendChild(reloadBtn);

  return resultContainer;
}

function render() {
  document.body.innerHTML = "";

  if (currentQuestionIndex === totalQuestion) {
    document.querySelector("body").appendChild(ResultComponent());
  } else {
    document
      .querySelector("body")
      .appendChild(QuestionComponent(quizData[currentQuestionIndex]));
  }
}

render();
