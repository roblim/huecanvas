import { combineReducers } from "redux";
import scenes from "./scenes_reducer";
import bridges from "./discover_reducer";

export default combineReducers({
  scenes,
  bridges
});
