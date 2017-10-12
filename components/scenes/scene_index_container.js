import { connect } from "react-redux";
import SceneIndex from "./scene_index";
import { fetchScenes, fetchScene, deleteScene, createScene } from "../../actions/scene_actions";

const mapStateToProps = (state) => {
  return {
    scenes: Object.keys(state.scenes).map((id) => state.scenes[id])
  }

}

const mapDispatchToProps = (dispatch) => ({
  fetchScenes: () => dispatch(fetchScenes()),
  fetchScene: (scene) => dispatch(fetchScene(scene)),
  deleteScene: (id) => dispatch(deleteScene(id)),
  createScene: (scene) => dispatch(createScene(scene))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneIndex);
