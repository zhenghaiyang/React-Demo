import React,{ Component } from 'react';
import { Icon } from 'antd';
import './style.css'

export default class PoTable2 extends Component{
    //基础信息
      baseData(datalist,index,baseInfoTitle){
        var list=[];
        for(let i=0;i<baseInfoTitle.length;i++){
          var arry1=[]
          for(let k in datalist){
            if(baseInfoTitle[i].dataIndex==k){
              let obj={
                key:k,
                title:baseInfoTitle[i].title,
                value:datalist[k]
              }
              arry1.push(obj)
            }
          }
          list.push(arry1)
        }
        return (
          list.map((data,index1)=>{
            return(
              data.map((data1,index2)=>{
                return(
                  <div key={index} className="titleBox">
                        <span className="titleSpanKey" >{data1.title}:</span>
                        <span className="titleSpanValue">{data1.value}</span>
                  </div>
                )
              })
            )
          })
        )
      }


      //body
      bodylist(datalist,index,title){
        var list=[];
        for(let i=0;i<title.length;i++){
              let obj={
                key:title[i].dataIndex,
                title:title[i].title,
                render:title[i].render,
              }
            list.push(obj)
          }
        for(let j=0;j<list.length;j++){
          for(let k in datalist){
            if(list[j].key==k){
              list[j].value=datalist[k]
            }
          }
        }
        return(
          list.map((data1,index2)=>{
            //console.log(data1)
            return(
              <td>
                <div  className="bodyBox">
                  {
                  data1.render ? data1.render(data1,datalist,index):<span>{data1.value}</span>
                  }
                </div>
              </td>
            )
          })
        )
      }


  render(){
    const title=this.props.title;  //title 相当于cloumns
    let baseInfoTitle=this.props.baseInfoTitle  //基础信息的title(动态)
    let objlength=Object.keys(title).length; //title长度 用于(动态)行合并
    let data=this.props.dataSource; //整体数据源
    return(
      <table cellSpacing='0' cellPadding='0' className="tbaleBox">
        <thead className="tableheard">
            <tr>
              {
                title.map((data,index)=>{
                  let number=data.width && data.width || ''    //title 有width 属性
                  return(
                    <th key={index+`data.title`} style={{width:number}} >{data.title}</th>
                  )
                })
              }
            </tr>
        </thead>
        {
          data.length >0 ? (
              data.map((datalist,index1)=>{
                return(
                  //基础信息 tr
                  <tbody className="tableBody">
                    <tr>
                      <td colSpan={objlength} className="tableBaseInfo">
                        {this.baseData(datalist,index1,baseInfoTitle)}
                      </td>
                    </tr>
                    <tr>
                      {this.bodylist(datalist,index1,title)}
                    </tr>
                </tbody>
                )
              })
          ):(
            <tbody>
              <tr>
                <td colSpan={objlength}>
                  <div style={{textAlign:'center',padding:"20px"}}>
                    <Icon type="frown-o" /> 暂无数据
                  </div>
                </td>
              </tr>
            </tbody>
          )
        }
      </table>
    )
  }
}
