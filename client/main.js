import {
  changeColor,
  delayP,
  getNode as $,
  getRandomMinMax,
  insertFirst,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
  sozzang,
} from './lib/index.js';

/* -------------------- 포켓몬 ------------------- */
const renderPokeList = async () => {
  const response = await sozzang.get(
    `https://pokeapi.co/api/v2/pokemon/${getRandomMinMax(0, 100)}`
  );

  if (response.ok) {
    const data = response.data;
    const template = /* html */ `<article class="user-card" data-index="user-1">
      <h3 class="user-name">${data.name}</h3>
      <div class="user-resouce-info">
        <img src="${response.data.sprites.other.showdown['front_default']}" alt="" />
      </div>
      <button class="delete">삭제</button>
      </article>
    `;

    insertFirst($userCardInner, template);

    changeColor('.user-card');
    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  }
};

/* ------------------- user ------------------- */
const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const $userCardInner = $('.user-card-inner');

const renderUserList = (async () => {
  renderSpinner($userCardInner);
  try {
    await delayP(1500);
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await sozzang.get(END_POINT);
    const data = await response.data;
    data.map((user) => renderUserCard($userCardInner, user));
    changeColor('.user-card');
    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch (err) {
    renderEmptyCard($userCardInner);
    console.log(err);
  }
})();

function handleDelete(e) {
  const button = e.target.closest('button');
  if (!button) return;
  const article = button.closest('article');
  const id = article.dataset.index.slice(5);

  sozzang.delete(`${END_POINT}/${id}`);
}

$userCardInner.addEventListener('click', handleDelete);
