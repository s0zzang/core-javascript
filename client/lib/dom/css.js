/* -------------------------------------------- */
/*                    css 함수                   */
/* -------------------------------------------- */
function getCss(node, prop) {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style))
    throw new SyntaxError(
      'getCss 함수의 두번째 인수는 유효한 속성이 아닙니다.'
    );
  return getComputedStyle(first)[prop];
}

function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style))
    throw new SyntaxError(
      'setCss 함수의 두번째 인수는 유효한 속성이 아닙니다.'
    );
  if (!value)
    throw new Error('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
  node.style[prop] = value;
}

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

/* -------------------------------------------- */
/*                   class 함수                  */
/* -------------------------------------------- */
function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string')
    throw new TypeError('addClass의 두번째 인수는 문자 타입이어야 합니다.');
  node.classList.add(className);
}

function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string')
    throw new TypeError('toggleClass의 두번째 인수는 문자 타입이어야 합니다.');
  return node.classList.toggle(className);
}

function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (!className) {
    node.className = '';
    return;
  }
  const isExist = [...node.classList].find((prop) => prop === className);
  if (!isExist)
    throw new Error(
      'removeClass 함수의 두번째 인수는 클래스 리스트에 존재하지 않아 삭제가 불가능합니다.'
    );

  node.classList.remove(className);
}
