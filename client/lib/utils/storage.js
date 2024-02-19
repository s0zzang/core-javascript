import { isString } from './typeOf.js';

localStorage.setItem('user01', 'sozzang');
localStorage.setItem('user', JSON.stringify({ name: 'sozzang', age: '30' }));
console.log(JSON.parse(localStorage.getItem('user')));

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      localStorage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입이어야 합니다.' });
    }
  });
}
setStorage('user', { name: 'tiger' });
setStorage('user03', [1, 2, 3]).then(() => {
  localStorage.getItem('user03').toUpperCase();
});

export function getStorage(key) {
  return new Promise((resolve) => {
    if (isString(key)) {
      resolve(JSON.parse(localStorage.getItem(key)));
    } else {
      reject({ message: 'key는 문자열이어야 합니다.' });
    }
  });
}

// 비동기 처리고 프라미스 객체가 반환되므로 await으로 받기
console.log(await getStorage('user'));

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? localStorage.clear() : localStorage.removeItem(key);
    resolve();
  });
}
