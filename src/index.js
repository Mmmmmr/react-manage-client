import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/antd/dist/antd.min.css'
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";
import App from './app'

const user = storageUtils.getUser()
memoryUtils.user = user
console.log(memoryUtils.user)

ReactDOM.render(<App />, document.getElementById('root'))