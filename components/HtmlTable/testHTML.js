import React,{ Component } from 'react';
import PoTable from './testTable';
import {Button} from 'antd'

import './style.css'



export default class ItemTable extends Component{
  constructor(props){
    super(props)
  }


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
      </div>
    )
  }
}
const title=[
  {
    title:'SKU编码',
    dataIndex:'skuId'
  },
  {
    title:"商品信息",
    dataIndex:"resultVo",
    render:(value,dataInfo)=>{
      return (
        <div >
          {/* <img src={value.value.skuImageUrl}/>
          <div style={{textAlign:'left'}}>
            <p>{value.value.itemName}</p>
            <span>{value.value.attributes}</span>
          </div> */}
        </div>
      )
    }
  },{
    title:"预计出货日",
    dataIndex:"sendPeriod",
    render:(value,datainfo)=>{
      return(
        <div >
            <span>{value.value}</span>
            <span>天</span>
        </div>
      )
    }
  },{
    title:'数量',
    dataIndex:"num"
  },{
    title:"报价(商品单价)",
    dataIndex:"price",
    render:(value,dataInfo)=>{
      return (
        value.value?(
          <div >
                <span>￥</span>
                <span>{value.value}</span>
          </div>
        ):null
      )
    }
  },{
    title:"询价单状态",
    render:(value,dataInfo)=>{
      return (
        <span>{dataInfo.itemDetailResultVo.inquiryStatusView}</span>
      )
    }
  },{
    title:"操作",
    render:(value,dataInfo)=>{
      return (
        dataInfo.itemDetailResultVo.inquiryStatus==20 ?(
          <Button >提交订单</Button>
        ):dataInfo.itemDetailResultVo.inquiryStatus==30 ?(
          <a >查看订单</a>
        ):null
      )
    }
  }
]



const dataSource=[
            {
                "id": 319,
                "key": 319,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000007,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 14,
                    "province": "河南平顶山",
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 18:24:20",
                    "invalidExpireTime": null,
                    "inquiryStatus": 30,
                    "inquiryStatusView": "已转订单",
                    "orderNo": 170629311000011
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000989,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 15,
                        "num": 100,
                        "hasWholesaleNum": 1,
                        "skuIdStr": "DHJ-10000989"
                    }
                ]
            },
            {
                "id": 318,
                "key": 318,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000006,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 11,
                    "province": "北京北辰",
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 18:18:18",
                    "invalidExpireTime": "2017-07-31 00:00:00",
                    "inquiryStatus": 20,
                    "inquiryStatusView": "已回复",
                    "orderNo": null
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000990,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:6;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 500,
                        "num": 1,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000990"
                    }
                ]
            },
            {
                "id": 317,
                "key": 317,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000005,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 35,
                    "province": null,
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 18:08:04",
                    "invalidExpireTime": "2017-06-30 00:00:00",
                    "inquiryStatus": 30,
                    "inquiryStatusView": "已转订单",
                    "orderNo": 170629311000010
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000987,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:红;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 5,
                        "num": 4,
                        "hasWholesaleNum": 1,
                        "skuIdStr": "DHJ-10000987"
                    }
                ]
            },
            {
                "id": 316,
                "key": 316,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000004,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 11,
                    "province": null,
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 18:01:29",
                    "invalidExpireTime": "2017-06-30 00:00:00",
                    "inquiryStatus": 30,
                    "inquiryStatusView": "已转订单",
                    "orderNo": 170629311000008
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000988,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:红;尺寸:6;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 4,
                        "num": 3,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000988"
                    },
                    {
                        "itemId": 10000330,
                        "skuId": 10000989,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 5,
                        "num": 4,
                        "hasWholesaleNum": 1,
                        "skuIdStr": "DHJ-10000989"
                    }
                ]
            },
            {
                "id": 315,
                "key": 315,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000003,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 11,
                    "province": null,
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 17:55:10",
                    "invalidExpireTime": "2017-06-30 00:00:00",
                    "inquiryStatus": 20,
                    "inquiryStatusView": "已回复",
                    "orderNo": null
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000987,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:红;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 4,
                        "num": 3,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000987"
                    }
                ]
            },
            {
                "id": 311,
                "key": 311,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000002,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 11,
                    "province": null,
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 15:58:08",
                    "invalidExpireTime": null,
                    "inquiryStatus": 10,
                    "inquiryStatusView": "待回复",
                    "orderNo": null
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000988,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:红;尺寸:6;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": null,
                        "num": 3,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000988"
                    },
                    {
                        "itemId": 10000330,
                        "skuId": 10000989,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": null,
                        "num": 4,
                        "hasWholesaleNum": 1,
                        "skuIdStr": "DHJ-10000989"
                    },
                    {
                        "itemId": 10000330,
                        "skuId": 10000990,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:6;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": null,
                        "num": 3,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000990"
                    }
                ]
            },
            {
                "id": 310,
                "key": 310,
                "itemDetailResultVo": {
                    "inquiryNo": 170629321000001,
                    "buyerId": 13569,
                    "buyerName": null,
                    "areaId": 11,
                    "province": null,
                    "hasSalesArea": null,
                    "inquiryCreateTime": "2017-06-29 15:54:15",
                    "invalidExpireTime": "2017-06-29 00:00:00",
                    "inquiryStatus": 20,
                    "inquiryStatusView": "已回复",
                    "orderNo": null
                },
                "listResultVos": [
                    {
                        "itemId": 10000330,
                        "skuId": 10000987,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:红;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 1.2,
                        "num": 1,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000987"
                    },
                    {
                        "itemId": 10000330,
                        "skuId": 10000988,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:红;尺寸:6;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 2,
                        "num": 1,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000988"
                    },
                    {
                        "itemId": 10000330,
                        "skuId": 10000989,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:5;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 2,
                        "num": 2,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000989"
                    },
                    {
                        "itemId": 10000330,
                        "skuId": 10000990,
                        "resultVo": {
                            "skuImageUrl": "//hnc-hb-pre.oss.cn-north-1.jcloudcs.com/b8b95f81-0d18-4da3-b7d9-d26cd4481c5b.jpg",
                            "altImage": "",
                            "itemName": "曾经-SKU",
                            "attributes": "颜色:橙;尺寸:6;"
                        },
                        "sendPeriod": 4,
                        "deliveryType": 1,
                        "price": 3,
                        "num": 3,
                        "hasWholesaleNum": 0,
                        "skuIdStr": "DHJ-10000990"
                    }
                ]
            }
        ]




const baseInfoTitle=[
  {
    title:"询价单号",
    dataIndex:'inquiryNo'
  },{
    title:"询价时间",
    dataIndex:'inquiryCreateTime'
  },{
    title:"有效期至",
    dataIndex:"invalidExpireTime",
  },{
    title:"收货地区",
    dataIndex:"province"
  }
]
