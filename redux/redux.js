import {
  TEXT_TEXT,
  ADD,
  DEL
} from './action';

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
