import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore,
} from 'redux';
import { Map } from 'immutable';
import { uiReducer, initialStateUi } from './reducers/uiReducer';

const store = createStore(uiReducer, Map(initialStateUi));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
