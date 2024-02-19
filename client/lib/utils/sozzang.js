const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const sozzang = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const response = await fetch(url, restOptions);
  // response.ok : 응답 결과를 알려줌 (status 200 ~ 399)
  if (response.ok) {
    // response.json() : 또 프라미스 객체라서 await로 결과 받기
    // json은 JSON.parse를 알아서 해줌
    // const data = await response.json();
    /* --------- response의 data 프로퍼티로 만들기 --------- */
    response.data = await response.json();

    // response를 내보냈는데 왜 프라미스 객체가 나오지? async 함수는 무조건 프라미스 객체를 반환하기 때문에
    return response;
  }
};

// 이렇게 작성하면 프라미스 객체 반환 : 어싱크 펑션이니까!
// const result = sozzang();

// 이렇게 작성해야 결과가 반환됨
const result = await sozzang({
  url: END_POINT,
});

/* -------------------------------------------- */
/*           쉽게 사용하자 나는 불편한 개발자           */
/* -------------------------------------------- */
sozzang.get = (url, options) => {
  return sozzang({
    url,
    ...options,
  });
};
sozzang.post = (url, body, options) => {
  return sozzang({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
sozzang.put = (url, body, options) => {
  return sozzang({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
sozzang.delete = (url, options) => {
  return sozzang({
    method: 'DELETE',
    url,
    ...options,
  });
};

// console.log(await sozzang.get(END_POINT));
