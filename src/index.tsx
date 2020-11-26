import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import {Provider} from 'react-redux'
import { reducers } from './reducer'
import thunk from 'redux-thunk'
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
