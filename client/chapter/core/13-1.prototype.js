/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.
// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
// 동물 > 호랑이 > 어떤 호랑이

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};
console.log(animal);

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근쓰`;
  },
};

/* ---------------- 프로토타입 설정 방법 --------------- */
tiger.__proto__ = animal;

/* ------------------ 도장처럼 찍기 ----------------- */
const 백두산호랑이 = {
  color: 'white',
  name: '백랑이',
  __proto__: tiger,
};
const 용마산호랑이 = {
  color: 'brown',
  name: '선돌이',
  __proto__: tiger,
};

/* -------------------------------------------- */
/*                    생성자 함수                    */
/* -------------------------------------------- */
console.clear();

/* ------------------ 생성자 함수 ------------------ */
function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };

  //return '메롱'; // return? 생성자 함수인데? 아무일도 일어나지 않음
  // return { name: 'tiger' }; // 객체를 리턴하면 해당 값을 가진 객체를 리턴함
}

/* ------------------- 인스턴스 ------------------- */
const a = new Animal();
console.log(a); // Animal {legs: 4}

/* -------------------------------------------- */
/*                 tiger 생성자 함수                 */
/* -------------------------------------------- */
function Tiger(name) {
  // 이 안에 있는건 인스턴스 메서드
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 천천히 접근한다.`;
  };
}

/* --------- animal을 상속받은 a로 프로토타입 설정 --------- */
Tiger.prototype = a;

const 한라산호랑이 = new Tiger('한돌이');

/* -------------- static 메서드 만들기 -------------- */
Tiger.bark = function () {
  return '어흥';
};
