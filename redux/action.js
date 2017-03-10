
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
