/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (false);
// console.log(i); // 1 : 실행은 됐기 때문에

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

// let num = prompt('숫자를 입력해부앙');
// do {
//   console.log(num);
// } while (num--);

// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// do - while문 예시
let first = document.querySelector('.first');

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}

const second = next(first);
console.log(second);

function prev(node) {
  // 매개변수가 .first라면, document.querySelctor를 자동으로 붙여주기
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  // document.querySelector('.first')를 매개변수로 넘겼다면 바로 여기로 실행됨
  do {
    node = node.previousSibling;
    if (!node)
      throw new Error('선택된 엘리먼트 이전 요소가 존재하지 않습니다.');
  } while (node.nodeType !== 1);
  return node;
}

console.log(prev('.second'));
console.log(prev(document.querySelector('.second')));
