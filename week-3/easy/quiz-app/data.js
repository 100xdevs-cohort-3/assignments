const quizData = [
    {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "JavaScript",
        "correct": "d",
    },
    {
        "question": "What does CSS stand for?",
        "a": "Central Style Sheets",
        "b": "Cascading Style Sheets",
        "c": "Cascading Simple Sheets",
        "d": "Cars SUVs Sailboats",
        "correct": "b",
    },
    {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborghinis",
        "correct": "a",
    },
    {
        "question": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b",
    },
    {
        "question": "Which of these is a JavaScript framework?",
        "a": "Python",
        "b": "Django",
        "c": "React",
        "d": "Eclipse",
        "correct": "c",
    },
    {
        "question": "What is the correct file extension for JavaScript files?",
        "a": ".java",
        "b": ".js",
        "c": ".javascript",
        "d": ".xml",
        "correct": "b",
    },
    {
        "question": "What does API stand for?",
        "a": "Application Programming Interface",
        "b": "Advanced Programming Interface",
        "c": "Automated Program Integration",
        "d": "Application Program Installation",
        "correct": "a",
    },
    {
        "question": "Which symbol is used for comments in JavaScript?",
        "a": "//",
        "b": "#",
        "c": "/* */",
        "d": "Both A and C",
        "correct": "d",
    },
    {
        "question": "What is the primary purpose of DOCTYPE in HTML?",
        "a": "To link JavaScript",
        "b": "To define document type",
        "c": "To define data types",
        "d": "To define document title",
        "correct": "b",
    },
    {
        "question": "Which property is used to change the background color in CSS?",
        "a": "color",
        "b": "bgcolor",
        "c": "background-color",
        "d": "background",
        "correct": "c",
    }
];

const quizContainer = document.getElementById("quizContainer");
const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");

function loadQuiz() {
    quizData.forEach((q, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <label><input type="radio" name="q${index}" value="a"> ${q.a}</label><br>
            <label><input type="radio" name="q${index}" value="b"> ${q.b}</label><br>
            <label><input type="radio" name="q${index}" value="c"> ${q.c}</label><br>
            <label><input type="radio" name="q${index}" value="d"> ${q.d}</label><br>
        `;
        quizContainer.appendChild(div);
    });
}

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });
    resultDiv.innerHTML = `<p>Your score: ${score}/${quizData.length}</p>`;
    // alert(`your score is ${score} /${quizData.length}`)
});

loadQuiz();