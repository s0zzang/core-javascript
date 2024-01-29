/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
function calcPrice(priceA, priceB, priceC = 0, priceD) {
  // if (!priceD) priceD = 0; : 1번째 방법
  // priceD ||= 0; : 2번째 방법
  priceD ??= 0; // 3번째 방법
  if (!priceA || !priceB)
    throw new Error(
      'calcPrice 함수의 첫번째, 두번째 인수는 필수 입력 값입니다.'
    );
  console.log(priceA + priceB + priceC + priceD);
}

// 함수 호출
calcPrice(500, 2000); // argument

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값
// calcPrice(priceD = 0) {...}

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  if (!pxValue) throw new Error('rem 함수의 첫번째 인수는 필수 입력 값입니다.');

  // pxValue = parseInt(pxValue, 10);
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10));
  const result = pxValue / base;
  return `${result}rem`;
}
console.log(rem(10, '10'));

/* ---------- Test Driven Development(TDD) : 테스트 주도 개발 --------- */
console.assert(rem(10) === '0.625px');

function calcRem(rem, num) {
  if (!rem) {
    throw new Error('없어');
  }

  if (typeof rem === 'number') {
    return rem / 16 + 'rem';
  } else if (typeof rem === 'string' && !num) {
    let a = parseInt(rem);
    let result = a / 16;
    return result + 'rem';
  } else if (typeof num === 'number' && typeof rem === 'string') {
    let a = num;
    let result = parseInt(rem) / a;
    return result + 'rem';
  }
}

// css(node: string, prop: string, value: number|strung) : string;
function getStyle(node, prop) {
  // validation
  if (typeof node === 'string') node = document.querySelector(node);
  if (typeof prop !== 'string')
    throw new Error('getStyle 함수의 두번째 인수는 문자 타입이어야 합니다.');
  return getComputedStyle(node)[prop];
}

function setStyle(node, prop, value) {
  if (typeof node === 'string') node = document.querySelector(node);
  if (typeof prop !== 'string')
    throw new Error('setStyle 함수의 두번째 인수는 문자 타입이어야 합니다.');
  if (!value)
    throw new Error('setStyle 함수의 세번째 인수는 필수 입력값 입니다.');
  // prop을 변수로 받기 위해선, 대괄호 표기법 사용 필요
  // computed property
  node.style[prop] = value;
}

const size = getStyle('.first', 'fontSize');
console.log(setStyle('.first', 'backgroundColor', '#ccc'));

/* ---------- get, set 한번에 구하는 css 함수 --------- */
function css(node, prop, value) {
  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

console.log(css('.first', 'color'));
css('.first', 'color', 'blue');

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
