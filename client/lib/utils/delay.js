import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');
const second = getNode('.second');

function deley(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// first.style.transform = 'rotate(360deg)';

// deley(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   deley(() => {
//     first.style.transform = `rotate(360deg)`;
//     second.style.transform = `rotate(-360deg)`;

//     deley(() => {
//       first.style.top = 0;
//       second.style.top = 0;
//     });
//   });
// });

/* ----------------- 프라미스 사용하기 ---------------- */
const promise = new Promise((resolve, reject) => {
  resolve('성공');
});

const defaultoptions = {
  shouldReject: false,
  successMessage: '성공임다',
  errorMessage: '실팬디요',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultoptions };
  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...defaultoptions, ...options };
  }
  let { shouldReject, successMessage, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(successMessage);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

const result = delayP(3000);
result
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

delayP(1000)
  .then((res) => {
    first.style.top = '-100px';
    second.style.top = '100px';
    console.log('1단계');
    return delayP(1000);
  })
  .then((res) => {
    first.style.transform = `rotate(360deg)`;
    second.style.transform = `rotate(-360deg)`;
    console.log('2단계');
    return delayP(1000);
  })
  .then((res) => {
    first.style.top = 0;
    second.style.top = 0;
    console.log('3단계');
    return delayP(1000);
  });
