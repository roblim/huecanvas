import { combineReducers } from 'redux';
import nav from './nav_reducer'
import entities from './entities_reducer';
import { AdminReducer } from './admin_reducer';
// import errors from './errors_reducer';

const RootReducer = combineReducers({
  entities,
  admin: AdminReducer,
  navigation: nav
});

export default RootReducer;

// {
//   entities: {
//     ...
//   },
//   admin: {
//     bridge: (bridge object),
//     user: (user object),
//     bridgeIP: (bridge ip address)
//   }
// }
