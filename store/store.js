import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import createLoggerMiddleware from 'redux-logger';

const middlewares = [thunk];

middlewares.push(createLoggerMiddleware({}));


const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
