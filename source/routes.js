// Dependencies.
import React from 'react'
import { Route, Router, hashHistory } from 'react-router'

// Components.
import App from './components/app'

// Match routes to components.
const routes = (
<Router history={hashHistory}>

<Route
path='/'
component={App}
/>

</Router>
)

// Expose routes.
export default routes
