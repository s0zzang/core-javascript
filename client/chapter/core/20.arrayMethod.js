/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
const isArray = (data) => Array.isArray(data);

const people = [
  {
    id: 0,
    name: '박가희',
    age: 25,
    job: '명탐정코난 범인',
    imageSrc: 'FAkq31',
    alt: '어두컴컴한 코난 범인룩',
  },
  {
    id: 1,
    name: '김보미',
    age: 64,
    job: '짜요짜요 마케터',
    imageSrc: 'Gakz34',
  },
  {
    id: 2,
    name: '한태희',
    age: 13,
    job: '삐돌이',
    imageSrc: 'Fkzoq81',
  },
  {
    id: 3,
    name: '이원명',
    age: 81,
    job: '이도령',
    imageSrc: 'Tq9z1i',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
let nameArr = [];
people.forEach((item, idx) => {
  nameArr.push(item.name);
});

const list = document.querySelectorAll('span');
list.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(`${item.className} !!!`);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const job = people.map((item, index) => {
  return item.job;
});

const card = people.map((item, idx) => {
  return /* html */ `
    <div class="userCard">
      <div className="imageField">
        <img src="${item.imageSrc}" alt="${item.alt}" />
      </div>
      <span>이름: ${item.name}</span>
      <span>나이: ${item.age}</span>
      <span>직업: ${item.job}</span>
    </div>
  `;
});

card.forEach((item) => document.body.insertAdjacentHTML('beforeend', item));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const 젊은이들 = people.filter((item) => item.name === '박가희');

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const tem = people.reduce((htmlCode, cur) => {
  return htmlCode + `<div>${cur.name} : ${cur.age}</div>`;
});

document.body.insertAdjacentHTML('beforeend', tem);

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '원명 가희 소정 설아 경민 진욱';
const strToArr = str.split(' ');
const arrToStr = strToArr.join('/');
