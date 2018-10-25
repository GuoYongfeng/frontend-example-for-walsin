import React from 'react'
import mirror, { render } from 'mirrorx';
import logger from "redux-logger";
import App from './layouts/App.js';

console.log(PRODUCTION);
console.log(GLOBAL_HTTP_CTX);

mirror.defaults({
    historyMode: "hash",
    middlewares: [logger]
});

let root = document.getElementById('app');
render(<App />, root);

if (module.hot) {
    module.hot.accept();
}
