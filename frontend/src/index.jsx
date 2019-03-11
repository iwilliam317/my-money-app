import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

import promise from 'redux-promise'

import App from './main/app'

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))