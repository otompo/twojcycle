import {
  PICKUP_CREATE_REQUEST,
  PICKUP_CREATE_FAIL,
  PICKUP_CREATE_SUCCESS,

  PICKUP_DETAILS_REQUEST,
  PICKUP_DETAILS_SUCCESS,
  PICKUP_DETAILS_FAIL,

  PICKUP_LIST_REQUEST,
  PICKUP_LIST_SUCCESS,
  PICKUP_LIST_FAIL,
  PICKUP_DELIVERED_REQUEST,
  PICKUP_DELIVERED_SUCCESS,
  PICKUP_DELIVERED_FAIL,
  PICKUP_DELIVERED_RESET,

  PICKUP_LIST_MY_REQUEST,
  PICKUP_LIST_MY_SUCCESS,
  PICKUP_LIST_MY_FAIL,
  PICKUP_LIST_MY_RESET

} from '../constants/pickupConstants'

export const pickupCreateReducer = (state = {}, action)=>{
  switch(action.type){
     case PICKUP_CREATE_REQUEST:
       return{
         loading:true
       }
     case PICKUP_CREATE_SUCCESS:
       return{
         loading:false,
         success:true,
         //order:action.payload
       }
     case PICKUP_CREATE_FAIL:
       return{
         loading:false,
         error:action.payload,
       }


       default:
         return state
  }
}


export const pickupListReducer = ( state={pickups:[]}, action) => {
  switch (action.type) {
    case PICKUP_LIST_REQUEST:
      return {
        loading: true,
      }
    case PICKUP_LIST_SUCCESS:
      return {
        loading: false,
        pickups: action.payload,
      }
    case PICKUP_LIST_FAIL:
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



export const pickupDetailsReducer= (state={loading: true, pickupItems:[]}, action)=>{

  switch(action.type){
      case PICKUP_DETAILS_REQUEST:
          return{
              ...state,
              laoding: true
          }
              
      case PICKUP_DETAILS_SUCCESS:
          return{
              laoding: false,
              pickup: action.payload
          }
      case PICKUP_DETAILS_FAIL:
          return{
              laoding: false,
              error: action.payload
          }


          default:
              return state
  }
}




export  const pickupDeliverReducer = (state={}, action)=>{

  switch(action.type){
      case PICKUP_DELIVERED_REQUEST:
          return{
              laoding: true
          }              
      case PICKUP_DELIVERED_SUCCESS:
          return{
              laoding: false,
              success: true
          }
      case PICKUP_DELIVERED_FAIL:
          return{
              laoding: false,
              error: action.payload
          }
      case PICKUP_DELIVERED_RESET:
          return{}
          default:
              return state
  }
}




export const pickupListMyReducer = ( state={pickups:[]}, action) => {
  switch (action.type) {
    case PICKUP_LIST_MY_REQUEST:
      return {
        loading: true,
      }
    case PICKUP_LIST_MY_SUCCESS:
      return {
        loading: false,
        pickups: action.payload,
      }
    case PICKUP_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case PICKUP_LIST_MY_RESET:
      return { pickups: [] }
    default:
      return state
  }
}