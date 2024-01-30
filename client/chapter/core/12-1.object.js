/* --------- */
/* Object    */
/* --------- */

/* ------------------- 유용 확장 ------------------ */
// es6-string-html : 자스에서 html/css 사용하기
// 백틱앞에 /* css */ 이런 식으로 작성하기

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  ['z-index']: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  ['max-width']: '800px',
  height: '40vh',
  ['min-height']: '280px',
  transform: 'translate(-50%, -50%)',
};
console.log(cssMap);

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user) - 보통 이 의미로 auto가 사용됨 | 권한 authorization
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uuid: crypto.randomUUID(),
  name: 'sozzang',
  email: 'e@d',
  isSignIn: false,
  permission: 'paid', // paid(결제 사용자) | free(일반 사용자)
};
console.log(authUser);

/* ---------------- 점(.) 표기법 --------------- */
// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
// setter
console.log((authUser.permission = 'free'));

/* ---------------- 대괄호([]) 표기법 --------------- */
// getter
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);
// setter
console.log((authUser['isSignIn'] = true));

/* -------------- 키값 여부 확인 : in문 ------------- */
console.clear();
// 프로퍼티 하나만
console.log('name' in authUser);
Object.prototype.nickname = 'sozzang';
// 프로퍼티 여러개
for (let key in authUser) {
  // nickname까지 반환
  // console.log(key);

  /* ----------- authUser의 프로퍼티만 조회하기 ----------- */
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

/* ------ 객체 key만 모아둔 배열 : Object.keys() ------ */
const keyList = Object.keys(authUser);
function keys(obj) {
  let result = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }
  return result;
}

/* ------ 객체 value만 모아둔 배열 : Object.values() ------ */
const valueList = Object.values(authUser);
console.log(valueList);
function values(obj) {
  let result = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

/* ------ 객체 entry(키와 쌍)를 모아둔 배열 : Object.entries() ------ */
const keyValue = Object.entries(authUser);
console.log(keyValue);
function entries(obj) {
  let result = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

/* ------  계산된 프로퍼티 (computed property) ----- */
// console.clear();
let calculateProperty = 'phone'; // phone | tel
function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty]: phone,
  };
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

/* --------------- 프로퍼티 제거 or 삭제 -------------- */
// 제거 : 파일 삭제 (비워두기)
authUser.isSignIn = null;
// 삭제 : 휴지통에서 삭제 (없애기)
delete authUser.email;
console.log(authUser);

authUser.email1 = 'email1';
authUser.email2 = 'email2';
console.log(authUser);

/* -------------- isObject 함수 만들기 ------------- */
// typeof : 데이터 타입 체크하는 허술한 방법
// Object.prototype.toString.call() : 정교하게 obj 타입을 체크하는 방법
// Object.prototype.toString.call('문자') : [object String]
// Object.prototype.toString.call(Math) : [object Math]
// Object.prototype.toString.call([1,2,3]) : [object Array]
// Object.prototype.toString.call([]).slice(8, -1).tolowerCase() : 딱 타입만 반환됨
function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}

/* --------------- 프로퍼티 제거/삭제 함수 -------------- */
const removeProperty = (obj, key) => {
  /* ------- 배열, 함수도 obj이기 때문에 안전하지 않음 ------- */
  // if (typeof obj === 'object') obj[key] = null;

  /* ------- 정교하게 타입을 체크하는 isObject 함수 생성 ------- */
  if (isObject(obj)) obj[key] = null;
};
const deleteProperty = (obj, key) => {
  if (!isObject(obj)) return;
  delete obj[key];
  return true;
};
removeProperty(authUser, 'email1');
deleteProperty(authUser, 'email2');
console.log(authUser);

/* ------------------ 단축 프로퍼티 ----------------- */
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;
const student = {
  name,
  email,
  authorization,
  isLogin,
};
console.log(student); // {name: '선범', email: 'seonbeom2@euid.dev', authorization: 'Lv. 99', isLogin: true}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

// console.clear();
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const arr = [10, 100, 10000];
const a1 = arr[0]; // 여러번 사용하려면 변수에 담쥐

const a2 = arr[1];
const a3 = arr[2];
const a4 = arr[3];
const a5 = arr[4];
// ... 아휴 귀찮아 걍 부시고 다시 할당할게 = 구조 분해 할당

/* -------------- 배열 구조 분해 할당 방법 -------------- */
const [a, b, c, d] = [10, 100, 1000, 10000];
console.log(a);

/* ------- 배열이 몇개인지 알수 없다면? 레스트 파라미터 활용 ------- */
const [n1, , ...rest] = [10, 20, 30, 40, 50, 60];
console.log(n1);
console.log(rest);

/* -------------- 배열 구조 분해 할당 예시 -------------- */
for (let [key, value] of Object.entries(authUser)) {
  console.log(key, value);
}
/* --------- 배열 구조 분해 할당 예시 : 유사배열 ----------- */
const [first, second] = document.querySelectorAll('span');
console.log(first, second);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const salaries = {
  박지성: 200,
  김보미: 300,
  이경민: 400,
  전희선: 500,
};
// 순서 상관 없음 : 변수 이름과 키가 같은 것을 찾음
// const { 박지성, 김보미, 이경민, 전희선 } = salaries;
// console.log(박지성);

const {
  김보미: 김,
  박지성: 박,
  이경민: 이,
  전희선: 전,
  도가현: 도 = 20, // 매개변수 기본값 설정
} = salaries;
console.log(도);

/* ---------------- 객체 구조 분해 예시 --------------- */
// 1. 함수의 인수가 엄청 많아질 경우, 객체를 받아서 처리할 수 있다.
createUserList({
  name: 'tiger',
  age: 35,
  address: '서울시 중랑구 면목동',
  phone: '010-2222-2222',
});

function createUserList(options) {
  // 2. 함수 안에서 객체를 구조 분해 할 수 있다.
  const { name: n, age, address, phone, nickName = 'tiger' } = options;

  // 3. 스코프 안에  동일한 변수가 사용될 경우, alias(별칭) 지정 가능
  const name = '선범';

  // 4. shorthand property 구문 사용 가능
  // 객체를 내보내는 것과 구조분해할당 구분하기
  return {
    name: n,
    age,
    address,
    phone,
    nickName,
  };
}

// 5. 어차피 들어오는게 객체라면 바로 구조 분해 할당 해도 되는거 아냐?
function createUserList2({ name: n, age, address, phone, nickName = 'tiger' }) {
  const name = '선범';
  return {
    name: n,
    age,
    address,
    phone,
    nickName,
  };
}

// 6. 특정 프로퍼티 있어야 사용할 수 있겠네? (기본값을 아무리 설정해도 ~) : mixin 패턴
const defaultOption = {
  name: '',
  age: '',
  address: '',
  phone: '',
};
function createUserList3(options) {
  // mixin
  const mix = { ...defaultOption, ...options };
  console.log(mix);

  const { name: n, age, address, phone, nickName = 'tiger' } = options;
  const name = '선범';
  return {
    name: n,
    age,
    address,
    phone,
    nickName,
  };
}
createUserList3(authUser);
