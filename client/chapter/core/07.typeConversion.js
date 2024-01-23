/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(YEAR, typeof YEAR);
console.log(String(YEAR), typeof String(YEAR)); // 명시적 형변환
console.log(YEAR + '', typeof (YEAR + '')); // 암시적 형변환

// undefined, null
let days = null;
let weekend;

console.log(days, typeof days);
console.log(days + '', typeof (days + '')); // 암시적 형변환
console.log(weekend + '', typeof (weekend + '')); // 암시적 형변환

// boolean
let isClicked = false;
console.log(isClicked, typeof isClicked);
console.log(isClicked + '', typeof (isClicked + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '14';
console.log(Number(num)); // 명시적 형변환
console.log(num * 1); // 암시적 형변환
console.log(num / 1); // 암시적 형변환
console.log(+num); // 암시적 형변환

// numeric string
const width = '103.5px';
console.log(Number(width)); // NaN
console.log(parseInt(width)); // 103
console.log(parseFloat(width)); // 103.5

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.log(Boolean(friend)); // false
console.log(Boolean(money)); // false
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean(0)); // flase
console.log(Boolean('0')); // true

// 위에 나열한 것 이외의 것들
const value = prompt('값을 입력해주세요');

console.log(+value);
console.log(value * 1);
console.log(value / 1);
console.log(Number(value));
console.log(parseInt(value));
