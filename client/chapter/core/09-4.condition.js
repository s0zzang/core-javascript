/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = 'dith8888@gmail.com';
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ? emailAddress : 'user@company.io';
console.log(receivedEmailAddress)

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH)
console.log(null ?? WIDTH)
console.log(undefined || WIDTH)
console.log(undefined ?? WIDTH)

console.log(boolean || WIDTH)
console.log(boolean ?? WIDTH) // : boolean - false긴 하지만 false로 정의된 값이기 때문에
console.log('' || WIDTH)
console.log('' ?? WIDTH)
console.log(0 || WIDTH)
console.log(0 ?? WIDTH)