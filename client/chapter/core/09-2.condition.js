/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b); // false

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB); // ''

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB); // 10

// 논리합 할당 연산자 logical or assignment
// a = a || b;
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false }; // {thisIsFalsy: false}
// Boolean([]) : true

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true }; // 2
// whoAreYou.replace(/\s*/g, '') === '' : 공백 제거 정규 표현식
// 로그인 알고리즘 구현
// const whoAreYou = prompt('누구쇼?');
// if (whoAreYou && whoAreYou.toLowerCase() === 'admin') {
//   const password = prompt('그럼 비밀번호 입력해봐!');
//   const result = password.toLowerCase() === 'themaster' ? '환영쓰' : '틀렸쓰';
//   alert(result);
// } else if (!whoAreYou || whoAreYou.replace(/\s*/g, '') === '') {
//   alert('취소? OK!');
// } else {
//   alert('누구신지 ..?');
// }

// 옵셔널 체이닝 활용 ?. : 물음표 앞의 값이 null | undefined라면 실행하지 않음
const whoAreYou = prompt('누구쇼?');
if (whoAreYou?.toLowerCase() === 'admin') {
  const password = prompt('그럼 비밀번호 입력해봐!');
  const result = password?.toLowerCase() === 'themaster' ? '환영쓰' : '틀렸쓰';
  alert(result);
} else if (!whoAreYou || whoAreYou.replace(/\s*/g, '') === '') {
  alert('취소? OK!');
} else {
  alert('누구신지 ..?');
}

// 함수용
function login() {
  let userName = prompt('아이디를 입력해 주세요');

  if (!userName) return; // 함수는 return 문을 만나면 해당 코드의 실행을 종료

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해 주세요.');
    if (password.toLowerCase() === 'themaster') {
      console.log('로그인 성공! 환영합니다~!');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소했습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다!');
  }
}
