//
//
// // function foo(){
// //   var array=new Array();
// //   console.log(typeof(array))
// //   var args=array.from(arguments)
// // }
//  // var array=new Array();
//  // console.log(typeof(array))
//  // array.of(3,11,2);
//  // console.log(array);
//
//
// // var aaa="1,"
// //
// // var bb=aaa.split(",")
// // console.log(bb)
//
//
//  // foo("a","b","c")
//
// // function time(ms){
// //   return new Promise((resolve,reject)=>{
// //     setTimeout(resolve,ms,"hahah11")
// //  })
// // }
// //
// // time(3000).then((value)=>{
// //   console.log(value)
// // })
//
//
//
// // let promise=new Promise(function(resolve,reject){
// //   console.log("Promise")
// //   resolve();
// // })
// //
// // promise.then(()=>{
// //   console.log("resolved")
// // })
// //
// // console.log("1")
//
// // let promise=new Promise(function(resolve,reject){
// //   console.log("Promise")
// //   var image=new Image();
// //   resolve();
// // })
// // promise.then(()=>{
// //   console.log("resolved")
// // })
// // console.log("1")
//
//
// // var image= new Object();
// // console.log(image)
//
//
// // var it= makeIterator(['a', 'b']);
// // function makeIterator(array) {
// //   var nextIndex = 0;
// //   return {
// //     next: function() {
// //       return nextIndex < array.length ?
// //         {value: array[nextIndex++], done: false} :
// //         {value: undefined, done: true};
// //     }
// //   };
// // }
// //
// // console.log(it.next());
//
//
//
// // let arr=[1,2,3,4,5];
// //  let string="12345677"
// // // let iter=arr[Symbol.iterator]();
// // // console.log(iter.next().value);
// //
// // // for(let item of string){
// // //   console.log(item)
// // // }
// // console.log(arr)
// // console.log(...arr)
//
// // let tempObj={
// //   length:4,
// //   0:'1',
// //   1:'2',
// //   2:'3',
// //   3:{a:'3'}
// // };
// //
// // // for(let x of  Array.from(tempObj)){
// // //   console.log(x);
// // // }
// //
// // for(let i=0;i<Array.from(tempObj).length;i++){
// //   console.log(Array.from(tempObj)[i])
// // }
//
// // for(var n of fibonacci){
// //   if(n>1000){
// //     break;
// //   }
// //   console.log(n);
// // }
//
// // function *hellowrold(x){
// //   var y=2*(yield (x+1))
// //   var z=yield (y/3)
// //   yield "333"
// //   return (y+z)
// // }
// //
// // var hw=hellowrold(2)
// //
// // console.log(hw.next())
// // console.log(hw.next(1))
// // console.log(hw.next())
// // console.log(hw.next())
//
// var _=require('lodash');
// var actionType="TYPE_AAAABB"
// var initialState={
//   dashboard: {
//     isFetching: false,
//     data: {
//       map: '1122344556666',
//     },
//   },
//   features: {
//     data: [],
//   },
//   user: {
//     data: {},
//   },
//   dataCount: {
//     isFetching: false,
//     data: {
//       landCount: {},
//       cropCount: {},
//     },
//   },
//   plantVedio: {},
//   colorRender: {},
//   farms: [],
//   allFarms: [],
//   allCrop: [],
//   allNdvis: [],
//   ndviLine: [],
//   forecastData: {
//     data: {},
//   },
//   nowWeather: {
//     data: { temperature: 2.299 },
//   },
//   searchResultData: {
//     data: {},
//   },
//   searchFarm: {
//     data: {},
//   },
//   policyData: {
//     data: {},
//   },
//   deleteMessage: {
//     data: {},
//   },
//   sensorsDataNew: {
//     data: {},
//   },
//   sensorsDataHistory: {
//     data: {},
//   },
//   forecastRainfallData: {
//     data: {},
//   },
//   addPolicyData: {
//     data: {},
//   },
// }
//
//
// function funf(actionType,initialState){
//
//   if (!_.isArray(actionType)) {
//     actionType = [actionType];
//     //console.log(actionType)
//   }
//   const defaultHandler = {};
//   _.each(actionType,(item)=>{
//     //console.log(item)
//
//     // defaultHandler[`${item}_PENDING`]=function(state){
//     //   return (
//     //     Object.assign({}, state, {
//     //       isFetching: true,
//     //     })
//     //   )
//     // }
//     defaultHandler[`${item}_PENDING`] = state => Object.assign({}, state, {
//       isFetching: true,
//     });
//
//     //console.log(defaultHandler)
//
//     //console.log(actionHanlder)
//   })
//   const actionHanlder = Object.assign({}, defaultHandler);
//   //console.log("2222")
//   //return (state = initialState, action)=>()
//   //return (state = initialState, action) => ((actionHanlder[action.type] && actionHanlder[action.type](state, action)) || state);
//   return (state = initialState, action) => {
//     console.log('mmmmmmmmmmmmmm');
//     console.log(action);
//     console.log('mmmmmmmmmmmmmmm')
//     return (
//       (actionHanlder[action.type] &&
//         actionHanlder[action.type](state, action)) ||
//       state
//     )};
// }
//
// var aaa=funf(actionType,initialState);
// //console.log(aaa)

 var abc="poiutyrhf";
// for(let codekey of abc){
//   console.log(codekey)
// }
let bbb=abc.repeat(2);
// console.log(bbb)

let poi="2017".padStart(10,'YYYY-MM-DD')
//console.log(poi)

var bbbb123=0
console.log(Math.sign(bbbb123))
