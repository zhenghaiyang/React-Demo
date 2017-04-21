import React,{ Component } from 'react';
import {Form,Input, Icon,Button} from 'antd';
import AddressSelect from './AddressSelect';
const FormItem = Form.Item;


class InfoBox extends Component{

  constructor(props){
    super(props);
    this.add=this.add.bind(this);
  }

  add(){

  }


  render(){
    console.log(this.props)
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 22 },
    };
    debugger;
    if(this.props.infoType=="buyer"){
      if(!this.props.data){
        var infolist=[];
        var listindex=infolist.map((data,index)=>{
          return(index)
        })
        infolist.push(new Object());
        listindex.push(0)
      }else{
        var infolist=this.props.data.buyer;
      }
    }else if(this.props.infoType=="seller"){
      if(!this.props.data){
        var infolist=[];
        var listindex=infolist.map((data,index)=>{
          return(index)
        })
        infolist.push(new Object());
        listindex.push(0)
      }else{
          var infolist=this.props.data.seller;
      }
    }
    const formItems=infolist.map((data,index)=>{
      return(
        <FormItem>
          {getFieldDecorator(`names-${index}`, {
            initialValue:data.name,
            rules: [{
              required: true,
              whitespace: true,
              message: "名字不能为空",
            }],
          })(
            <Input placeholder="请输入名字" style={{ width:"140px",display:"block" }} />
          )}
          <div style={{float:'left',marginTop:"12px"}}>
              <AddressSelect/>
          </div>
          {getFieldDecorator(`age-${index}`, {
            initialValue:data.address,
            rules: [{
              required: true,
              whitespace: true,
              message: "地址不能为空",
            }],
          })(
            <Input placeholder="请输入地址" style={{ width:"400px",marginLeft:"12px",marginTop:"12px"}} />
          )}
        </FormItem>
      )
    })
    return(
      <div style={{marginLeft:"40px"}}>
        {formItems}
        <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add Info
          </Button>
      </div>
    )
  }
}
InfoBox=Form.create()(InfoBox);
export default InfoBox;
