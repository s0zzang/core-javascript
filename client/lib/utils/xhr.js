const END_FOINT = 'https://jsonplaceholder.typicode.com/users';
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.open('GET', END_FOINT);
// console.log(xhr.response); // 꺼내쓸 수 없음 ... 비동기 통신이라 데이터를 넘어오기 전에 console을 찍은 것
// console.log(xhr.readyState); // 1

// // 상태 변화가 완료되면 콜백 함수 실행해 : 상태가 바뀔 때마다 호출됨
// xhr.addEventListener('readystatechange', () => {
//   const { readyState, status, response } = xhr;
//   console.log(readyState); // 2, 3, 4

//   if (readyState === 4) {
//     console.log('complete');

//     // 통신 결과 상태값으로 통신 성공/실패 조회
//     if (status >= 200 && status < 400) {
//       console.log('통신 성공');
//       console.log(typeof response);
//       console.log(JSON.parse(response));
//     } else {
//       console.log('통신 실패');
//     }
//   }
// });

// xhr.send(JSON.stringify({ name: 'sozzang' }));

/* ------------------ 함수로 만들기 ----------------- */
export function xhr({
  method = 'get',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // 정책을 동의했고 주소가 달라도 데이터를 줄 의무가 있지?
  },
}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail({ message: '에러가 발생!' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// 결과를 받기 위해 콜백 던짐 : 함수 본문을 넘겨서 나중에 실행시키기
// xhr(
//   'POST',
//   END_FOINT,
//   (res) => {
//     // 성공 콜백
//     console.log(res);
//   },
//   ({ message }) => {
//     // 실패 콜백. 객체가 떨어져서 구조분해할당 가능
//     console.log(message);
//   },
//   // post 넘길 body 부분
//   { name: 'tiger' }
// );

xhr({
  method: 'POST', // 작성 안하면 get이 기본값
  url: END_FOINT,
  onSuccess(res) {
    // console.log(res);
  },
  onFail() {},
  body: { name: 'tiger' },
});

/* ---------------- 이렇게 사용하고싶다 ---------------- */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

// 사용하기
// xhr.get(
//   END_POINT,
//   () => {},
//   () => {}
// );

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------- */
/*                  xhr promise                 */
/* -------------------------------------------- */
function xhrPromise(method, url, body) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send(JSON.stringify(body)); // post, put에만 사용되지만 생략하면안됨 ;;

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: '오륜디' });
        }
      }
    });
  });
}

xhrPromise('GET', END_FOINT)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err.message;
  });
