/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty, typeof empty); // null 'object'

// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef, typeof undef); // undefined 'undefined'

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const duble = 'hello';
const single = 'hello';
const backtik = `hello ${empty}`;

console.log(duble, typeof duble); // undefined 'undefined'
console.log(single, typeof single); // undefined 'undefined'
console.log(backtik, typeof backtik); // undefined 'undefined'

const str = new String('메롱');
console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 10.215;

console.log(integer, typeof integer);
console.log(floatingPointNumber, typeof floatingPointNumber);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;
console.log(bigNumber, typeof bigNumber); // 123n 'bigint'

// 6. 참(true, yes) 또는 거짓(false, no)
const isclicked = false;
console.log(isclicked, typeof isclicked); // false 'boolean'

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = { name: 'sozzang' };
console.log(obj, typeof obj); // {name: 'sozzang'} 'object'

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uuid');
console.log(unique, typeof unique); // Symbol(uuid) 'symbol'

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
const user = {
  name: 'sozzang',
  age: 30,

  sayHi: function () {
    console.log(this); // user
  },
  sayHi2: () => {
    console.log(this); // 전역객체
  },
  sayHi3() {
    console.log(this); // user
  },
};

console.log(user.sayHi());
console.log(user.sayHi2());
console.log(user.sayHi3());

// Array
const arr = [1, 2, 3, 'aa', user];
console.log(arr, arr[4].name);

// function : 상자 함, 셀 수
function sum(a, b) {
  // 함수 선언부
  return a + b;
}
// 함수 호출부
sum(1, 2);

// this
