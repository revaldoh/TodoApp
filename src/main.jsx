import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parent from './componenet/Parent.jsx'
import Child from './componenet/Child.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent/>
    <Child/>  
  </React.StrictMode>,
)
