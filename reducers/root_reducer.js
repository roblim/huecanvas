import { combineReducers } from 'redux';
import navReducer from './nav_reducer'
import entities from './entities_reducer';
// import errors from './errors_reducer';

const RootReducer = combineReducers({
  entities,
  nav: navReducer
});

export default RootReducer;
