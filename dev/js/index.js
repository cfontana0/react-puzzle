import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
// import createLogger from 'redux-logger';
import allReducers from './reducers'
import Container from './containers/Container'

// const logger = createLogger();

const store = createStore(
    allReducers,
    // applyMiddleware(thunk, promise, logger)
    applyMiddleware(thunk, promise)
)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('root')
)
