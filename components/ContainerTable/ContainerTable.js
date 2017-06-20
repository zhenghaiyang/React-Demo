import React,{ Component } from 'react';


export default class ContainerTable extends Component{


  render(){
    let title=this.props.title
    return(
    <div>
      <table>
        <thead>
          {
            title.map((data,index)=>{
              <tr key={index}>
                {
                  data.map((data,index)=>{
                    return (
                      <th>{data}</th>
                    )
                  })
                }
              </tr>
            })
          }
        </thead>
        <div><p>123</p></div>
        <tbody>
          <tr>
            <td>222</td>
          </tr>
        </tbody>

      </table>
    </div>
    )
  }
}
