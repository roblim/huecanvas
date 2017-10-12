import { combineReducers } from 'redux';
import rooms from './rooms_reducer'
import scenes from "./scenes_reducer";
import lights from "./discover_reducer";

export default combineReducers({
  rooms,
  scenes,
  lights
});
