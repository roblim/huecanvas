import TabNavigator from '../components/navigator'

const INITIAL_STATE = {
	index: 1,
    routes: [
        { key: 'InitA', routeName: 'roomsNew' },
        { key: 'InitB', routeName: 'home' },
        { key: 'InitC', routeName: 'roomsEdit' },
				{ key: 'InitD', routeName: 'roomTemp'}
			   ]
	// return TabNavigator.router.getStateForAction(TabNavigator.router.getActionForPathAndParams('Home'));
};


const navReducer = (state = INITIAL_STATE, action) => {
  const nextState = TabNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


export default navReducer


// export default function navigation(state = INITIAL_STATE, action) {
//     switch (action.type) {
//             case 'home':
//                 return TabNavigator.router.getStateForAction(action, state);
//             case 'home':
// 								return TabNavigator.router.getStateForAction(action, state);
//             case 'roomsNew':
// 								return TabNavigator.router.getStateForAction(action, state);
//             case 'roomsEdit':
//                 return AppNavigator.router.getStateForAction(action, state);
//         }
//     return state;
// }
