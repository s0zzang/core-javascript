import { getNode, insertLast, clearContents, refError } from './lib/index.js';
// import { refError } from './lib/error/index.js';

console.log(getNode);
const calculator = getNode('.calculator');
const result = calculator.querySelector('.result');
const numberInputs = [...calculator.querySelectorAll('input[type="number"]')];
const clear = document.querySelector('#clear');

function handleInput() {
  const total = numberInputs.reduce((acc, cur) => acc + +cur.value, 0);

  clearContents(result);
  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();
  numberInputs.forEach((input) => {
    clearContents(input);
  });
  result.textContent = '-';
}

calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);

function page1() {
  const $calculator = document.querySelector('.calculator');
  const $firstNumber = $calculator.querySelector('#firstNumber');
  const $secondNumber = $calculator.querySelector('#secondNumber');
  const $result = $calculator.querySelector('.result');

  function handleCalcSum(e) {
    const total = +$firstNumber.value + +$secondNumber.value;
    clearContents($result);
    insertLast($result, total);
  }

  function handleCalcReset(e) {
    if (e.target.type !== 'submit') return;
    e.preventDefault();
    clearContents($firstNumber);
    clearContents($secondNumber);
    $result.textContent = '-';
  }

  $calculator.addEventListener('input', handleCalcSum);
  $calculator.addEventListener('click', handleCalcReset);
}
