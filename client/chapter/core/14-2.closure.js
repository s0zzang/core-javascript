function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  // 정보만 전달해주면 되서 호랑이는 이름을 잃었음 ㅠ
  return function (value) {
    // 차원 포탈로 지구에서 명령어 수행 가능
    water = value;
    // return apple
  };
}

const UFO = earth();

UFO(0);

/* -------------------------------------------- */
/*                   어디서 쓰나요?                   */
/* -------------------------------------------- */
const first = document.querySelector('.first');

// function handleClick() {
//   let isClicked = false;

//   return () => {
//     document.body.style.background = !isClicked ? 'orange' : 'white';
//     isClicked = !isClicked;
//   };
// }
// first.addEventListener('click', handleClick);

const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

first.addEventListener('click', handleClick);

/* -------------------------------------------- */
/*                    또다른 예시                    */
/* -------------------------------------------- */
function useState(initValue) {
  let value = initValue; // 얘를 접근하려면 read만 가능, 설정하려면 write만 가능

  function state() {
    // getter
    return value;
  }
  function setState(newValue) {
    // setter
    value = newValue;
  }

  return [state, setState]; // 함수 본문을 배열로 내보냄
}

const [state, setState] = useState(111); // 배열이니까 구조분해할당 쌉가능하쥬?
console.log(read);
