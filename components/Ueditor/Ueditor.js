import React, { Component } from 'react';


export default class Ueditor extends Component{

  constructor(props){
    super(props);
    this.ueditor=null;
  }

  componentWillMount(){

  }

  componentDidMount(){
    this.ueditor=new UE.ui.Editor(); //构造一个editor
    this.ueditor.render('editor'); //执行UE的渲染方法
    this.ueditor.addListener("contentChange", function () {
    }.bind(this)); //监听
    this.ueditor.fireEvent("contentChange")
  }

  render(){
    console.log("222222")
    return(
      <div>
        <div id="editor"  style={{width:'660px', height:'260px',float:'left',margin:"30px 0px 0px 30px"}} ></div>
      </div>
    )
  }
}
