import { connect } from 'react-redux';
import { selectLights } from '../../reducers/selectors';
import LightIndex from './light_index';

const mapStateToProps = (state, ownProps) => ({
  user: state.admin.user,
  lights: selectLights(state)
});

const mapDispatchToProps = (dispatch) => ({

});

const LightIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LightIndex);

export default LightIndexContainer;
