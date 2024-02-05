/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

const first = document.querySelector('.first');
const spanList = document.querySelectorAll('span');

getNode('.first', 'h1');
getNodes('span');

/* 문서 대상 확인 */
// - matches
// - contains

first.matches('span'); // true : first에 span 셀렉터가 있어?
getNode('h1').contains(getNode('.second'));
