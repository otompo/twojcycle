import {
    ORDERBIN_CREATE_REQUEST,
    ORDERBIN_CREATE_FAIL,
    ORDERBIN_CREATE_SUCCESS,
  
    ORDERBIN_DETAILS_REQUEST,
    ORDERBIN_DETAILS_SUCCESS,
    ORDERBIN_DETAILS_FAIL,
  
    ORDERBIN_LIST_REQUEST,
    ORDERBIN_LIST_SUCCESS,
    ORDERBIN_LIST_FAIL,
    ORDERBIN_DELIVERED_REQUEST,
    ORDERBIN_DELIVERED_SUCCESS,
    ORDERBIN_DELIVERED_FAIL,
    ORDERBIN_DELIVERED_RESET,
  
    ORDERBIN_LIST_MY_REQUEST,
    ORDERBIN_LIST_MY_SUCCESS,
    ORDERBIN_LIST_MY_FAIL,
    ORDERBIN_LIST_MY_RESET
  
  } from '../constants/orderbinConstants'
  
  export const orderbinCreateReducer = (state = {}, action)=>{
    switch(action.type){
       case ORDERBIN_CREATE_REQUEST:
         return{
           loading:true
         }
       case ORDERBIN_CREATE_SUCCESS:
         return{
           loading:false,
           success:true,
           //order:action.payload
         }
       case ORDERBIN_CREATE_FAIL:
         return{
           loading:false,
           error:action.payload,
         }
  
  
         default:
           return state
    }
  }
  
  
  export const orderbinListReducer = ( state={orderbins:[]}, action) => {
    switch (action.type) {
      case ORDERBIN_LIST_REQUEST:
        return {
          loading: true,
        }
      case ORDERBIN_LIST_SUCCESS:
        return {
          loading: false,
          orderbins: action.payload,
        }
      case ORDERBIN_LIST_FAIL:
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
  
  
  
  export const orderbinDetailsReducer= (state={loading: true, orderbinItems:[]}, action)=>{
  
    switch(action.type){
        case ORDERBIN_DETAILS_REQUEST:
            return{
                ...state,
                laoding: true
            }
                
        case ORDERBIN_DETAILS_SUCCESS:
            return{
                laoding: false,
                orderbin: action.payload
            }
        case ORDERBIN_DETAILS_FAIL:
            return{
                laoding: false,
                error: action.payload
            }  
  
            default:
                return state
    }
  }
  
  
  
  
  export  const orderbinDeliverReducer = (state={}, action)=>{
  
    switch(action.type){
        case ORDERBIN_DELIVERED_REQUEST:
            return{
                laoding: true
            }              
        case ORDERBIN_DELIVERED_SUCCESS:
            return{
                laoding: false,
                success: true
            }
        case ORDERBIN_DELIVERED_FAIL:
            return{
                laoding: false,
                error: action.payload
            }
        case ORDERBIN_DELIVERED_RESET:
            return{}
            default:
                return state
    }
  }
  
  
  
  
  export const orderbinListMyReducer = ( state={orderbins:[]}, action) => {
    switch (action.type) {
      case ORDERBIN_LIST_MY_REQUEST:
        return {
          loading: true,
        }
      case ORDERBIN_LIST_MY_SUCCESS:
        return {
          loading: false,
          orderbins: action.payload,
        }
      case ORDERBIN_LIST_MY_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDERBIN_LIST_MY_RESET:
        return { orderbins: [] }
      default:
        return state
    }
  }