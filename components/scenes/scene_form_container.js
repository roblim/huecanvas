import { connect } from "react-redux";
import SceneForm from "./scene_form";
import { createScene } from "../../actions/scene_actions";

const mapStateToProps = (state, ownProps) => ({
  scene: state.posts[ownProps.match.params.postId]
})
