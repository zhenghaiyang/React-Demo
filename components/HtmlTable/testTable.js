import React,{ Component } from 'react';
import {Icon} from 'antd';
import styles from './style1.css'

export default class PoTable extends Component{
  constructor(props){
    super(props)
  }

  baseInfoList(baseInfo,baseInfoTitle,index){
    console.log("2222222222222")
    console.log(baseInfo)
    console.log(baseInfoTitle)
    console.log(index)
    console.log("222222222222")
    debugger;
      var list=[]
      for(let i=0;i<baseInfoTitle.length;i++){
        var arry=[]
        for(let k in baseInfo){
          if(baseInfoTitle[i].dataIndex==k){
              let obj={
                key:k,
                value:baseInfo[k],
                title:baseInfoTitle[i].title
              }
              arry.push(obj)
          }
        }
        list.push(arry)
      }
      console.log("list")
      console.log(list)
      console.log("list")
      return (
        list.map((data,index)=>{
          return (
            data.map((data1,index1)=>{
              return (
                <div key={index} className="titleBox">
                  <span className="titleSpanKey">{data1.title}:</span>
                  <span className="titleSpanValue">{data1.value}</span>
                </div>
              )
            })
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
            render:title[i].render
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
                    <div  className={styles.bodyBox}>
                      {
                      data.render ? data.render(data,dataInfo):<span>{data.value}</span>
                      }
                    </div>
                  </td>
              ):(
                <td>
                  <div  className={styles.bodyBox}>
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

      checkObjeByBaseInfo(data,index){
        // console.log(Object.prototype.toString.call(data)=="[object Object]")
        // console.log(data)
        for(let k in data){
          // if(Object.prototype.toString.call(data[k])=="[]")
          if(Object.prototype.toString.call(data[k])=="[object Object]"){
              return data[k]
          }
        }
      }
      checkArryByGoodsInfo(data,index){
        for(let k in data){
          if(Array.isArray(data[k])){
            return data[k]
          }
        }
      }


  render(){
    const title=this.props.title;  //title 相当于cloumns
    let baseInfoTitle=this.props.baseInfoTitle  //基础信息的title(动态)
    let objlength=Object.keys(title).length; //title长度 用于(动态)行合并
    let data=this.props.dataSource; //整体数据源
    let rowSpanNumber=this.props.rowSpanNumber; //需要列合并的列数
    let isRowSpan=this.props.isRowSpan; //是否还需列合并
    //let newBaseInfoTitleData=data && this.mergeBaseInfoTitleData(baseInfoTitle,data) //拼接后的title和value值
    return(
      <table cellSpacing='0' cellPadding='0' className={styles.tbaleBox}>
        <thead className={styles.tableheard}>
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
          data.length>0  ? (
            isRowSpan ? (
              data.map((datalist,index1)=>{
                //对应相对的 字段(商品信息)
                let databaseInfo=this.checkObjeByBaseInfo(datalist,index1)
                let datagoodslength=this.checkArryByGoodsInfo(datalist,index1).lngth;
                let datagoodslist=this.checkArryByGoodsInfo(datalist,index1);
                //let datagoodslength=datalist.listResultVos.length;//每一条询价单下商品的长度，用于列合并
                return(
                  //基础信息 tr
                  <tbody className="tableBody">
                    <tr>
                      <td colSpan={objlength} className={styles.tableBaseInfo}>
                        {this.baseInfoList(databaseInfo,baseInfoTitle,index1)}
                      </td>
                    </tr>
                    {  //对应相对的 字段(商品信息)
                      datagoodslist.map((goodsData,index2)=>{
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
                let databaseInfo=this.checkObjeByBaseInfo(datalist,index1)
                let datagoodslist=this.checkArryByGoodsInfo(datalist,index1);
                return(
                  //基础信息 tr
                  <tbody >
                    <tr>
                      <td colSpan={objlength} className={styles.tableBaseInfo}>
                        {this.baseInfoList(databaseInfo,baseInfoTitle,index1)}
                      </td>
                    </tr>
                    {
                      datagoodslist.map((goodsData,index2)=>{
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
