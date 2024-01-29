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

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
