import React,{ Component } from 'react';
import ContainerTable from './ContainerTable';

export default class MyTable extends Component{
  render(){
    return(
      <div>
        <ContainerTable
          title={bigtitle}
        />
      </div>
    )
  }
}
const bigtitle=[
  {
    title:"SKU编码"
  },{
    title:"商品信息"
  },{
    title:"预计出货日"
  },{
    title:"数量"
  },{
    title:"报价"
  },{
    title:"询价单状态"
  },{
    title:"操作"
  }
]
