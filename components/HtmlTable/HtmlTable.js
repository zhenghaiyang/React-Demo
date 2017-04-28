import React,{ Component } from 'react';
import PoTable from './Po-Table';
import './style.css'



export default class HtmlTable extends Component{



  //title 相当于cloumns   必填
  //baseInfoTitle     必填     基础信息 title
  //dataSource 数据源 必填  必须是数组类型
  //rowSpanNumber  有多少行需要不进行展示 (必填)
  //isRowSpan  是否需要列合并   必填


  //没有提供每条数据的index ,如果删除每一条商品信息的话，请根据sku,和订单号，去删除需要删除的商品
  render(){
    return(
      <div>
        <PoTable
          title={title}
          baseInfoTitle={baseInfoTitle}
          //dataSource={dataSource}
          rowSpanNumber={2}
          isRowSpan={false}
        />
      </div>
    )
  }
}

//title 列子
//dataIndex 必填
//有width 属性  例如  width:"200px"
//有render 方法， 提供两个参数， value当前行的商品信息, dataInfo 当前商品的询价订单信息
const title=[
  {
    title:'SKU编码',
    dataIndex:'sku',
    render:(value,dataInfo)=>{
      return (
        <span>{value.value}</span>
      )
    }
  },
  {
    title:"商品信息",
    dataIndex:"info",
    width:"300px",
    render:(value,dataInfo)=>{
      console.log(value)
      return(
        <div className="imgOut">
          <img src={value.value.goodsURL} />
          <p>{value.value.name}</p>
          <p>{value.value.norms}</p>
        </div>
      )
    }
  },{
    title:"预计出货日",
    dataIndex:"day",
    render:(value,dataInfo)=>{
      return (
        <div>
          <span>{value.value}</span>
          <span>天</span>
        </div>
      )
    }
  },{
    title:'数量',
    dataIndex:"number",
    render:(value,dataInfo)=>{
      // console.log(value)
      // console.log(index)
      return (
        <span>{value.value}</span>
      )
    }
  },{
    title:"报价(商品单价)",
    dataIndex:"price",
    render:(value,dataInfo)=>{
      return (
        <div>
          <span>￥</span>
          <span>{value.value}</span>
        </div>
      )
    }
  },{
    title:"询价单状态",
    width:"200px",
    rowSpan:true,
    render:(value,dataInfo)=>{
      //console.log(dataInfo)
      return(
        <span>{dataInfo.baseInfo.xjdzt}</span>
      )
    }
  },{
    title:"操作",
    rowSpan:true,
    render:(value,dataInfo)=>{
      return (
          <div>11</div>
      )
    }
  }
]

//基础信息 列子
//dataIndex 必填
const baseInfoTitle=[
  {
    title:"询价单号",
    dataIndex:'xjd'
  },{
    title:"询价时间",
    dataIndex:'xjsj'
  },{
    title:"有效期至",
    dataIndex:"yxqz",
  },{
    title:"收货地区",
    dataIndex:"shdz"
  }
]

const dataSource=[
  {
    baseInfo:{
      xjd:"2222",
      xjsj:"2017-09-23",
      yxqz:"2017-02-20",
      shdz:"广东省",
      xjdzt:"已回复"
    },
    goodsInfo:[
      {
        sku:"201731313",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家",
          norms:"颜色红色,200g"
        },
        day:"5",
        number:"300",
        price:"200"
      },{
        sku:"202222222222",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家2",
          norms:"颜色红色2,200g"
        },
        day:"52",
        number:"3002",
        price:"2002"
      },{
        sku:"202222222222",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家2",
          norms:"颜色红色2,200g"
        },
        day:"52",
        number:"3002",
        price:"2002"
      },{
        sku:"202222222222",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家2",
          norms:"颜色红色2,200g"
        },
        day:"52",
        number:"3002",
        price:"2002"
      },{
        sku:"202222222222",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家2",
          norms:"颜色红色2,200g"
        },
        day:"52",
        number:"3002",
        price:"2002"
      },{
        sku:"202222222222",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家2",
          norms:"颜色红色2,200g"
        },
        day:"52",
        number:"3002",
        price:"2002"
      },{
        sku:"202222222222",
        info:{
          goodsURL:"wadsadasd",
          name:"小当家2",
          norms:"颜色红色2,200g"
        },
        day:"52",
        number:"3002",
        price:"2002"
      }
    ]
  },{
    baseInfo:{
      xjd:"3333",
      xjsj:"20137-09-23",
      yxqz:"2013-02-20",
      shdz:"广西省",
      xjdzt:"未回复"
    },
    goodsInfo:[
      {
        sku:"333333333",
        info:{
          goodsURL:"333333333",
          name:"333333",
          norms:"333333"
        },
        day:"3",
        number:"333",
        price:"333"
      },{
        sku:"333333333",
        info:{
          goodsURL:"333333333",
          name:"333333",
          norms:"333333"
        },
        day:"3",
        number:"333",
        price:"333"
      }
    ]
  },{
    baseInfo:{
      xjd:"44444",
      xjsj:"20137-09-23",
      yxqz:"2013-02-20",
      shdz:"广西省",
      xjdzt:"未回复"
    },
    goodsInfo:[
      {
        sku:"444444",
        info:{
          goodsURL:"444444",
          name:"444444",
          norms:"444444"
        },
        day:"444444",
        number:"444444",
        price:"444444"
      }
    ]
  },{
    baseInfo:{
      xjd:"44444",
      xjsj:"20137-09-23",
      yxqz:"2013-02-20",
      shdz:"广西省",
      xjdzt:"未回复"
    },
    goodsInfo:[
      {
        sku:"444444",
        info:{
          goodsURL:"444444",
          name:"444444",
          norms:"444444"
        },
        day:"444444",
        number:"444444",
        price:"444444"
      }
    ]
  }
]
