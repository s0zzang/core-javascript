/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// 함수 선언 → 일반 함수 (표현)식
// 인수가 늘어날때마다 매개변수를 추가해줘야 함
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체인 유사배열 : arguments
  // arguments로 접근할 경우, 매개변수 없어도 괜츈

  let result = 0;
  /* ------------------- for 문 ------------------ */
  // for (let i = 0; i < arguments.length; i++) {
  //   result += arguments[i];
  // }

  /* ------------------ for..of ----------------- */
  // Symbol(Symbol.iterator): values() - 이게 있다면 iterable ! => for of 사용 가능
  // for (let argument of arguments) {
  //   result += argument;
  // }

  /* ---------------- 배열 능력 빌려쓰기 ---------------- */
  // 빌려쓰는 단점 : 1회성으로 빌려쓴거라 다음에 배열 능력 쓰려면 또 빌려야 함...
  // Array.prototype.forEach.call(arguments, function (item) {
  //   result += item;
  // });

  /* ------------- forEach 설명 듣고가 ~ ------------- */
  // 배열.forEach( f: (value, index, array){ ... } )
  //

  /* ------------------ arguments의 부모를 배열로 바꿔치기 ----------------- */
  // arguments.__proto__ = Array.prototype;
  // arguments.forEach((item) => {
  //   result += item;
  // });

  /* ------------ 걍 arguments(유사배열)를 배열로 바꾸기 ------------ */
  // 1. Array.from(값) : 값을 Array로 만들어줌 (IE 안됨) - const arr = Array.from(arguments);
  // 2. Array.prototype.slice.call(arguments) : IE 위해서 이렇게 사용했었음, 인수를 전달하지 않으면 배열을 반환함
  // 3. 전개 구문 : [...유사배열] - 제일 최신, 젤 좋음요
  const arr = [...arguments];
  console.log(arr);

  /* ---------------- 배열 능력 알아보기 ---------------- */
  // 1. reduce(function(누적값, 현재값){...}, 초기값)
  // result = arr.reduce((acc, cur) => {
  //   return acc + cur;
  // });
  // 화살표 함수 버전 (return문 생략 가능)
  return arr.reduce((acc, cur) => acc + cur);
  return result;
};
const result = calculateTotal(10, 50, 30, 60, 50, 50, 100);
console.log(result);

/* ------------ 익명(이름이 없는) 함수 (표현)식 ----------- */
let anonymousFunctionExpression = function () {
  console.log('xx');
};

/* ---------- 유명(이름을 가진) 함수 (표현)식 ---------- */
// hello() 호출 불가, namedFunctionExpression()로 호출해야 함
let namedFunctionExpression = function hello() {
  console.log('dd');
};

/* ---------------- 콜백 함수 (표현)식 --------------- */
let cb = function (state, success, fail) {
  return state ? success() : fail();
};
cb(
  true,
  function () {
    return '성공';
  },
  function () {
    return '실패';
  }
);

/* ------------------- 콜백 예제 ------------------ */
function movePage(url, success, fail) {
  url.includes('www') ? success(url) : fail();
}

/* ------------ movePage 화살표 함수 버전 ------------ */
movePage(
  'https://www.naver.com',
  (url) => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
  () => console.error('잘못된 url 정보를 입력하셨습니다.')
);

/* ------------ movePage 일반 함수 버전 ------------ */
// movePage(
//   'https://www.naver.com',
//   function (url) {
//     console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);

//     setTimeout(() => {
//       // window.location.href = url
//     }, 3000);
//   },
//   function () {
//     console.error('잘못된 url 정보를 입력하셨습니다.');
//   }
// );

/* -------------- 즉시 실행 함수 (표현)식 : IIFE -------------- */
// Immediately Invoked Function Expression
// 함수를 만듦과 동시에 실행해버림
// ( f )()
// (function () {})();

const MASTER = (function (sozzang) {
  /* ----- window를 내 맘대로 이름을 변경해서 사용할 수 있음 ----- */
  // console.log(sozzang.alert());

  let uuid = 'asdfasdfasdfasdf!';
  return {
    getKey() {
      return uuid;
    },
    getKey(value) {
      uuid = value;
    },
  };
})(window);

// import, export => 모듈 프로그램
// 등장으로 IIFE 함수는 사용이 줄었지만, 클로저에서 아직 많이 사용함
// 추가로, 즉시실행함수 안에서 여러 함수 작성 > return css만 한다면, css 함수만 활용 가능
