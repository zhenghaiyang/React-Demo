import React,{Component} from 'react';
import Login from '../login/Login'

class App extends Component{
  render(){
    return(
      <div>
        {this.props.children || <Login/>}
      </div>
    )
  }
}

module.exports =App;
