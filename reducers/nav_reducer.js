import TabNavigator from '../components/navigator'

const INITIAL_STATE = {
	index: 1,
    routes: [
        { key: 'InitA', routeName: 'Home' },
        { key: 'InitB', routeName: 'RoomsNew' },
        // { key: 'InitC', routeName: '/rooms/edit' }
    ]
	// return TabNavigator.router.getStateForAction(TabNavigator.router.getActionForPathAndParams('Home'));
};



export default function navigation(state = INITIAL_STATE, action) {
    switch (action.type) {
            case 'login':
                return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            case 'Home':
            case 'RoomsNew':
            case 'logout':
                return AppNavigator.router.getStateForAction(action, state);
        }
    return state;
}
