import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';
import {hashHistory} from 'react-router';
import {Ueditor,MyTable,MyTableTwo,Test,AddTable} from "../../components";

//import Test from '../../components/test';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

 class MyMenu extends React.Component{

  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      UeditorCount:2    //根据值进行 菜单右边显示
    }


    this.UeditorCount=2 //根据值进行 菜单右边显示

  }
  handleClick(e){
    console.log(e);
    switch (e.key) {
      case "1":
        this.UeditorCount=1;
        break;
      case "2":
        this.UeditorCount=2;
        break;
      case "3":
        this.UeditorCount=3;
        break;
      case "4":
        this.UeditorCount=4;
        break;
      case "5":
        this.UeditorCount=5;
        break;
      default:
        break;
    }

    this.setState({
      UeditorCount:this.UeditorCount
    })
  }


  render(){
    return(
      <div>
      <Menu
        onClick={this.handleClick}
        style={{ width: 240,float:'left' }}
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">百度Ueditor富文本编辑框</Menu.Item>
            <Menu.Item key="2">蚂蚁金服Table组件</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">蚂蚁金福Table组件查看信息</Menu.Item>
            <Menu.Item key="4">AddTable12222</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 92</Menu.Item>
          <Menu.Item key="10">Option 102</Menu.Item>
          <Menu.Item key="11">Option 113</Menu.Item>
          <Menu.Item key="12">Option 123</Menu.Item>
        </SubMenu>
      </Menu>
          <div style={{float:"left",height:"560px"}}>
            {  this.state.UeditorCount==1 && <Ueditor/>   }  {/* Ueditor 组件*/}
            {  this.state.UeditorCount==2 && <MyTable/>  }   {/*ant_design Table 组件*/}
            {  this.state.UeditorCount==3 && <MyTableTwo/>  }   {/*ant_design Table 组件*/}
            {  this.state.UeditorCount==4 && <AddTable/>  }
            {  this.state.UeditorCount==5 && <Test/>  }
          </div>
      </div>
    )
  }
}
//模块导出，因为这已经在路由里是一个模块了
module.exports = MyMenu;
