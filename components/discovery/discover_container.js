import { connect } from "react-redux";
import Discover from "./discover";
import { fetchBridges } from "../../actions/discover_actions";

const mapStateToProps = (state) => {
  return {
    bridges: Object.keys(state.scenes).map((id) => state.bridges[id])
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBridges: () => dispatch(fetchBridges())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
