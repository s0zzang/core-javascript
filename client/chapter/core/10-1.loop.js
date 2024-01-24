/* --------------- */
/* While Loop      */
/* --------------- */

// let a = 10;
// while(a){
//   console.log(--a) // 9 ~ 0
//   console.log(a--) // 10 ~ 1
// }

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'Zustand',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

console.time('a');
// while 문 (순환 : 순방향)
let i = 0;
while (i < frontEndDev.length) {
  const value = frontEndDev[i];
  console.log(value);
  i++;
}
console.timeEnd('a');

console.log('---');

console.time('b');
// while 문 (역순환 : 역방향)
let length = frontEndDev.length;
while (length) {
  length--;
  const value = frontEndDev[length];
  console.log(value);
}
console.timeEnd('b');
// 성능 진단 : 순환 vs. 역순환
