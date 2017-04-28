import React,{ Component } from 'react';
import { Icon } from 'antd';
import './style.css'

export default class PoTable extends Component{
    //拼接基础信息title 和 值
    mergeBaseInfoTitleData(baseInfoTitle,data){
      var list=[];
      for(let i=0;i<data.length;i++){
        var valuearry=[];
        let datainfo=data[i].baseInfo
        for(let k in datainfo){
          let value=datainfo[k]
          let valuekey=k
          for(let j in baseInfoTitle){
            if(valuekey==baseInfoTitle[j].dataIndex){
                let obj={
                  key:valuekey,
                  title:baseInfoTitle[j].title,
                  value:value
                }
              valuearry.push(obj)
              }
            }
          }
          list.push(valuearry)
        }
        return list;
      }

      //遍历 基础信息title和value
      baseInfoList(newtitleAndValue,index){
        return (
          newtitleAndValue[index].map((data,index)=>{
            return (
                    <div key={index} className="titleBox">
                      <span className="titleSpanKey">{data.title}:</span>
                      <span className="titleSpanValue">{data.value}</span>
                    </div>
              )
          })
        )
      }
  //每一条商品信息,title,每一条询价单总信息(包括基础信息和每一条商品信息),每一条询价单下的商品length,每一条询价单下的商品index,
  //需要合并的列数,
    tbodyList(goodsData,title,dataInfo,datagoodslength,index2,rowSpanNumber){
      var cloumns=[];
//判断下标，因为title 数量有限，当合并列的时候，需要把除了第一条商品，其他的不进行渲染，所以只把下标为0的第一条商品信息，的title进行赋满值，其他的少赋值
      if(index2==0){
        for(let i=0;i<title.length;i++){
          let obj={
            key:title[i].dataIndex,
            title:title[i].title,
            render:title[i].render,
            rowSpan:title[i].rowSpan
          }
          cloumns.push(obj)
        }
      }else{
        for(let i=0;i<title.length-rowSpanNumber;i++){
          let obj={
            key:title[i].dataIndex,
            title:title[i].title,
            render:title[i].render,
            rowSpan:title[i].rowSpan
          }
          cloumns.push(obj)
        }
      }
      //进行合并，根据key 对应value
      for(let j=0;j<cloumns.length;j++){
        for(let k in goodsData){
          if(cloumns[j].key==k){
            cloumns[j].value=goodsData[k]
          }
        }
      }
      return(
        cloumns.map((data,index)=>{
          return(
              data.rowSpan ? (
                  <td rowSpan={datagoodslength}>
                    <div  className="bodyBox">
                      {
                      data.render ? data.render(data,dataInfo):<span>{data.value}</span>
                      }
                    </div>
                  </td>
              ):(
                <td>
                  <div  className="bodyBox">
                    {
                    data.render ? data.render(data,dataInfo):<span>{data.value}</span>
                    }
                  </div>
                </td>
              )

          )
        })
      )
    }

  render(){
    const title=this.props.title;  //title 相当于cloumns
    let baseInfoTitle=this.props.baseInfoTitle  //基础信息的title(动态)
    let objlength=Object.keys(title).length; //title长度 用于(动态)行合并
    let data=this.props.dataSource; //整体数据源
    let rowSpanNumber=this.props.rowSpanNumber; //需要列合并的列数
    let isRowSpan=this.props.isRowSpan; //是否还需列合并
    const newBaseInfoTitleData=data && this.mergeBaseInfoTitleData(baseInfoTitle,data) //拼接后的title和value值
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
          data.length>0 ? (
            isRowSpan ? (
              data.map((datalist,index1)=>{
                let datagoodslength=datalist.goodsInfo.length;//每一条询价单下商品的长度，用于列合并
                return(
                  //基础信息 tr
                  <tbody className="tableBody">
                    <tr>
                      <td colSpan={objlength} className="tableBaseInfo">
                        {this.baseInfoList(newBaseInfoTitleData,index1)}
                      </td>
                    </tr>
                    {
                      datalist.goodsInfo.map((goodsData,index2)=>{
                        //商品信息tr    index2 => 每一条询价单下的商品 下标
                        return (
                          <tr>
                             {this.tbodyList(goodsData,title,datalist,datagoodslength,index2,rowSpanNumber)}
                          </tr>
                        )
                      })
                    }
                </tbody>
                )
              })
            ):(
              data.map((datalist,index1)=>{
                let datagoodslength="";
                return(
                  //基础信息 tr
                  <tbody >
                    <tr>
                      <td colSpan={objlength} className="tableBaseInfo">
                        {this.baseInfoList(newBaseInfoTitleData,index1)}
                      </td>
                    </tr>
                    {
                      datalist.goodsInfo.map((goodsData,index2)=>{
                        //商品信息tr    index2 => 每一条询价单下的商品 下标
                        return (
                          <tr>
                             {this.tbodyList(goodsData,title,datalist,datagoodslength,index2,rowSpanNumber)}
                          </tr>
                        )
                      })
                    }
                </tbody>
                )
              })
            )
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
