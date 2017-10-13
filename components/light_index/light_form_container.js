import { connect } from 'react-redux';
import LightForm from './light_form';
import { updateLightName } from '../../actions/light_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.admin.user,
  light: ownProps.light
});

const mapDispatchToProps = dispatch => ({
  updateLightName: (user, lightId, name) =>
    dispatch(updateLightName(
      user,
      lightId,
      name
    ))
});

const LightFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightForm);

export default LightFormContainer;
