import {
  changeColor,
  clearContents,
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
const END_POINT = 'http://localhost:3000/users';
const $userCardInner = $('.user-card-inner');
const $createButton = $('.create');
const $cancleButton = $('.cancel');
const $doneButton = $('.done');

const renderUserList = async () => {
  renderSpinner($userCardInner);
  try {
    await delayP(1000);
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
};

function handleDelete(e) {
  const button = e.target.closest('button');
  if (!button) return;
  const article = button.closest('article');
  const id = article.dataset.index.slice(5);

  sozzang.delete(`${END_POINT}/${id}`).then(() => {
    clearContents($userCardInner);
    renderUserList();
  });
}

const handleCreate = () => {
  gsap.to('.pop', { autoAlpha: 1 });
};

const handleCancle = (e) => {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
};

const handleDone = (e) => {
  e.preventDefault();
  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;
  const body = { name, email, website };

  if (!name || !email || !website) alert('모든 값을 입력해주세요');
  sozzang.post(END_POINT, body).then(() => {
    gsap.to('.pop', { autoAlpha: 0 });
    clearContents($userCardInner);
    renderUserList();
  });
};

renderUserList();

$userCardInner.addEventListener('click', handleDelete);
$createButton.addEventListener('click', handleCreate);
$cancleButton.addEventListener('click', handleCancle);
$doneButton.addEventListener('click', handleDone);
