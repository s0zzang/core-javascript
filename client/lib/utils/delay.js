import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { getRandomMinMax } from '../math/getRandomMinMax.js';
import { sozzang } from './sozzang.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';

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

export function delayP(options) {
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

// const result = delayP(3000);
// result
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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

/* -------------------------------------------- */
/*                 async, await                 */
/* -------------------------------------------- */
async function delayA(data) {
  return data;
}
const result1 = delayA('신재훈');
// console.log(result1); // Promise {<fulfilled>: '신재훈'}

// top-level-await
const result2 = await delayA('신재훈');
// console.log(result2); // 신재훈

// delayA('곽도희').then(console.log); // 곽도희

/* ------------ top-level-await 방지 ------------ */
// IIAFE
(async () => {
  // 여기에 코드 작성하면 async 함수 안이라서 awiat 사용 가능
})();

/* ----------- 또다른 async 함수 : 라면 끓이기 ---------- */
async function 라면끓이기() {
  console.log('---');
  console.log('물');
  console.log('스프');
  console.log('면');
  console.log('그릇');
  console.log('---');
}
// 라면끓이기();

/* ------------------ 포켓몬 입양 ------------------ */
async function getData() {
  const response = await sozzang.get(
    `https://pokeapi.co/api/v2/pokemon/${getRandomMinMax(0, 100)}`
  );
  // console.log(response.data); // response 객체
  const imgSrc = response.data.sprites.other.showdown['front_default'];
  insertLast('h2', `<img src="${imgSrc}" alt="" />`);
}
// getData();