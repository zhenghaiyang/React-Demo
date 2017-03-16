const ADD_INFO="ADD_INFO";
const DEL_INFO="DEL_INFO";
const UPDATE_NAME="UPDATE_NAME";
const UPDATE_AGE="UPDATE_AGE";


export function addInfo(data){
  return{
    type:ADD_INFO,
    data:data
  }
}

export function delInfo(data){
  return{
    type:DEL_INFO,
    data:data
  }
}

export function updateName(data){
  return {
    type:UPDATE_NAME,
    data:data
  }
}

export function updateAge(data){
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
