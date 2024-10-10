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
        "d": "Helicopters Terminals Motorboats Lamborginis",
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
    // you can add more quiz here
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;
let userAnswers = [];

function showQuestion(index) {
    const currentQuestion = quizData[index];
    const answers = [];
    for (let letter in currentQuestion) {
        if (letter !== 'question' && letter !== 'correct') {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter} :
                    ${currentQuestion[letter]}
                </label>`
            );
        }
    }
    quizContainer.innerHTML = `
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
    `;
}

function showNextQuestion() {
    const answerContainer = quizContainer.querySelector('.answers');
    const selector = `input[name=question${currentQuestionIndex}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    userAnswers[currentQuestionIndex] = userAnswer;

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
}

function showResults() {
    let numCorrect = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
        if (userAnswers[questionNumber] === currentQuestion.correct) {
            numCorrect++;
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

showQuestion(currentQuestionIndex);
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', showResults);
submitButton.style.display = 'none';
