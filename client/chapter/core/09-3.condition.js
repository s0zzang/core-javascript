/* ---------------- */
/* Switch           */
/* ---------------- */

const value = 10;

switch (value) {
  case 10:
    console.log('10이요');
    break;
  case 20:
    console.log('20이요');
    break;
    defalut: console.log('난수요');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case '아침':
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case '점심':
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case '저녁':
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case '밤':
    ``;
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case '심야':
  case '새벽':
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('언제일까요');
}

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === '아침') {
  console.log('뉴스 읽어');
} else if (thisTime === '점심') {
  console.log('밥 먹어');
} else if (thisTime === '저녁') {
  console.log('잘준비 해야지');
} else if (thisTime === '밤') {
  console.log('쿨쿨');
} else if (thisTime === '심야' || thisTime === '새벽') {
  console.log('꿈꿔야지');
}

/* switch vs. if -------------------------------------------------------- */
// const num = +prompt('0에서 6까지의 숫자 중 아무거나 입력해주쇼');
// const randomNum = Math.floor(Math.random() * 7);
// // Math.floor : 내림
// // Math.round : 반올림
// switch (randomNum) {
//   case 0:
//     console.log('일욜이요');
//     break;
//   case 1:
//     console.log('월욜이요');
//     break;
//   case 2:
//     console.log('화욜이요');
//     break;
//   case 3:
//     console.log('수욜이요');
//     break;
//   case 4:
//     console.log('목욜이요');
//     break;
//   case 5:
//     console.log('아싸 금욜이요');
//     break;
//   case 6:
//     console.log('토욜이요');
//     break;
// }

// 악셀밟기
function getRandom(n) {
  return Math.floor(Math.random() * n);
}
function getDay(number) {
  switch (number) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

// getDay 실행될 때마다 getRandom 함수도 실행됨
// getDay(getRandom(7));

function weekend() {
  const today = getDay(getRandom(7));
  return today.includes('토') || today.includes('일')
    ? `오늘은 ${today}요일이라서 주말입니다요 ~.~`
    : `오늘은 ${today}요일이라서 공부해야합니다...`;
}

const result = weekend();
console.log(result);
