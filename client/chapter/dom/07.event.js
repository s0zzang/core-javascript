/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');
function handler() {
  console.log('클릭 이벤트 발생 !!!!! 비상 !!!');
}

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])
// first.addEventListener('click', handler);

/* 이벤트 추가/제거 --------------------------------------------------------- */
// getNode('.deleteEvent').addEventListener('click', () => {
//   first.removeEventListener('click', handler);
// });

// getNode('.deleteEvent').addEventListener('click', remove)

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

// 객체인 e가 전달되자마자 매개변수에서 구조분해할당 때렸음 (다른 프로퍼티 사용하려면 추가입력 필요)
function handleBall({ offsetX: x, offsetY: y }) {
  // const { offsetX: x, offsetY: y } = e;

  // 공이 마우스의 가운데로 오게 하기 : 내몸의 절반만큼 빼주기
  console.log(ball.offsetWidth / 2, ball.offsetHeight / 2);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2}px)`;
}

function handleEmotion({ offsetX: x, offsetY: y }) {
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2}px)`;

  // 과부하온다. 캔버스 고
  let template = /*html */ `
    <div class="emotion" style="top:${y}px;left:${x}px">🤬</div>
  `;
  insertLast(ground, template);
}

// ground.addEventListener('click', handleBall);
// ground.addEventListener('mousemove', handleEmotion);

/* -------------------------------------------- */
/*              throttle, debounce              */
/* -------------------------------------------- */

// let timeout;
// function debounce(callback, limit) {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     callback();
//   }, limit);
// }
debounce(() => {
  // 여러번 실행이 되더라도, 함수가 종료된 1초 뒤 콜백 함수를 1회만 실행함
  console.log('xxxxx');
}, 1000);

/* ------------------ 클로저 버전 ------------------ */
function debounce(callback, limit = 1000) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(this);
      callback.call(this, e);
      // e 전달 받음, this를 call로 받음 : 클로저는 this,e를 모르니까 안쪽함수가 가지고 있는 애를 전달해주느 ㄴ것
      // 요기서 그럼 콜백을 디스(ground)로 호출을 대신 시킨거고 e를 그라운드에서 받아... 오는건가요 .. ? yes
    }, limit);
  };
}

function handle() {
  console.log('event');
}

// ground.addEventListener('mousemove', handle); // 디바운스 X
// ground.addEventListener('mousemove', debounce((e) => { console.log(e); }, 500)); // e는 안쪽함수에 떵러짐
ground.addEventListener('mousemove', debounce(handle, 1000)); // 디바운스 O

// 디바운스를 실행함 - 리턴 함수 본문이 튀어나오고 그걸 ground가 실행시킴
// 디바운스 함수를 실행시킨게 그라운드까 디스는 그라운드이고
// 리턴함수에서도 디스가 그라운드이도록 call

/* ------------------- 범쌤코드 ------------------- */
// function debounce(callback, limit=1000) {
//   let timeout;

//   return function (e) {
//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       callback.call(this, e);
//     }, limit);
//   };
// }

// // call, apply, bind

// ground.addEventListener(
//   'mousemove',
//   debounce(function (e) {
//     console.log(this);
//   }, 1000)
// );

/* ----------------- throttle ----------------- */
function throttle(callback, limit = 100) {
  let waiting = false;
  return function (e) {
    // 무조건 한번만 실행됨
    if (!waiting) {
      callback.apply(this, e);
      console.log(this, e);
      waiting = true;

      // limit 타임마다 실행되도록
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// throttle(() => {},1000); 1000 타이머에 맞춰서 주기적으로 호출됨
ground.addEventListener('mouseover', throttle(handle, 1000));

setInterval;
