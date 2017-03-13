import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';
// import homeReducer from '../features/home/redux/reducer';



import reducer from '../redux/redux';



const rootReducer = combineReducers({
	// routing: routerReducer,
	reducer,
	// home: homeReducer,
});

export default rootReducer;
