// 노드 환경에서 실행하기 : node server/index.js
const server = require('live-server');

const params = {
    host: 'localhost',
    port: 3000,
    open: false,
    root: './client'
}

server.start(params);