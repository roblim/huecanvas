import { combineReducers } from "redux";
import scenes from "./scenes_reducer";
import Discover from "./discover_reducer";

export default combineReducers({
  scenes,
  Discover
});
