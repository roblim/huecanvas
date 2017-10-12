<<<<<<< HEAD:store/store.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];

middlewares.push(createLogger({}));

=======
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import createLoggerMiddleware from 'redux-logger';

const middlewares = [thunk];
>>>>>>> 0245ab93a2e52a36935bdf0fb04793b279936271:store/store.js

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
