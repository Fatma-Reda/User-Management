import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import reducers from './store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

// this line should be always commented unless you are working with developer tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
