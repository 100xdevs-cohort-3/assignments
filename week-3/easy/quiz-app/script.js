import { quizData } from './data.js';
const form = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
quizData.forEach((question, index) => {
  const field = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = index + 1 + '. ' + question.question;
  field.append(legend);
  for (const answer of ['a', 'b', 'c', 'd']) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    Object.assign(radio, { type: 'radio', name: 'q' + index, value: answer, required: true });
    label.append(radio, question[answer]);
    field.append(label);
  }
  questions.append(field);
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const answers = new FormData(form);
  let score = 0;
  const review = document.querySelector('#review');
  review.replaceChildren();
  quizData.forEach((question, index) => {
    const correct = answers.get('q' + index) === question.correct;
    if (correct) score++;
    const row = document.createElement('p');
    row.textContent =
      (correct ? 'Correct: ' : 'Review: ') + question.question + ' — ' + question[question.correct];
    review.append(row);
  });
  document.querySelector('#score').textContent =
    'You scored ' + score + ' out of ' + quizData.length;
  form.hidden = true;
  document.querySelector('#result').hidden = false;
});
document.querySelector('#retry').onclick = () => {
  form.reset();
  form.hidden = false;
  document.querySelector('#result').hidden = true;
  form.querySelector('input').focus();
};
