import { connect } from "react-redux";
import Discover from "./discover";
import { fetchBridges, fetchLights, createUser, setUser } from "../../actions/discover_actions";

const mapStateToProps = (state) => {
  let bridge = state.admin.bridge;
  let user = state.admin.user;
  let lights = !!state.entities.lights;
    return {
      bridge,
      user,
      lights
      // lights: Object.keys(state.entities.lights).map((id) => state.entitieslights[id])
    }

}


const mapDispatchToProps = (dispatch) => ({
  createUser: (bridge) => dispatch(createUser(bridge)),
  fetchBridges: () => dispatch(fetchBridges()),
  fetchLights: (user) => dispatch(fetchLights(user)),
  setUser: (bridge, user) => dispatch(setUser(bridge, user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
