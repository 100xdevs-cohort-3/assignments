import './style.css';
document.querySelectorAll('[data-menu]').forEach((button) =>
  button.addEventListener('click', () => {
    const menu = document.getElementById(button.dataset.menu);
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.add('flex-wrap');
    button.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
  }),
);
const questions = [
  ['Two Sum', 'Easy', ['Array', 'Hash table'], 'two-sum'],
  ['Add Two Numbers', 'Medium', ['Linked list', 'Math'], 'add-two-numbers'],
  [
    'Longest Substring Without Repeating Characters',
    'Medium',
    ['String', 'Sliding window'],
    'longest-substring-without-repeating-characters',
  ],
  [
    'Median of Two Sorted Arrays',
    'Hard',
    ['Array', 'Binary search'],
    'median-of-two-sorted-arrays',
  ],
  ['Valid Parentheses', 'Easy', ['String', 'Stack'], 'valid-parentheses'],
  ['Merge k Sorted Lists', 'Hard', ['Heap', 'Linked list'], 'merge-k-sorted-lists'],
  [
    'Binary Tree Level Order Traversal',
    'Medium',
    ['Tree', 'Breadth-first search'],
    'binary-tree-level-order-traversal',
  ],
];
const target = document.querySelector('#questions');
if (target) {
  const checkboxes = [...document.querySelectorAll('[name=difficulty]')];
  const search = document.querySelector('#question-search');
  const tags = document.querySelector('#show-tags');
  function render() {
    const selected = checkboxes.filter((box) => box.checked).map((box) => box.value);
    const visible = questions.filter(
      ([title, difficulty, tags]) =>
        (!selected.length || selected.includes(difficulty)) &&
        (title + tags.join(' ')).toLowerCase().includes(search.value.toLowerCase()),
    );
    target.replaceChildren();
    visible.forEach(([title, difficulty, labels, slug]) => {
      const row = document.createElement('div');
      row.className = 'px-5 py-5 border-b last:border-b-0 flex gap-5 items-center justify-between';
      const detail = document.createElement('div');
      const link = document.createElement('a');
      link.href = 'https://leetcode.com/problems/' + slug + '/';
      link.textContent = title;
      link.className = 'font-medium hover:underline';
      detail.append(link);
      if (tags.checked) {
        const p = document.createElement('p');
        p.className = 'text-xs text-slate-500 mt-2';
        p.textContent = labels.join(' · ');
        detail.append(p);
      }
      const level = document.createElement('span');
      level.className =
        difficulty === 'Easy'
          ? 'text-emerald-700 text-sm'
          : difficulty === 'Medium'
            ? 'text-amber-700 text-sm'
            : 'text-red-600 text-sm';
      level.textContent = difficulty;
      row.append(detail, level);
      target.append(row);
    });
    document.querySelector('#question-count').textContent = visible.length + ' questions';
  }
  checkboxes.forEach((box) => (box.onchange = render));
  search.oninput = render;
  tags.onchange = render;
  document.querySelector('#reset').onclick = () => {
    checkboxes.forEach((box) => {
      box.checked = false;
    });
    search.value = '';
    render();
  };
  const toggle = document.querySelector('#sidebar-toggle');
  toggle.setAttribute('aria-expanded', String(window.innerWidth >= 768));
  toggle.onclick = () => {
    const sidebar = document.querySelector('#sidebar');
    const open = getComputedStyle(sidebar).display !== 'none';
    sidebar.classList.remove('md:block');
    sidebar.classList.toggle('hidden', open);
    toggle.setAttribute('aria-expanded', String(!open));
  };
  render();
}
const features = [
  [
    'Save a page in a click',
    'Group your favorite links into collections that make sense to you.',
    'Everything in its place',
  ],
  [
    'Find it while you remember it',
    'Search titles and collections to return to the right page, faster.',
    'Search your saved pages',
  ],
  [
    'Good discoveries deserve company',
    'Bring useful resources together and share a collection with someone else.',
    'Share a little inspiration',
  ],
];
const tabs = [...document.querySelectorAll('[data-tab]')];
function selectTab(index) {
  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    tab.classList.toggle('border-red-500', i === index);
    tab.classList.toggle('border-transparent', i !== index);
  });
  const [title, description, preview] = features[index];
  document.querySelector('#feature-title').textContent = title;
  document.querySelector('#feature-description').textContent = description;
  document.querySelector('#feature-preview').textContent = preview;
  document.querySelector('#feature-panel').setAttribute('aria-labelledby', 'tab-' + index);
}
tabs.forEach((tab, index) => {
  tab.onclick = () => selectTab(index);
  tab.onkeydown = (event) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? 2
            : (index + (event.key === 'ArrowRight' ? 1 : 2)) % 3;
      selectTab(next);
      tabs[next].focus();
    }
  };
});
if (tabs.length) selectTab(0);
document.querySelector('#newsletter-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#newsletter-status').textContent =
    'Email validated. This demo does not subscribe or send your address.';
  event.target.reset();
});
