import {
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  memo,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup button'
);
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');
const record = (() => {
  let count = 1;
  let total = 0;
  return { count, total };
})(); // 객체에 가두는거 굿 ! 하지만 바닐라 자스에선 여기저기서 사용하기 때문에 전역에 두는 방법 사용함 (범쌤)

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

function makeRecordItem(value) {
  return /* html */ `<tr>
    <td>${record.count++}</td>
    <td>${value}</td>
    <td>${(record.total += value)}</td>
  </tr>`;
  // const diceValue = +getNode('#cube').dataset.dice;
  // const template = /* html */ `<tr>
  //   <td>${record.count++}</td>
  //   <td>${diceValue}</td>
  //   <td>${(record.total += diceValue)}</td>
  // </tr>`;
  // renderRecordItem(template);
}
// memo('cube', () => getNode('#cube')); // dice를 불러와서 사용하기 때문에 다이스에 정의되어있는 큐브를 사용 가능
console.log(memo('cube'));

function renderRecordItem() {
  const diceValue = +memo('cube').dataset.dice;
  insertLast(tbody, makeRecordItem(diceValue));
  endScroll(recordListWrapper);
}

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents(tbody);
  record.count = 1;
  record.total = 0;

  recordButton.disabled = true;
  resetButton.disabled = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
