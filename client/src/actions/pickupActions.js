import axios from 'axios'
import {
 PICKUP_CREATE_REQUEST,
 PICKUP_CREATE_SUCCESS,
 PICKUP_CREATE_FAIL,

 PICKUP_DETAILS_REQUEST,
 PICKUP_DETAILS_SUCCESS,
 PICKUP_DETAILS_FAIL,

 PICKUP_LIST_REQUEST,
 PICKUP_LIST_SUCCESS,
 PICKUP_LIST_FAIL,

 PICKUP_DELIVERED_FAIL,
 PICKUP_DELIVERED_SUCCESS,
 PICKUP_DELIVERED_REQUEST,
 PICKUP_LIST_MY_REQUEST,
 PICKUP_LIST_MY_SUCCESS,
 PICKUP_LIST_MY_FAIL

} from '../constants/pickupConstants'

export const createPickup = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PICKUP_CREATE_REQUEST,
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
  
      const { data } = await axios.post(`/api/pickups`, order, config)
  
      dispatch({
        type: PICKUP_CREATE_SUCCESS,
        payload: data,
      })
    //   dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data,
    //   })
     // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: PICKUP_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }




  
export const listPickups = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PICKUP_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/pickups`, config)

    dispatch({
      type: PICKUP_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PICKUP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}




export const getPickupsDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PICKUP_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/pickups/${id}`, config)

    dispatch({
      type: PICKUP_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PICKUP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}




export const deliverPickup= (pickup) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PICKUP_DELIVERED_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {       
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/pickups/${pickup._id}/deliver`, {}, config)

    dispatch({
      type: PICKUP_DELIVERED_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PICKUP_DELIVERED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}






export const pickupMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PICKUP_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/pickups/mypickups`, config)

    dispatch({
      type: PICKUP_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PICKUP_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
