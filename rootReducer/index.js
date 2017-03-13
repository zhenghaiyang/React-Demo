import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';
// import homeReducer from '../features/home/redux/reducer';



import Testreducer from '../components/Test/reducers';



const rootReducer = combineReducers({
	routing: routerReducer,
	Testreducer,
	// home: homeReducer,
});

export default rootReducer;
