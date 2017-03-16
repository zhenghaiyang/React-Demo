import React,{ Component } from 'react';
import InfoBox from './InfoBox';
import { connect} from 'react-redux';  //必须
import {bindActionCreators} from 'redux'; //必须
import { addInfo,delInfo,updateName,updateAge } from './reducer';


class BuyAndSell extends Component{

  render(){
    return(
      <div>
        <h1>买家信息</h1>
        <InfoBox infoType="buyer"
          data={this.props.infodata}
          addInfo={this.props.action.addInfo}
          delInfo={this.props.action.delInfo}
          updateName={this.props.action.updateName}
          updateAge={this.props.action.updateAge}
        />
        <h1>卖家信息</h1>
        <InfoBox infoType="seller"
          data={this.props.infodata}
          addInfo={this.props.action.addInfo}
          delInfo={this.props.action.delInfo}
          updateName={this.props.action.updateName}
          updateAge={this.props.action.updateAge}
        />
      </div>
    )
  }

}

function stateRedux (state){
  console.log("-----state------")
  console.log(state)
  console.log("-----state------")
  return{
     infodata:state.inforeducer
  };
};

function actionRedux (dispatch){
  return{
    action:bindActionCreators({
      addInfo,
      delInfo,
      updateName,
      updateAge
    },dispatch)
  };
};


export default connect(stateRedux,actionRedux)(BuyAndSell);
