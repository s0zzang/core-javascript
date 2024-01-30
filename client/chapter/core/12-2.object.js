/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message; // 원시값은 진짜 복사되어 값 변경하면 복사된 값엔 반영 안됨
message = '메세지다';
console.log(message, text);
let conversationTool = messenger;
messenger.name = 'line';
console.log(messenger, conversationTool);

// 비교 (복사 vs. 참조)
console.log('message == text ', message == text);
console.log('message === text ', message === text);
console.log('messenger == conversationTool ', messenger == conversationTool);
console.log('messenger === conversationTool ', messenger === conversationTool);

/* -------------------------------------------- */
/*                     객체 복사                  */
/* -------------------------------------------- */
/* --------- 1. for ~ in 문을 사용한 복사 --------- */
const cloneObj = {};
for (let key in messenger) {
  cloneObj[key] = messenger[key];
}
cloneObj.name = 'kakao';
console.log(cloneObj, messenger);

/* ------- 2. Object.assign()을 사용한 복사 ------ */
const copyObj = Object.assign({}, messenger);
copyObj.name = 'this~';
console.log(copyObj, messenger);

/* ---------- 3. 전개 연산자(...)를 사용한 복사 ---------- */
const spreadObj = { ...messenger };
console.log(spreadObj, messenger);

/* ------------ 4. 객체를 복사해주는 유틸 함수 ------------ */
function copydObj(obj) {
  return Object.assign({}, obj);
}
const a = copydObj(messenger);
console.log(a);

/* -------------------------------------------- */
/*                   객체 병합(합성)               */
/* -------------------------------------------- */
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

/* --------------- mix in : Object.assign -------------- */
let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
console.log(combinedCssMap); // color가 중복되었고, 뒤에 위치한 cssMapB의  color: '#3f9e97'가 적용됨

/* --------------- mix in : spread -------------- */
const spreadCssMap = { ...cssMapA, ...cssMapB };
console.log(combinedCssMap);

/* ---------------------------------------------------- */
/*           중첩된 프로퍼티에 객체를 포함하는 객체 복사           */
/* ---------------------------------------------------- */

// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles = cloneDeep(containerStyles);
containerStyles['max-width'].md = 99999;
console.log(
  containerStyles['max-width'].md,
  copyedContainerStyles['max-width'].md
);

/* ------------ 1. 깊은 복사 유틸리티 함수 ----------- */
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

/* ----------- 2. Lodash 라이브러리 활용 ---------- */
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
