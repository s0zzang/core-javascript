import { getNode } from './getNode.js';

function getAttr(el, prop) {
  if (typeof el === 'string') el = getNode(el);
  if (typeof prop !== 'string')
    throw new Error('getAttr 함수의 두 번째 인수는 문자 타입이어야 합니다요?');
  return el.getAttribute(prop);
}

function setAttr(el, prop, value) {
  if (typeof el === 'string') el = getNode(el);
  if (!value)
    throw new Error('setAttr 함수의 세번째 인수는 필수 입력 값입니다.');
  if (typeof prop !== 'string' || typeof value !== 'string')
    throw new TypeError('setAttr 함수의 두번째 인수는 문자 타입이어야 합니다.');
  return el.setAttribute(prop, value);
}

const attr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);
