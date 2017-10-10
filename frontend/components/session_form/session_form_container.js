import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { login, logout, signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
    return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch, { location }) => {

  const formType = location.pathname.slice(1);
  const action = (formType === 'login') ? login : signup;
  return {
    action: (user) => dispatch(action(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    formType

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
