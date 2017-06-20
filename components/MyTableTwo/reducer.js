const ADD_TABLE="ADD_TABLE"






export default function reducer(state={},action){
  switch (action.type) {
    case ADD_TABLE:
      return {
        ...state,
        data:action.data
      }
    default:
      return state
  }
}

export function addTable(value){
  return {
    type:ADD_TABLE,
    data:value
  }
}
