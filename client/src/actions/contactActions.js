import axios from 'axios'
import {
 CONTACT_CREATE_REQUEST,
 CONTACT_CREATE_SUCCESS,
 CONTACT_CREATE_FAIL,

 CONTACT_LIST_REQUEST,
 CONTACT_LIST_SUCCESS,
 CONTACT_LIST_FAIL,

 CONTACT_DETAILS_REQUEST,
 CONTACT_DETAILS_SUCCESS,
 CONTACT_DETAILS_FAIL,


} from '../constants/contactConstants'

export const createContact = (contact) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTACT_CREATE_REQUEST,
      })
  
    //   const {
    //     userLogin: { userInfo },
    //   } = getState()
  
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${userInfo.token}`,
    //     },
    //   }
  
      const { data } = await axios.post(`/api/contacts`, contact)
  
      dispatch({
        type: CONTACT_CREATE_SUCCESS,
        payload: data,
      })
    
    } catch (error) {
      dispatch({
        type: CONTACT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



  
  export const listContacts = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTACT_LIST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/contacts`, config)
  
      dispatch({
        type: CONTACT_LIST_SUCCESS,
        payload: data,
      })
      
    } catch (error) {
      dispatch({
        type: CONTACT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }






  export const getContactsDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTACT_DETAILS_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/contacts/${id}`, config)
  
      dispatch({
        type:CONTACT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CONTACT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }