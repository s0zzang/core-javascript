/* --------------- */
/* For Of Loop     */
/* --------------- */

/* ----------------- 헷갈리는 용어 정리 ---------------- */
// enmerable : 열거 가능한 (코드 차원에서 접근 가능한지)
// immutable : 변하지 않는 (리액트 세상에서 짱많이 씀요 : 리액트는 함부로 값을 수정할 수 없는 규칙이 있어서)
// iterable : 반복 가능한

/* ------------------- 유사배열 ------------------- */
// 배열처럼 생겼는데 실제 배열은 아님
// 개발자도구 > Symbol(Symbol.iterator)가 들어있으면 iterable
// [Symbol.iterator]{} 이렇게 유사 배열에 직접 추가도 가능함 - function *f(){} 제너럴 펑션과 밀접한 연관 있음

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
  // [Symbol.iterator]{}
};

// 문자도 iterable한 요소다
const str = '안녕하세요';

for (let key of str) {
  // console.log(key);
}

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

for (let value of languages) {
  const name = value.name;
  if (name === 'Java') continue;
  console.log(name);
}

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

/* ------------- 객체에 객체에 객체를 더해서 ~ ------------ */
// 이 방법이 힘드니까 재귀함수 또는 로데쉬 ? 그 라이브러리 사용함
for (let key in randomUser) {
  // if (Object.prototype.hasOwnProperty.call(randomUser, key)) {
  //   const L1 = randomUser[key];
  //   console.log('\tL1 : ', L1);
  //   if (typeof L1 === 'object') {
  //     for (let key in L1) {
  //       if (Object.prototype.hasOwnProperty.call(L1, key)) {
  //         const L2 = L1[key];
  //         console.log('\t\tL2 : ', L2);
  //         if (typeof L2 === 'object') {
  //           for (let key in L2) {
  //             if (Object.prototype.hasOwnProperty.call(L2, key)) {
  //               const L3 = L2[key];
  //               console.log('\t\t\tL3 : ', L3);
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}

console.log(Object.entries(randomUser));

/* --------------- entries 활용하기 --------------- */
for (let keyValue of Object.entries(randomUser)) {
  // 배열의 구조 분해 할당 방식 let [key, value]
  const key = keyValue[0];
  const value = keyValue[1];
  console.log('Li : ', value);

  if (typeof value === 'object') {
    for (let keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];
      console.log('L2 : ', value);

      if (typeof value === 'object') {
        for (let keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];
          console.log('L3 : ', value);
        }
      }
    }
  }
}

/* ------------------ 재귀함수 예시 ----------------- */
for (let keyValue of Object.entries(randomUser)) {
  const key = keyValue[0];
  const value = keyValue[1];

  console.log('L1 :', value);

  if (typeof value === 'object') {
    for (let keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];

      console.log('\tL2 :', value);

      if (typeof value === 'object') {
        for (let keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];

          console.log('\t\tL3 :', value);
        }
      }
    }
  }
}
