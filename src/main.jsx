import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import ResetCSS from './styles/resetcss.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ResetCSS/>
  </>,
)
