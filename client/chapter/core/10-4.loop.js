/* ---------------- */
/* For In Loop      */
/* ---------------- */

const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // 내장 객체 오염시키기
  hasOwnProperty() {
    console.log('난 감자입니다');
  },
};

// object 오염 시키기
Object.prototype.nickName = 'tiger';

// 객체의 속성(property) 포함 여부 확인 방법
const key = 'nickName';
console.log(key in js);

// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
console.log(js.hasOwnProperty(key));

// 자바스크립트는 hasOwnProperty를 보호하지 않음;
// 다른 내장 객체도 다 오염될 수 있음
// > 생성된 객체(js)의 메서드는 불안함 => 진짜 객체(Object)의 능력을 빌려써야 함
// 진짜 객체의 능력도 오염시킬 순 있지만 상당히 위험해서 거의 안씀 = 그래서 이걸 빌려씀
// 기본 본판을 오염시키면 성능 이슈 빵

// 진짜 객체 접근해서(Object.prototype) hasOwnProperty 빌려쓰기(call)
// 정확하게 해당 키가 있는지(hasOwnProperty) 확인함
// call(빌려쓰는 주체, 원래 전달할 매개변수)
console.log(Object.prototype.hasOwnProperty.call(js, key));

/*
// Object.prototype 이라고 쓰는 이유
Object(찐) > object(우리가 사용하는 오브젝트), string, number ...
그렇기 때문에 Object.prototype 이라고 작성해야 함
*/

/*
// 유사배열
배열이랑 비슷하게 생겼는데 [[Prototype]]: NodeList 이런 애들이 해당함
콘솔 까보면 forEach 이런거 쓸순 있지만 배열의 능력은 없음
const list = document.querySelector('span')
- 배열 능력 사용하기 : Array.prototype.map.call(list, ()=>{})
- 걍 배열로 만들기 : Array.from(list)
*/

/* --------------------- 다시 진도로 -------------------- */

// for ~ in 문
console.clear();
for (let key in js) {
  // console.log(key); // creator, createAt, standardName, currentVersion, hasOwnProperty, nickName
  // nickName까지 나와버림 (js꺼 아니고 Object꺼) 그래서 아래처럼 사용
  // 근데 왜 nickName만 나오냐? 조상 프로퍼티 더 많은디 ? 열거가 가능한 애들만 반환되서 ~ (콘솔에서 어두컴컴쓰 ~)

  if (Object.prototype.hasOwnProperty.call(js, key)) {
    console.log(key);
  }
}
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

const tens = [10, 100, 1000];
for (let key in tens) {
  console.log(tens[key]);
}
