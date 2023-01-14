import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import ResetCSS from './styles/resetcss.css'
import { Provider } from "react-redux";
import store from "../src/state/configure.store"


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <ResetCSS/>
  </>,
)
