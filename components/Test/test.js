import React,{Component} from 'react';
import { connect} from 'react-redux';  //必须
import {bindActionCreators} from 'redux'; //必须
import * as testActions from './reducers'; //引入方法
// import './style.css'
const styles=require('./style.css');
console.log(styles)
@connect(
  state => ({
    Testreducer:state.Testreducer
  }),
  dispatch => bindActionCreators({...testActions}, dispatch)
)
export default class Test extends Component{

  render(){
    console.log("testesttesttestt")
    console.log(this.props)
    console.log("test")
    return(
      <div>
        <div>
          <img src={require('../../static/img/compatible_chrome.png')} className={styles.Applogo}/>
        </div>
        <div>
          <img src={require('../../static/img/compatible_firefox.png')} className={styles.Applogo}/>
        </div>
        <div>
          <img src={require('../../static/img/compatible_ie.png')} className={styles.Applogo}/>
        </div>
        <div>
          <img src={require('../../static/img/compatible_opera.png')} className={styles.Applogo}/>
        </div>
        <div>
          <img src={require('../../static/img/compatible_safari.png')} className={styles.Applogo}/>
        </div>
      </div>
    )
  }
}


// function stateRedux (state){
//   console.log("-----state------")
//   console.log(state)
//   console.log("-----state------")
//   return{
//     // initstate:state.initstate
//   };
// };
//
// function actionRedux (dispatch){
//   return{
//     action:bindActionCreators({
//       test,
//       add,
//       del
//     },dispatch)
//   };
// };
//
//  export default connect(stateRedux,actionRedux)(Test);
