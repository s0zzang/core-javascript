/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// 함수 선언 → 화살표 함수 (표현)식
// let calcAllMoney = (...args) => {
//   let total = 0;

//   /* ------------------ forEach ----------------- */
//   // args.forEach((arg) => (total += arg));
//   // return total;

//   /* ----------------- for .. of ---------------- */
//   // for (let arg of args) total += arg;
//   // return total;

//   /* ------------------ reduce ------------------ */
//   return args.reduce((acc, cur) => acc + cur);
// };

/* ------------- 전체를 화살표 함수로 변경하기 ------------- */
let calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur);
console.log(calcAllMoney(10, 20, 30, 40, 580));

/* --------------- 화살표 함수와 this --------------- */
// this : 나를 호출한 대상을 반환
const user = {
  total: 0,
  name: '소정',
  age: 100,
  grades: [100, 90, 95],
  /* ------------------ 메서드 축약형 ----------------- */
  // this도 가져오기 때문에 메서드 사용시 가장 권장됨
  totalGrades() {
    console.log(this); // this = user

    /* ------------------- 메서드 축약형 내 일반함수 ------------------- */
    // function sayHi() {
    //   console.log(this); // this = window
    // }
    // sayHi(); // 누가 호출하지 않았고 스스로 호출됨 - 이러면 window가 했다고 인식함
    // 모듈 세상에선 window > undefined
    this.grades.forEach(function (item) {
      console.log(this.total); // window.total 없음
    });

    /* ------------------ 메서드 축약형 내 화살표 함수 ------------------ */
    // this로 메서드를 찾을 수 있기 때문에 더 권장됨
    const sayHi = () => {
      console.log(this); // this = user : 상위 환경에서 this를 찾기 때문에
      console.log(this.total);
    };
    sayHi();
    this.grades.forEach((item) => (this.total += item));
    return this.total; // user.total

    /* ------------- 화살표 함수 없었을 때 방법 1 ------------ */
    // const self = this;
    /* ------------- 화살표 함수 없었을 때 방법 2 ------------ */
    this.gradies.forEach(function (item) {
      // ...
    }, this); // this = > thisArg : callbackFn을 실행할 때 this 값으로 사용할 값
  },

  /* ------------------- 일반 함수 ------------------ */
  // totalGrades: function () {
  //   console.log(this); // this = user
  // },

  /* -------------- arrow function -------------- */
  // totalGrades: () => {
  //   console.log(this); // this를 바인딩 하지 않음 = window
  // },
};
user.totalGrades();
console.log('user.total : ', user.total);

console.clear();

/* -------------------------------------------- */
/*                    pow 함수                    */
/* -------------------------------------------- */
// pow(numeric: number, powerCount: number): number;
/* ---------------- pow 일반 함수로 ---------------- */
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    // numeric *= numeric;
    result *= numeric;
  }
  return result;
};
console.log('pow', pow(3, 4));

/* ------------- pow 함수 표현식으로 ~ ------------- */
let powExpresstion = (numeric, powCount) => {
  // 반복할 횟수만큼 널널한 배열이 생성됨
  return Array(powCount)
    .fill(1)
    .reduce((acc) => {
      // cur값은 null이기 때문에 필요 없음
      // acc 값이 있어서 따로 result 변수 만들지 않음
      return (acc *= numeric);
    }, 1); // 초기값 작성하지 않으면, 배열의 첫번째 값인 null = 0이기 때문에 곱해도 0임 > 1로 변경

  /* ----------------- 이렇게도 사용 가능 ---------------- */
  // return Array(powCount).fill(numeric).reduce((acc) => acc * numeric);
};
console.log(powExpresstion(2, 5));

/* -------------------------------------------- */
/*                   repeat 함수                  */
/* -------------------------------------------- */
// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  /* ------------------ for문 버전 ----------------- */
  // let result = '';
  // for (let i = 0; i < repeatCount; i++) result += text;
  // return result;

  /* ----------------- reduce 버전 ---------------- */
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');
};

console.log(repeat('메롱😛', 5));
