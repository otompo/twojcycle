
import { 
    CONTACT_CREATE_REQUEST,
    CONTACT_CREATE_SUCCESS,
    CONTACT_CREATE_FAIL,
    
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_FAIL,
    CONTACT_LIST_RESET,
    
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS,
  CONTACT_DETAILS_FAIL,
   
} from '../constants/contactConstants'

export  const contactCreateReducer = (state={}, action)=>{

    switch(action.type){

        case CONTACT_CREATE_REQUEST:
            return{
                laoding: true
            }   
        case CONTACT_CREATE_SUCCESS:
            return{
                laoding: false,
                success: true,
                contact: action.payload
            }
        case CONTACT_CREATE_FAIL:
            return{
                laoding: false,
                error: action.payload
            }
            default:
                return state
    }
}


export const contactListReducer = ( state={contacts:[]}, action) => {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return {
        loading: true,
      }
    case CONTACT_LIST_SUCCESS:
      return {
        loading: false,
        contacts: action.payload,
      }
    case CONTACT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CONTACT_LIST_RESET:
      return { contacts: [] }
    default:
      return state
  }
}




export const contactDetailsReducer= (state={contact:{contactItems:[]}}, action)=>{

  switch(action.type){
      case CONTACT_DETAILS_REQUEST:
          return{...state,laoding: true}              
      case CONTACT_DETAILS_SUCCESS:
          return{laoding: false,contact: action.payload}
      case CONTACT_DETAILS_FAIL:
          return{laoding: false,error: action.payload}
          default:
              return state
  }
}


