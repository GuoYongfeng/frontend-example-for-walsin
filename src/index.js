import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

// import '@babel/polyfill' 配置了babel，polyfill会自动引入
import './index.less'

console.log(PRODUCTION);
console.log(GLOBAL_HTTP_CTX);

let root = document.getElementById('app')

ReactDOM.render(<App />, root)

if (module.hot) {
    module.hot.accept();
}
