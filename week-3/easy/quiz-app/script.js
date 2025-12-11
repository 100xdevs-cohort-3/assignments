import { quizData } from "./data.js";

let score = 0;

function startQuiz() {
  score = 0;
  render(0);
}

function submitAnswer(i) {
  calculateScore(document.getElementById(quizData[i].correct).checked)
  i = i + 1;
  if (i == quizData.length) {
    document.querySelector("#quiz-list").innerHTML = "Your final score is " + score + " out of " + quizData.length;
  }
  else 
    render(i) 
}

function calculateScore(i) {
  score = score + i;
  console.log("score")
  console.log(score)
}

function quizComponent(i) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const form = document.createElement("form");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const label3 = document.createElement("label");
  const label4 = document.createElement("label");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  const input4 = document.createElement("input");
  const button = document.createElement("button");
  h1.innerHTML = quizData[i].question;
  button.innerHTML = "Submit"
  button.type = "button";
  button.addEventListener("click", () => submitAnswer(i));

  input1.setAttribute("type", "radio")
  input1.setAttribute("name", "selection")
  input1.setAttribute("value", "a")
  input1.setAttribute("id", "a");

  input2.setAttribute("type", "radio")
  input2.setAttribute("name", "selection")
  input2.setAttribute("value", "b")
  input2.setAttribute("id", "b");

  input3.setAttribute("type", "radio")
  input3.setAttribute("name", "selection")
  input3.setAttribute("value", "c")
  input3.setAttribute("id", "c");

  input4.setAttribute("type", "radio")
  input4.setAttribute("name", "selection")
  input4.setAttribute("value", "d")
  input4.setAttribute("id", "d");

  label1.setAttribute("for", "a")
  label2.setAttribute("for", "b")
  label3.setAttribute("for", "c")
  label4.setAttribute("for", "d")

  div.appendChild(h1)
  label1.innerHTML = quizData[i].a;
  label2.innerHTML = quizData[i].b;
  label3.innerHTML = quizData[i].c;
  label4.innerHTML = quizData[i].d;
  label1.appendChild(input1)
  label2.appendChild(input2)
  label3.appendChild(input3)
  label4.appendChild(input4)
  form.appendChild(label1)
  form.appendChild(document.createElement("br"))
  form.appendChild(label2)
  form.appendChild(document.createElement("br"))
  form.appendChild(label3)
  form.appendChild(document.createElement("br"))
  form.appendChild(label4)
  form.appendChild(document.createElement("br"))
  form.appendChild(button)
  div.appendChild(form)
  return div

}

// react
function render(i) {
  document.querySelector("#quiz-list").innerHTML = ""
  document.querySelector("#quiz-list").appendChild(quizComponent(i))
}

// Attach event listener in JavaScript (module-safe)
document.getElementById("start-btn").addEventListener("click", startQuiz);