import {
    REPORT_CREATE_REQUEST,
    REPORT_CREATE_FAIL,
    REPORT_CREATE_SUCCESS, 

    REPORT_LIST_REQUEST,
    REPORT_LIST_SUCCESS,
    REPORT_LIST_FAIL,
  } from '../constants/reportbinConstants'
  
  export const reportCreateReducer = (state = {}, action)=>{
    switch(action.type){
       case REPORT_CREATE_REQUEST:
         return{
           loading:true
         }
       case REPORT_CREATE_SUCCESS:
         return{
           loading:false,
           success:true,
           //order:action.payload
         }
       case REPORT_CREATE_FAIL:
         return{
           loading:false,
           error:action.payload,
         }  
        default:
        return state
    }
  }
  

  
  export const reportListReducer = ( state={reports:[]}, action) => {
    switch (action.type) {
      case REPORT_LIST_REQUEST:
        return {
          loading: true,
        }
      case REPORT_LIST_SUCCESS:
        return {
          loading: false,
          reports: action.payload,
        }
      case REPORT_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      // case PICKUP_LIST_RESET:
      //   return { pickups: [] }
      default:
        return state
    }
  }
  
  
  
//   export const pickupDetailsReducer= (state={loading: true, pickupItems:[]}, action)=>{
  
//     switch(action.type){
//         case PICKUP_DETAILS_REQUEST:
//             return{
//                 ...state,
//                 laoding: true
//             }
                
//         case PICKUP_DETAILS_SUCCESS:
//             return{
//                 laoding: false,
//                 pickup: action.payload
//             }
//         case PICKUP_DETAILS_FAIL:
//             return{
//                 laoding: false,
//                 error: action.payload
//             }
  
  
//             default:
//                 return state
//     }
//   }
  
  
  
  
//   export  const pickupDeliverReducer = (state={}, action)=>{
  
//     switch(action.type){
//         case PICKUP_DELIVERED_REQUEST:
//             return{
//                 laoding: true
//             }              
//         case PICKUP_DELIVERED_SUCCESS:
//             return{
//                 laoding: false,
//                 success: true
//             }
//         case PICKUP_DELIVERED_FAIL:
//             return{
//                 laoding: false,
//                 error: action.payload
//             }
//         case PICKUP_DELIVERED_RESET:
//             return{}
//             default:
//                 return state
//     }
//   }
  
  
  
  
//   export const pickupListMyReducer = ( state={pickups:[]}, action) => {
//     switch (action.type) {
//       case PICKUP_LIST_MY_REQUEST:
//         return {
//           loading: true,
//         }
//       case PICKUP_LIST_MY_SUCCESS:
//         return {
//           loading: false,
//           pickups: action.payload,
//         }
//       case PICKUP_LIST_MY_FAIL:
//         return {
//           loading: false,
//           error: action.payload,
//         }
//       case PICKUP_LIST_MY_RESET:
//         return { pickups: [] }
//       default:
//         return state
//     }
//   }