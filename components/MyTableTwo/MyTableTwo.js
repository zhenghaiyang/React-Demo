import {Table,message,Button} from 'antd';
import React,{Component} from 'react';
import  MyModal  from '../Modal/MyModal';
import { connect} from 'react-redux';  //必须
import {bindActionCreators} from 'redux'; //必须
import  * as tableReducerActions from './reducer';

const dataSource=[];
for(let i=0;i<30;i++){
  dataSource.push({
    key:i+10,
    id:i,
    rowkey:i+50,
    age:i,
    name:'胡彦斌',
    address:'西湖区湖底公园'+i+"",
    time:'2017-10-20'
  })
}



class MyTableTwo extends Component{

    constructor(props){
      super(props);
      this.state={
        showVisible:false,
        selectedRowKeys:[]
      }
      this.onchangeRowkey=this.onchangeRowkey.bind(this)
      this.handleOnCancel=this.handleOnCancel.bind(this);//Modal 关闭方法
      this.handleAdd=this.handleAdd.bind(this)
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

    onchangeRowkey(key,row){
      console.log(key)
      this.setState({
        selectedRowKeys:key
      })
      console.log(row)
    }

    handleAdd(){
      this.props.addTable()
    }


  render(){
    console.log("22222222222")
    console.log(this.props)
    console.log("000000000000")
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
    const {selectedRowKeys}=this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange:this.onchangeRowkey,
      }

    return(

      <div>
        <Table
          rowSelection={rowSelection}
          style={{width:'760px', float:'left',margin:"10px 0px 0px 30px"}}
          columns={columns}
          dataSource={dataSource}
          pagination={{pageSize:5}}
          bordered={true}
          rowKey={record => record.rowkey}
        ></Table>
        <Button onClick={this.handleAdd}>确定</Button>
        <div style={{float:'left'}}>
          <Table
            columns={columns}
            />
        </div>
        <MyModal showVisible={this.state.showVisible} handleOnCancel={this.handleOnCancel}/>

      </div>
    )
  }
}

function stateRedux (state){
  return{
     tableReducer:state.tableReducer
  };
};
// @connect(
//   state => ({financeManageGridWrap:state.financeManageGridWrap}),
//   dispatch => bindActionCreators({...financeManageGridWrapActions}, dispatch)
// )
function actionRedux (dispatch){
    return bindActionCreators({
      ...tableReducerActions
    },dispatch)
};


export default connect(stateRedux,actionRedux)(MyTableTwo);
