import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

<<<<<<< HEAD:source/main.js
import './main.scss'
=======
import App from './components/app';
import reducers from './reducers';
>>>>>>> 537e6d31ff95638c6855a55673dfd7b30d178708:source/index.js

import './index.scss';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    document.querySelector('[data-app]')
);