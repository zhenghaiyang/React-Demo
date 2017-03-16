import React,{ Component } from 'react';
import {Form,Input, Icon,Button} from 'antd';
import AddressSelect from './AddressSelect';
const FormItem = Form.Item;
import './style.css';

class InfoBox extends Component{

  constructor(props){
    super(props);
    this.add=this.add.bind(this);
    this.remove=this.remove.bind(this);
  }

  add(){
    this.props.addInfo(this.props.data,this.props.infoType);
  }

  remove(index){
    console.log(index)
  }

  render(){
    console.log(this.props)
    const { getFieldDecorator, getFieldValue } = this.props.form;
    debugger;
    if(this.props.infoType=="buyer"){
      if(!this.props.data){
        var infolist=[];
        infolist.push(new Object());
      }else{
        var infolist=this.props.data.buyer;
      }
    }else if(this.props.infoType=="seller"){
      if(!this.props.data){
        var infolist=[];
        infolist.push(new Object());
      }else{
          var infolist=this.props.data.seller;
      }
    }
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 22 },
    };
    const formItems=infolist.map((data,index)=>{
        if(!index==0){
          var candel=true;
        }else{
          var candel=false
        }
      return(
        <div>
        <FormItem>
          {getFieldDecorator(`names-${index}`, {
            initialValue:data.name,
            rules: [{
              required: true,
              message: "名字不能为空",
            }]
          })(
            <Input placeholder="请输入名字" style={{ width:"140px",display:"block" }} />
          )}
          </FormItem>
           <div>
              <AddressSelect/>
          </div>
          <FormItem>
          {getFieldDecorator(`age-${index}`, {
            initialValue:data.address,
            rules: [{
              required: true,
              message: "地址不能为空",
            }]
          })(
            <Input placeholder="请输入地址" style={{ width:"400px",marginTop:"15px"}} />
          )}
          {candel && (<Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              style={{marginLeft:"120px"}}
              onClick={() => this.remove(index)}
            />)}
        </FormItem>
        </div>
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
