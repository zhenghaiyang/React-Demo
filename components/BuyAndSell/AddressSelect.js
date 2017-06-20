import { Select } from 'antd';
import React,{ Component } from 'react';
const Option = Select.Option;


class AddressSelect extends Component{

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(value){
    console.log(value)
  }
  render(){
    return(
    <div>
      <Select defaultValue="河南" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="北京">北京</Option>
        <Option value="南京">南京</Option>
        <Option value="河南">河南</Option>
        <Option value="山东">山东</Option>
      </Select>
      <Select defaultValue="郑州" style={{ width: 120,marginLeft:"12px" }}>
        <Option value="朝阳区">朝阳</Option>
        <Option value="郑州">郑州</Option>
        <Option value="青海">青海</Option>
      </Select>
      <Select defaultValue="金水区" style={{ width: 120,marginLeft:"12px" }}>
        <Option value="金水区">金水区</Option>
        <Option value="郑东新区">郑东新区</Option>
        <Option value="管城区">管城区</Option>
      </Select>
    </div>
    )
  }
}

export default AddressSelect;
