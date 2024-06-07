import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import { userInteractionReducer, initialStateUi } from './reducers/uiReducer';
import { initialStateProducts, productsReducer } from './reducers/productReducer';

const initialState = {
  ui: Map(initialStateUi),
  products: Map(initialStateProducts)
};

const rootReducer = {
  ui: userInteractionReducer,
  products: productsReducer
}

const store = createStore(
  combineReducers(rootReducer),
  initialState,
  applyMiddleware(thunk)
);

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
