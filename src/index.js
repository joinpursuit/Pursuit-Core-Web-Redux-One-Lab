import React from 'react'
import ReactDOM from 'react-dom'
import rootReducer from './reducers'
import {createStore} from "redux"
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import './index.css'
import App from './App'

const store = createStore(rootReducer, devToolsEnhancer())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
