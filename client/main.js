import {
  clearContents,
  deleteStorage,
  getStorage,
  setStorage,
} from './lib/index.js';

const $textField = document.querySelector('#textField');
const $clear = document.querySelector('[data-name="clear"]');
const handleInput = (e) => {
  setStorage('input', e.target.value);
};
const handleClear = (e) =>
  deleteStorage('input').then(clearContents($textField));

/* ------------------ then 버전 ----------------- */
// (() => {
//   getStorage('input').then((res) => {
//     $textField.value = res;
//   });
// })();
/* ----------------- async 버전 ----------------- */
(async () => {
  const data = await getStorage('input');
  $textField.value = data;
})();

$textField.addEventListener('input', handleInput);
$clear.addEventListener('click', handleClear);
