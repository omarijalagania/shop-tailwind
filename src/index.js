import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { rootReducer } from './components/store/rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reportWebVitals from './reportWebVitals'
import { ProductProvider } from './context/productContext'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), composeEnhancers()),
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
