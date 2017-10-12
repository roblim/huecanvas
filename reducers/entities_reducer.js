import { combineReducers } from 'redux';
import rooms from './rooms_reducer';
import { LightReducer } from './lights_reducer';

export default combineReducers({
	rooms,
	lights: LightReducer
});
