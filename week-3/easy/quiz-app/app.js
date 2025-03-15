import { quizData } from "./data.js";
const quizContainer = document.querySelector(".quiz-container");

let score = 0;
let i = 0;

function loadQuestion() {
  if (i >= quizData.length) {
    quizContainer.innerHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`;
    return;
  }

  let questionData = quizData[i];
  const correctOption = quizData[i]["correct"];
  const correctAnswer = questionData[correctOption];

  quizContainer.innerHTML = `
    <div>
      <p>${questionData.question}</p>
      <button class='btn'>${questionData.a}</button> 
      <button class='btn'>${questionData.b}</button> 
      <button class='btn'>${questionData.c}</button> 
      <button class='btn'>${questionData.d}</button>
      <button id='nextBtn'>${
        i === quizData.length - 1 ? "Submit" : "Next"
      }</button>
    </div>
  `;

  // Handle button clicks
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      if (button.innerHTML === correctAnswer) {
        score++;
      }
      document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = true));
    });
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    i++;
    loadQuestion();
  });
}

// Load the first question
loadQuestion();
