
//测试
export const TEXT_TEXT="TEXT_TEXT";

export const ADD="ADD";
export const DEL="DEL";



//测试方法 不改变
export function test(data){
  return {
    type:TEXT_TEXT,
    data:data
  }
}

//测试增加
export function add(){
  return {
    type:ADD
  }
}
//测试减减
export function del(){
  return {
    type:DEL
  }
}


const initstate={
  name:'xiaom',
  age:'10'
}

export default function reducer( state = initstate,action){
    switch (action.type) {
      case TEXT_TEXT:
        return Object.assign({},state,{
          number:action.data
        })
        break;

      // case "ADD":
      //   return {
      //     ...state,
      //     age:state.data+1
      //   }
      // case "DEL":
      //   return {
      //     ...state,
      //     age:state.data-1
      //   }
      default:
        return state
    }
};
