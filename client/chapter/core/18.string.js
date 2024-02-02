/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[3];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
message[3] = 'd';

// 부분 문자열 추출
let slice = message.slice(1, 3); // 얘를 많이 사용함
let subString = message.substring(1, 3);
let subStr = message.substr; // 사용 안함

// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');
// 해당 문자 포함 안됨 : -1, 포함됨 : n번째 반환
let lastIndexOf;
let includes = message.includes('L');
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('more.');

let str = '      a  b     c                d     ';

// 공백 잘라내기
let trimLeft = str.trimLeft();
let trimRight = str.trimRight();
let trim = str.trim(); // 왼,오 여백만 자름

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

// 텍스트 이름 변환 유틸리티 함수
// let toCamelCase; // replace(특정문자열, (특정문자열로 선택한 모든애) => { 할일 })
// let toPascalCase;

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => {
    $1.trim().replace(/(-,_)|/, ''.toUpperCase());
  });
}
console.log(toCamelCase('ㄴㅇㄹ_ㄴㅇㄹ'));
