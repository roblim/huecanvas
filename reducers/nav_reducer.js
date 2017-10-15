import TabNavigator from '../components/navigator';

const _initialState = () => (
	TabNavigator.router.getStateForAction(
		TabNavigator.router.getActionForPathAndParams('home')
	)
)

const navReducer = (state = _initialState(), action) => {
  const nextState = TabNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


export default navReducer;
