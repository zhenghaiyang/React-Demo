import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';
// import homeReducer from '../features/home/redux/reducer';



import Testreducer from '../components/Test/reducers';
import inforeducer from '../components/BuyAndSell/reducer';


const rootReducer = combineReducers({
	routing: routerReducer,
	Testreducer,
	inforeducer
	// home: homeReducer,
});

export default rootReducer;
