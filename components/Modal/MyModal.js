import { Modal,Button } from 'antd';
import React,{ Component } from 'react';



class MyModal extends Component{
  render(){
    console.log("MyModal")
    console.log(this.props.showVisible)
    console.log("MyModal")
    return(
      <div>
        <Modal
          title="查新信息"
          visible={this.props.showVisible}
          cancelText="关闭"
          footer={
            <Button key="back" size="large" onClick={this.props.handleOnCancel}>关闭</Button>
          }
          >
        </Modal>
      </div>
    )
  }
}
export default MyModal;
