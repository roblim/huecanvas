import TabNavigator from '../components/navigator';

<<<<<<< HEAD
const _initialState = () => (
	TabNavigator.router.getStateForAction(
		TabNavigator.router.getActionForPathAndParams('home')
	)
)
=======
const INITIAL_STATE = {
	index: 1,
    routes: [
        { key: 'InitA', routeName: 'roomsNew' },
        { key: 'InitB', routeName: 'home' },
        { key: 'InitC', routeName: 'roomsEdit' }
			   ]
	// return TabNavigator.router.getStateForAction(TabNavigator.router.getActionForPathAndParams('Home'));
};

>>>>>>> scene

const navReducer = (state = _initialState(), action) => {
  const nextState = TabNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


export default navReducer;
