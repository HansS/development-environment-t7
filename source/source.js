// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Redux reducers.
import reducers from './reducers'

// CSS.
import './style/source.scss'

// Components.
import App from './components/app'

// DOM element.
const el = document.getElementById('app')

// Redux store.
const store = createStore(reducers)

// Redux provider.
const template = (
<Provider store={store}>
<App />
</Provider>
)

ReactDOM.render(template, el)
