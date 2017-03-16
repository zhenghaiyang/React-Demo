import {Table,message} from 'antd';
import React,{Component} from 'react';
import  MyModal  from '../Modal/MyModal';


const dataSource=[];
for(let i=0;i<30;i++){
  dataSource.push({
    key:i,
    id:i,
    age:i,
    name:'胡彦斌',
    address:'西湖区湖底公园'+i+"",
    time:'2017-10-20'
  })
}



export default class MyTableTwo extends Component{

    constructor(props){
      super(props);
      this.state={
        showVisible:false
      }
      this.handleOnCancel=this.handleOnCancel.bind(this);//Modal 关闭方法
    }

    //查看项目信息
    showInfoMessage(obj){
      this.setState({
        showVisible:true
      })

    }

    handleOnCancel(){
      this.setState({
        showVisible:false
      })
    }

  render(){

    const columns = [
      {
        title:'ID',
        dataIndex:'id',
        key:'id',
        sorter:(a,b)=>a.id-b.id,
      },
      {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter:(a,b)=>a.age-b.age,
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },{
      title:'日期',
      dataIndex:'time',
      key:'time'
    },{
      title:'头像',
      dataIndex:'img',
      key:'img',
      width:150,
      render:()=>(
        <img src={require("../../static/img/tx.jpg")} style={{width:'150px',height:'100px'}}/>
      )
    },{
      title:'操作',
      render:(obj)=>(
        <span>
          <a onClick={()=>this.showInfoMessage(obj)}>查看</a>
          <span className="ant-divider" />
          <a onClick={()=>this.delInfoMessage(index)}>删除</a>
        </span>
      )
    }];



    return(
      <div>
        <Table
          style={{width:'760px', height:'260px',float:'left',margin:"10px 0px 0px 30px"}}
          columns={columns}
          dataSource={dataSource}
          pagination={{pageSize:5}}
          bordered={true}
        ></Table>
        <MyModal showVisible={this.state.showVisible} handleOnCancel={this.handleOnCancel}/>
      </div>
    )
  }
}
