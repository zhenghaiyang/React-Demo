import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "antd/dist/antd.css";
import {Router,browserHistory,hashHistory} from 'react-router';
import {
	syncHistoryWithStore
} from 'react-router-redux';

//引入路由
import rootRouter from './router/rootRouter';
import rootReducer from './rootReducer';



let store=createStore(rootReducer);

//const history=syncHistoryWithStore(syncHistoryWithStore,store)


ReactDOM.render(
  <Provider store={store}>
      <Router history={hashHistory} routes={rootRouter}/>
  </Provider>,
  document.getElementById("root")
)
