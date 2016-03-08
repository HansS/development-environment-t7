// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Redux reducers.
import reducers from './reducers'

// CSS.
import './style/source.scss'

// Routes.
import routes from './routes'

// Redux store.
const store = createStore(reducers)

// Redux provider.
const template = (
<Provider store={store}>
{routes}
</Provider>
)

// DOM element.
const el = document.getElementById('app')

// Render the app.
ReactDOM.render(template, el)
