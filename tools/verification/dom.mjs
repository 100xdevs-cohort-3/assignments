import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { JSDOM } from 'jsdom';
const root = fileURLToPath(new URL('../../', import.meta.url));
async function load(folder, extra = '') {
  const html = await fs.readFile(path.join(root, folder, 'index.html'), 'utf8');
  const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'outside-only' });
  const source = await fs.readFile(path.join(root, folder, 'script.js'), 'utf8');
  dom.window.eval(extra + '\n' + source.replace("import { quizData } from './data.js';", ''));
  return dom;
}
function submit(window, form) {
  form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
}
{
  const dom = await load('week-3/easy/bg-color-changer'),
    { window } = dom,
    doc = window.document;
  doc.querySelector('#palette button').click();
  assert.equal(doc.body.style.backgroundColor, 'red');
  doc.querySelector('#color').value = '#123456';
  submit(window, doc.querySelector('form'));
  assert.equal(doc.querySelectorAll('#palette button').length, 6);
  doc.querySelector('#palette button:last-child').click();
  assert.equal(doc.body.style.backgroundColor, 'rgb(18, 52, 86)');
  submit(window, doc.querySelector('form'));
  assert.equal(doc.querySelectorAll('#palette button').length, 6);
  dom.window.close();
  console.log('PASS Week 3 colors: selection, custom swatch, duplicate prevention');
}
{
  const data = await fs.readFile(path.join(root, 'week-3/easy/quiz-app/data.js'), 'utf8');
  const dom = await load('week-3/easy/quiz-app', data.replace('export const', 'const'));
  const { window } = dom,
    doc = window.document;
  ['d', 'b', 'a', 'b'].forEach((answer, index) => {
    doc.querySelector('input[name=q' + index + '][value=' + answer + ']').checked = true;
  });
  submit(window, doc.querySelector('form'));
  assert.match(doc.querySelector('#score').textContent, /4 out of 4/);
  assert.equal(doc.querySelector('#result').hidden, false);
  doc.querySelector('#retry').click();
  assert.equal(doc.querySelector('#quiz').hidden, false);
  assert.equal(doc.querySelectorAll('input:checked').length, 0);
  window.close();
  console.log('PASS Week 3 quiz: scoring, answer review, retry/reset');
}
{
  const dom = await load('week-3/medium/Form-Builder'),
    { window } = dom,
    doc = window.document;
  const builder = doc.querySelector('#builder'),
    preview = doc.querySelector('#preview');
  builder.elements.label.value = 'Name';
  builder.elements.required.checked = true;
  submit(window, builder);
  assert.equal(preview.querySelector('input').required, true);
  preview.querySelector('input').value = 'Alice';
  builder.elements.label.value = 'Experience';
  builder.elements.type.value = 'radio';
  builder.elements.options.value = 'Beginner\nAdvanced';
  submit(window, builder);
  assert.equal(preview.querySelectorAll('input[type=radio]').length, 2);
  preview.querySelector('input[type=radio]').checked = true;
  submit(window, preview);
  assert.match(doc.querySelector('#result').textContent, /Alice/);
  assert.match(doc.querySelector('#result').textContent, /Beginner/);
  preview.querySelector('button[type=button]').click();
  assert.equal(preview.querySelectorAll('fieldset').length, 1);
  window.close();
  console.log('PASS Week 3 form builder: required input, radio group, preview submission, removal');
}
{
  const dom = await load('week-3/hard/taskify'),
    { window } = dom,
    doc = window.document;
  const form = doc.querySelector('form');
  form.elements.title.value = 'Learn DOM events';
  submit(window, form);
  const select = doc.querySelector('#board select');
  select.value = 'Done';
  select.dispatchEvent(new window.Event('change'));
  const saved = JSON.parse(window.localStorage.getItem('week3-taskify'));
  assert.equal(saved[0].status, 'Done');
  const event = new window.Event('drop', { cancelable: true });
  Object.defineProperty(event, 'dataTransfer', { value: { getData: () => saved[0].id } });
  doc.querySelector('#board section').dispatchEvent(event);
  assert.equal(JSON.parse(window.localStorage.getItem('week3-taskify'))[0].status, 'Todo');
  doc.querySelector('#board article button').click();
  assert.equal(JSON.parse(window.localStorage.getItem('week3-taskify')).length, 0);
  window.close();
  console.log('PASS Week 3 Taskify: add, status menu, drag/drop, persistence, delete');
}
{
  const folder = 'week-3/easy/The-Pokémon';
  const html = await fs.readFile(path.join(root, folder, 'index.html'), 'utf8');
  const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'outside-only' });
  const { window } = dom,
    doc = window.document;
  window.fetch = async (url) => ({
    ok: true,
    json: async () =>
      url.includes('/type/')
        ? {
            pokemon: [
              { pokemon: { url: 'https://example.com/pokemon/1' } },
              { pokemon: { url: 'https://example.com/pokemon/2' } },
            ],
          }
        : {
            id: Number(url.slice(-1)),
            name: 'Test Pokemon',
            sprites: { front_default: 'https://example.com/image.png' },
            types: [{ type: { name: 'fire' } }],
            weight: 100,
          },
  });
  window.eval(await fs.readFile(path.join(root, folder, 'script.js'), 'utf8'));
  doc.querySelector('#count').value = '2';
  submit(window, doc.querySelector('form'));
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(doc.querySelectorAll('#cards article').length, 2);
  assert.equal(doc.querySelector('button').disabled, false);
  window.fetch = async () => ({ ok: false });
  submit(window, doc.querySelector('form'));
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.match(doc.querySelector('#status').textContent, /unavailable/);
  assert.equal(doc.querySelector('button').disabled, false);
  window.close();
  console.log('PASS Week 3 Pokemon: type lookup, count, rendering, service error recovery');
}
console.log('All 5 DOM exercise groups passed.');
