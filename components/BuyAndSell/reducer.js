const ADD_INFO="ADD_INFO";
const DEL_INFO="DEL_INFO";
const UPDATE_NAME="UPDATE_NAME";
const UPDATE_AGE="UPDATE_AGE";


export function addInfo(data,type){
 debugger;
 console.log(data);
 console.log(type);
  if(type=="buyer"){
    data.buyer.push(new Object())
  }else if(type=="seller"){
    data.seller.push(new Object())
  }
  return{
    type:ADD_INFO,
    data:data
  }
}

export function delInfo(data,type){
  return{
    type:DEL_INFO,
    data:data
  }
}

export function updateName(data,type){
  return {
    type:UPDATE_NAME,
    data:data
  }
}

export function updateAge(data,type){
  return {
    type:UPDATE_AGE,
    data:data
  }
}

const initstate={
  buyer:[
    {
      "name":'张三',
      "address":"秦皇岛"
    },{
      "name":'张三2',
      "address":"秦皇岛2"
    }
  ],
  seller:[
    {
      "name":'李四',
      "address":"秦皇岛"
    },{
      "name":'李四2',
      "address":"秦皇岛2"
    }
  ]
}

export default function reducer(state=initstate,action){
  switch (action.type) {
    case ADD_INFO:
      return Object.assign({},state,{
        state:action.data
      })
      break;
    case DEL_INFO:
      return Object.assign({},state,{

      })
      break;
    case UPDATE_NAME:
      return Object.assign({},state,{

      })
      break;
    case UPDATE_AGE:
      return Object.assign({},state,{

      })
      break;
    default:
      return state
  }
}
