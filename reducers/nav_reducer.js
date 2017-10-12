import AppNavigator from '../util/nav_config_util'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('RoomNew'));

const navReducer = (state = {}, action) => {
	console.log(AppNavigator);
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer
