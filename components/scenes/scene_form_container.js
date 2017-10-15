import { connect } from "react-redux";
import SceneForm from "./scene_form";
import { createScene } from "../../actions/scene_actions";

const mapStateToProps = (state) => {
  console.log("state", state);
  let lights = Object.keys(state.entities.lights);
  return {
    lights
  }
}

const mapDispatchToProps = (dispatch) => ({
  createScene: (scene) => dispatch(createScene(scene))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneForm)
