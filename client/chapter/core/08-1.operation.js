/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;
console.log(unary);

// 이항 연산자
let binary = +a + +b;
console.log(binary);

// 삼항 연산자 (⭐️)
let ternary = a > 10 ? '큼요' : '작음요';
// let ternary2 = a > 10 ? true : false;
let ternary2 = a > 10;
console.log(ternary);
console.log(ternary2);
// 마우스 호버하면 타입 알려줌 : 타입 스크립트 ! (vs 자체에 타스가 내장되어 있음)

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 2 - 1;

// 산술 연산자: 곱셈
let multiplication = 1 * 5;

// 산술 연산자: 나눗셈
let division = 3 / 1;

// 산술 연산자: 나머지
let remainder = 10 % 3;
// 보통 짝, 홀 구분할 때 사용

// 산술 연산자: 거듭 제곱
let power = 2 ** 3;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.log(onlyWorkDefaultValues); // 1,2,34,5,6
console.log([1, 2, 3].concat([4, 5, 6]));
console.log([...[1, 2, 3], ...[4, 5, 6]]); // 전개 구문 spread syntax : 제일 많이 사용함

function sum(...rest) {
  // ...rest : rest 파라미터
  console.log(rest);
}

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --
let counter = 0;
console.log(++counter); // 실제값도 1 반환값도 1
console.log(counter++); // 실제값은 2 반환값은 1

// 복합 할당 연산자
counter += 1;

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
// 2 * 5 + 125 = 135
// /= 로 count가 5로 할당됨
