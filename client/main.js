import { diceAnimation, getNode, getNodes } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup button'
);
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');
const record = (() => {
  let count = 1;
  let total = 0;
  return { count, total };
})();

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation = 0;

  return () => {
    if (isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

function makeRecordItem() {
  const diceValue = +getNode('#cube').dataset.dice;
  const template = /* html */ `<tr>
    <td>${record.count++}</td>
    <td>${diceValue}</td>
    <td>${(record.total += diceValue)}</td>
  </tr>`;
  renderRecordItem(template);
}

function renderRecordItem(template) {
  tbody.insertAdjacentHTML('beforeend', template);
  recordListWrapper.scrollTo(0, recordListWrapper.scrollHeight);
}

function handleRecord() {
  recordListWrapper.hidden = false;
  makeRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  tbody.textContent = '';
  record.count = 1;
  record.total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
