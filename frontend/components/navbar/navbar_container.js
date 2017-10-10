import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./navbar";
import { fetchUser } from "../../actions/users_actions";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser   
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
