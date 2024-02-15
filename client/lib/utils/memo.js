/* -------------------------------------------- */
/*                  메모이제이션                   */
/* -------------------------------------------- */
// url이 변경되면 메모는 변경됨

import { getNode } from '../dom/getNode.js';

// 메모하기
export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    // getter
    if (!callback) return cache[key];

    // 덮어씌워지기 방지
    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }

    // setter : getNode('#cube')가 콜백으로 전달되어 실행시킨 결과가 cache[cube]의 값으로 담김
    cache[key] = callback();
  };
})();

// 콜백함수로 리턴된 값이 cube에 들어감
// memo('cube', () => getNode('#cube'));
// memo('cube', () => '안녕 큐브'); // 큐브를 다시 만들었음 = 덮어씌워짐

// 메모 사용하기
// console.log(cache);
// console.log(memo('cube'));
// memo('cube');
