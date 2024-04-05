import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

var userName = 'kishori';
let App1 = <App /> ;

const reactElement = React.createElement(
  'h2',
  {
    id : 'heading',
    class : 'fs-1'
  },
  'radhikanarayana sainger',
  userName,
  App1
)

ReactDOM.createRoot(document.querySelector('#root')).render( reactElement 
)
    