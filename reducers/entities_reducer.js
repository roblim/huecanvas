import { combineReducers } from 'redux';
import rooms from './rooms_reducer';
import scenes from "./scenes_reducer";
// import lights from "./discover_reducer";
import LightReducer from './lights_reducer';

export default combineReducers({
  rooms,
  scenes,
  lights: LightReducer
});
