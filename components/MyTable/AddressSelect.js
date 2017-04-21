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
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120,marginLeft:"12px" }} allowClear disabled>
        <Option value="lucy">Lucy</Option>
      </Select>
    </div>
    )
  }
}

export default AddressSelect;
