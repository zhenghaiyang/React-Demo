import React,{Component} from 'react';
import { connect} from 'react-redux';  //必须
import {bindActionCreators} from 'redux'; //必须
import { test,add,del } from '../../redux/action'; //引入方法


// @connect(
//   state => ({
//     initstate:state.initstate
//   }),
//   dispatch => bindActionCreators({test,add,del}, dispatch)
// )
class Test extends Component{

  render(){
    console.log(this.props)
    return(
      <h1>444444</h1>
    )
  }
}


function stateRedux (state){
  console.log("-----state------")
  console.log(state)
  console.log("-----state------")
  return{
    // initstate:state.initstate
  };
};

function actionRedux (dispatch){
  return{
    action:bindActionCreators({
      test,
      add,
      del
    },dispatch)
  };
};

 export default connect(stateRedux,actionRedux)(Test);
