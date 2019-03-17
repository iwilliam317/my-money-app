import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import thunk from 'redux-thunk'

import App from './main/app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))