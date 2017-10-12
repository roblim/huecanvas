import { combineReducers } from "redux";
import scenes from "./scenes_reducer";
import lights from "./discover_reducer";


export default combineReducers({
  scenes,
  lights
});
