// re-export : 다시 내보내기

export * from './getNode.js'; // getNode.js에서 나온 모든걸 다시 내보냄
export * from './insert.js'; // insert.js에서 나온 모든걸 다시 내보냄
export * from './attr.js';
export * from './css.js';
export * from './showAlert.js';

// export * from './clear.js'; // 이름 내보내기 방법
export { default as clearContents } from './clear.js'; // 기본 내보내기를 이름으로 다시 내보낸 방법
