/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log(this); // window
  console.log(e.target); // p, article, section 등 클릭된 대상
  console.log(e.currentTarget); // section
  // console.log('%c section', 'color:orange');
});
// article.addEventListener('click', () => {
//   console.log('%c article', 'color:dodgerblue');
// });
// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:hotpink');
// });

/* 캡처링 ----------------------------------------------------------------- */
