//  use this quizData in your app.
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  // you can add more quiz here
];

let index = 0;
let correctAns = 0;

function createOptions(index) {
  let optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  let item1 = document.createElement("div");
  item1.className = "item";
  item1.innerHTML =
    "<input type=radio name='options' value='a'>" + quizData[index].a;
  optionsDiv.appendChild(item1);

  let item2 = document.createElement("div");
  item2.className = "item";
  item2.innerHTML =
    "<input type=radio name='options' value='b'>" + quizData[index].b;
  optionsDiv.appendChild(item2);

  let item3 = document.createElement("div");
  item3.className = "item";
  item3.innerHTML =
    "<input type=radio name='options' value='c'>" + quizData[index].c;
  optionsDiv.appendChild(item3);

  let item4 = document.createElement("div");
  item4.className = "item";
  item4.innerHTML =
    "<input type=radio name='options' value='d'>" + quizData[index].d;
  optionsDiv.appendChild(item4);

  return optionsDiv;
}

function showResults() {
  let parent = document.getElementsByClassName("container")[0];
  let child = document.getElementsByClassName("content")[0];
  parent.removeChild(child);

  let contentDiv = document.createElement("div");
  contentDiv.className = "content";

  let h2 = document.createElement("h2");
  h2.className = "question";
  h2.innerHTML = `You scored ${correctAns} out of ${quizData.length}`;
  contentDiv.appendChild(h2);

  let containerDiv = document.getElementsByClassName("container")[0];
  containerDiv.appendChild(contentDiv);
  //   console.log(correctAns);
}

function onClickHandler() {
  const selected = document.querySelector('input[name="options"]:checked');

  if (!selected) {
    console.log("please choose an option");
    return;
  }
  if (quizData[index].correct === selected.value) {
    correctAns++;
  }
  index++;
  if (index === quizData.length) {
    showResults();
    return;
  }
  let parent = document.getElementsByClassName("container")[0];
  let child = document.getElementsByClassName("content")[0];
  parent.removeChild(child);
  createContent(index);
}

function createContent(index) {
  let contentDiv = document.createElement("div");
  contentDiv.className = "content";

  let h2 = document.createElement("h2");
  h2.className = "question";
  h2.innerHTML = quizData[index].question;
  contentDiv.appendChild(h2);

  let optionsDiv = createOptions(index);
  contentDiv.appendChild(optionsDiv);

  let submitButton = document.createElement("div");
  submitButton.className = "btn";
  submitButton.innerHTML = "Submit";
  submitButton.addEventListener("mouseover", () => {
    submitButton.classList.add("btnHovered");
  });
  submitButton.addEventListener("mouseout", () => {
    submitButton.classList.remove("btnHovered");
  });
  submitButton.addEventListener("click", () => {
    onClickHandler();
  });

  contentDiv.appendChild(submitButton);

  let containerDiv = document.getElementsByClassName("container")[0];
  containerDiv.appendChild(contentDiv);
}

createContent(0);
