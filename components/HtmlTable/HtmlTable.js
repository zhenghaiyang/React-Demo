import React,{ Component } from 'react';
import PoTable from './Po-Table';
import PoTable1 from './Po1-Table';
import PoTable2 from './Po2-Table';
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
          dataSource={dataSource}
          rowSpanNumber={2}
          isRowSpan={false}
        />
        {/* <PoTable1
          title={title}
          baseInfoTitle={baseInfoTitle}
          dataSource={dataSource1}
          rowSpanNumber={2}
          isRowSpan={true}
        /> */}
        {/* <PoTable2
          title={title}
          dataSource={dataSource}
          baseInfoTitle={baseInfoTitle}
         /> */}
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
    //返回三个 属性，第一个是 value ，第二个是当前数据的信息(包括基础信息和商品信息)，第三个是当前行数据的object
    render:(value,dataInfo,goodsData)=>{
      // console.log("..............")
      // console.log(goodsData)
      // console.log("..............")
      return(
        <div className="imgOut">
        {/* <img src={goodsData.goodsURL} />
          <p>{goodsData.name}</p>
          <p>{goodsData.norms}</p> */}
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
    dataIndex:'inquiryCreateTime'
  },{
    title:"有效期至",
    dataIndex:"invalidExpireTime",
  },{
    title:"收货地区",
    dataIndex:"shdz"
  }
]

const dataSource=[
  {
    baseInfo:{
      xjd:"3333",
      inquiryCreateTime:"20137-09-23",
      invalidExpireTime:"2013-02-20",
      shdz:"广西省",
      xjdzt:"未回复"
    },
    goodsInfo:[
      {
        sku:"333333333",
        goodsURL:"333333333",
        name:"333333",
        norms:"333333",
        day:"3",
        number:"333",
        price:"333"
      },{
        sku:"4444",
        goodsURL:"444444",
        name:"44444",
        norms:"44444",
        day:"4",
        number:"4444",
        price:"4444"
      }
    ]
  },  {
      baseInfo:{
        xjd:"666666",
        xjsj:"20137-09-23",
        yxqz:"2013-02-20",
        shdz:"广西省6",
        xjdzt:"未回复6"
      },
      goodsInfo:[
        {
          sku:"333333333",
          goodsURL:"333333333",
          name:"333333",
          norms:"333333",
          day:"3",
          number:"333",
          price:"333"
        },{
          sku:"4444",
          goodsURL:"444444",
          name:"44444",
          norms:"44444",
          day:"4",
          number:"4444",
          price:"4444"
        }
      ]
    }
]

//
// const dataSource=[
//   {
//     baseInfo:{
//       xjd:"2222",
//       xjsj:"2017-09-23",
//       yxqz:"2017-02-20",
//       shdz:"广东省",
//       xjdzt:"已回复"
//     },
//     goodsInfo:[
//       {
//         sku:"201731313",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家",
//           norms:"颜色红色,200g"
//         },
//         day:"5",
//         number:"300",
//         price:"200"
//       },{
//         sku:"202222222222",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家2",
//           norms:"颜色红色2,200g"
//         },
//         day:"52",
//         number:"3002",
//         price:"2002"
//       },{
//         sku:"202222222222",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家2",
//           norms:"颜色红色2,200g"
//         },
//         day:"52",
//         number:"3002",
//         price:"2002"
//       },{
//         sku:"202222222222",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家2",
//           norms:"颜色红色2,200g"
//         },
//         day:"52",
//         number:"3002",
//         price:"2002"
//       },{
//         sku:"202222222222",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家2",
//           norms:"颜色红色2,200g"
//         },
//         day:"52",
//         number:"3002",
//         price:"2002"
//       },{
//         sku:"202222222222",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家2",
//           norms:"颜色红色2,200g"
//         },
//         day:"52",
//         number:"3002",
//         price:"2002"
//       },{
//         sku:"202222222222",
//         info:{
//           goodsURL:"wadsadasd",
//           name:"小当家2",
//           norms:"颜色红色2,200g"
//         },
//         day:"52",
//         number:"3002",
//         price:"2002"
//       }
//     ]
//   },{
//     baseInfo:{
//       xjd:"3333",
//       xjsj:"20137-09-23",
//       yxqz:"2013-02-20",
//       shdz:"广西省",
//       xjdzt:"未回复"
//     },
//     goodsInfo:[
//       {
//         sku:"333333333",
//         info:{
//           goodsURL:"333333333",
//           name:"333333",
//           norms:"333333"
//         },
//         day:"3",
//         number:"333",
//         price:"333"
//       },{
//         sku:"333333333",
//         info:{
//           goodsURL:"333333333",
//           name:"333333",
//           norms:"333333"
//         },
//         day:"3",
//         number:"333",
//         price:"333"
//       }
//     ]
//   },{
//     baseInfo:{
//       xjd:"44444",
//       xjsj:"20137-09-23",
//       yxqz:"2013-02-20",
//       shdz:"广西省",
//       xjdzt:"未回复"
//     },
//     goodsInfo:[
//       {
//         sku:"444444",
//         info:{
//           goodsURL:"444444",
//           name:"444444",
//           norms:"444444"
//         },
//         day:"444444",
//         number:"444444",
//         price:"444444"
//       }
//     ]
//   },{
//     baseInfo:{
//       xjd:"44444",
//       xjsj:"20137-09-23",
//       yxqz:"2013-02-20",
//       shdz:"广西省",
//       xjdzt:"未回复"
//     },
//     goodsInfo:[
//       {
//         sku:"444444",
//         info:{
//           goodsURL:"444444",
//           name:"444444",
//           norms:"444444"
//         },
//         day:"444444",
//         number:"444444",
//         price:"444444"
//       }
//     ]
//   }
// ]

// const dataSource=[{
// "purchaseId": 1002233,
// "platformId": 2,
// "parentOrderId": -1,
// "orderNo": 170320211000058,
// "purchaseNo": 170322221111111, //换货采购单号
// "oldPurchaseNo":19998883333, //原始采购单号
// "orderTime": "2017-4-12 11:59:38", //下单时间
// "estimateInvalidTime": null,
// "confirmTime": null,
// "refuseTime": null,
// "deliveryTime": null,
// "orderFinishTime": null,
// "settlementTime": null,
// "paymentTime": null,
// "refundTime": null,
// "totalPrice": 0,
// "purchaseStatus": null, // purchaseStatus 采购单状态
// "buyerId": 2,
// "supplyPrice": 0,  //采购单价
// "paymentPrice": 0, //采购单金额 paymentPrice
// "itemName": null,
// "skuId": 1005999,  //sku 编码
// "pictureUrl": null, //图片Url
// "altImage": null, //
// "attributes": null,//商品属性
// "num": 0, //数量
// "sendPeriod": null,
// "deliveryType": null,
// "freight": 0,
// "overTime": null,
// "purchaseStatusView": null,
// "supplySellerId": null,
// "supplySellerName": null,  //供货商名称
// "supplyShopId": null,
// "receiverName": "宋婉珂测试",
// "buyerAddressId": null,
//  "supplySellerName":"采购商名称"
// },{
//   "purchaseId": 1002233,
//   "platformId": 2,
//   "parentOrderId": -1,
//   "orderNo": 170320211000058,
//   "purchaseNo": 1900000000, //换货采购单号
//   "oldPurchaseNo":1900000000, //原始采购单号
//   "orderTime": "2017-4-12 11:59:38", //下单时间
//   "estimateInvalidTime": null,
//   "confirmTime": null,
//   "refuseTime": null,
//   "deliveryTime": null,
//   "orderFinishTime": null,
//   "settlementTime": null,
//   "paymentTime": null,
//   "refundTime": null,
//   "totalPrice": 0,
//   "purchaseStatus": null, // purchaseStatus 采购单状态
//   "buyerId": 2,
//   "supplyPrice": 0,  //采购单价
//   "paymentPrice": 0, //采购单金额 paymentPrice
//   "itemName": null,
//   "skuId": 1005999,  //sku 编码
//   "pictureUrl": "wwwww.dadada.com", //图片Url
//   "altImage": null, //
//   "attributes": null,//商品属性
//   "num": 0, //数量
//   "sendPeriod": null,
//   "deliveryType": null,
//   "freight": 0,
//   "overTime": null,
//   "purchaseStatusView": null,
//   "supplySellerId": null,
//   "supplySellerName": null,  //供货商名称
//   "supplyShopId": null,
//   "receiverName": "宋婉珂测试",
//   "buyerAddressId": null,
//    "supplySellerName":"采购商名称"
//   }]

// const baseInfoTitle=[
//   {
//     title:"换货采购单号",
//     dataIndex:'purchaseNo'
//   },{
//     title:"原始采购单号",
//     dataIndex:'oldPurchaseNo'
//   },{
//     title:"下单时间",
//     dataIndex:"orderTime",
//   }
// ]
//
// const title=[
//   {
//     title:'SKU编码',
//     dataIndex:'skuId',
//   },{
//     title:"商品信息",
//     render:(data,index,datalist)=>{
//       // console.log(data)
//       // console.log(index)
//       // console.log(datalist)
//       return (
//         <div>
//           <span></span>
//         </div>
//       )
//     }
//   },
//   {
//     title:"采购单价",
//     dataIndex:"supplyPrice"
//     //返回三个 属性，第一个是 value ，第二个是当前数据的信息(包括基础信息和商品信息)，第三个是当前行数据的object
//   },{
//     title:"数量",
//     dataIndex:"num",
//   },{
//     title:'采购单金额',
//     dataIndex:"paymentPrice",
//   },{
//     title:"采购单状态",
//   },{
//     title:"供应商名称",
//     dataIndex:"supplySellerName"
//   },{
//     title:"操作",
//     rowSpan:true,
//   }
// ]
