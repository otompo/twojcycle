import axios from 'axios'
import {
 ORDERBIN_CREATE_REQUEST,
 ORDERBIN_CREATE_SUCCESS,
 ORDERBIN_CREATE_FAIL,

 ORDERBIN_DETAILS_REQUEST,
 ORDERBIN_DETAILS_SUCCESS,
 ORDERBIN_DETAILS_FAIL,

 ORDERBIN_LIST_REQUEST,
 ORDERBIN_LIST_SUCCESS,
 ORDERBIN_LIST_FAIL,

 ORDERBIN_DELIVERED_FAIL,
 ORDERBIN_DELIVERED_SUCCESS,
 ORDERBIN_DELIVERED_REQUEST,
 ORDERBIN_LIST_MY_REQUEST,
 ORDERBIN_LIST_MY_SUCCESS,
 ORDERBIN_LIST_MY_FAIL

} from '../constants/orderbinConstants'

export const createOrderbin = (orderbin) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDERBIN_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/orderbins`, orderbin, config)
  
      dispatch({
        type: ORDERBIN_CREATE_SUCCESS,
        payload: data,
      })
    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data,
    //   })
     // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: ORDERBIN_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }



  
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERBIN_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orderbins`, config)

    dispatch({
      type: ORDERBIN_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDERBIN_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}




export const getOrderbinsDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERBIN_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orderbins/${id}`, config)

    dispatch({
      type: ORDERBIN_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDERBIN_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}




export const deliverOrderbins= (orderbin) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERBIN_DELIVERED_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {       
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/orderbins/${orderbin._id}/deliver`, {}, config)

    dispatch({
      type: ORDERBIN_DELIVERED_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDERBIN_DELIVERED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}






export const orderbinMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERBIN_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orderbins/myorderbins`, config)

    dispatch({
      type: ORDERBIN_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDERBIN_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
