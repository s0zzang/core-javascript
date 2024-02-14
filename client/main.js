import {
  addClass,
  clearContents,
  copy,
  getNode,
  getRandom,
  isNumericString,
  shake,
  showAlert,
} from './lib/index.js';
import jujeobData from './data/data.js';

// [phase-1]
const $submit = document.querySelector('#submit');
const $nameField = document.querySelector('#nameField');
const $result = getNode('.result');

function handleJujeob(e) {
  e.preventDefault();

  const name = $nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름 입력.', '2000');
    shake.restart();
    return;
  }
  if (!isNumericString(name)) return showAlert('.alert-error');

  clearContents($result);
  $result.insertAdjacentHTML('afterbegin', pick);
}

function handleCopy() {
  const text = this.textContent;
  copy(text).then(() => {
    showAlert('.alert-success', '복사 완.', '2000');
  });
}

$submit.addEventListener('click', handleJujeob);
$result.addEventListener('click', handleCopy);

// [phase-2]
