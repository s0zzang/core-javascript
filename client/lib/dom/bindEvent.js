import { getNode } from './getNode.js';

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);
  node.addEventListener(type, handler);
  // 리턴값으로 함수를 내보냄 : 클로저
  return () => node.removeEventListener(type, handler);
}

// 함수 실행시 함수(이벤트를 제거할 수 있는)가 전달됨
// const remove = bindEvent('.first', 'click', handler);

/* 아래처럼 쓰는 것과 동일함
getNode('.deleteEvent').addEventListener('click', () => {
  first.removeEventListener('click', handler);
}); 
*/
