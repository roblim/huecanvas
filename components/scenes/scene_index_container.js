import { connect } from "react-redux";
import SceneIndex from "./scene_index";
import { setScene, fetchScenes, fetchScene, deleteScene, createScene } from "../../actions/scene_actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    scenes: Object.keys(state.entities.scenes).map((id) => ({
      [`${id}`]: state.entities.scenes[id]
    }))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  fetchScenes: () => dispatch(fetchScenes()),
  fetchScene: (id) => dispatch(fetchScene(id)),
  deleteScene: (id) => dispatch(deleteScene(id)),
  createScene: (scene) => dispatch(createScene(scene)),
  setScene: (scene) => dispatch(setScene(scene))
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneIndex);
