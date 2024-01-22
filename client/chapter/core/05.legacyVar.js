/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

var outside = 'outer';
{
  console.log(outside); // 블럭이 많아도 외부 변수를 블럭 내 참조 가능
  console.log(inside); // 선언부가 끌어올려져 최초값 undefined 할당, 할당문은 실행 전
  var inside = 'inner';
  console.log(inside); // 할당 이후 참조하면 할당값 확인 가능
}
console.log(inside); // 블록 밖에서 블록 안의 변수를 참조 가능 (var의 특징 : 블록 스코프 무시, 함수 레벨 스코프 적용)

/* -------------------------------------------- */

let outside2 = 'outer';
{
  console.log(outside2); // 블럭이 많아도 외부 변수를 블럭 내 참조 가능
  //   console.log(inside2); // ReferenceError: Cannot access 'inside2' before initialization : 초기화 전에 접근했삼
  let inside2 = 'inner';
  console.log(inside2); // 할당 이후 참조하면 할당값 확인 가능
}
// console.log(inside2); // ReferenceError: inside2 is not defined

// var는 변수의 중복 선언을 허용합니다
var a = 10;
var a = 5; // 이게 가능함

let b = 10;
let b = 13; // Uncaught SyntaxError: Identifier 'b' has already been declared

// 선언하기 전 사용할 수 있는 var
