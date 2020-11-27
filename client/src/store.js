import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer} from './reducers/productReducers'
import {blogListReducer, blogDetailsReducer, blogDeleteReducer, blogCreateReducer, blogUpdateReducer} from './reducers/blogReducers'
import {cartReducer} from './reducers/cartReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
 } from './reducers/userReducers'

 import {
     orderCreateReducer, 
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer
} from './reducers/orderReducers'
import { pickupCreateReducer, pickupDeliverReducer, pickupDetailsReducer, pickupListMyReducer, pickupListReducer } from './reducers/pickupReducers'
import { reportCreateReducer, reportListReducer } from './reducers/reportbinReducer'
import { contactCreateReducer, contactDetailsReducer, contactListReducer } from './reducers/contactReducers'
import { orderbinCreateReducer, orderbinDeliverReducer, orderbinDetailsReducer, orderbinListMyReducer, orderbinListReducer } from './reducers/orderbinReducer'

 
const reducer= combineReducers({
    // PRODUCT
    productList:productListReducer,
    productDetails:productDetailsReducer,
    // CART
    cart: cartReducer,
    // BLOG
    blogList:blogListReducer,
    blogDetails:blogDetailsReducer,
    // USER LOGIN
    userLogin:userLoginReducer,
    // USER REGISTER
    userRegister:userRegisterReducer,
    // USER DETAILS
    userDetails:userDetailsReducer,
    // USER UPDATE PROFILE
    userUpdateProfile:userUpdateProfileReducer,
    // ORDER CREATE REDUCER
    orderCreate: orderCreateReducer,
    // ORDER DETAILS REDUCER
    orderDetails: orderDetailsReducer,
    // ORDER PAY REDUCER
    orderPay:orderPayReducer,
    // ORDER DELEIVER REDUCER
    orderDeliver:orderDeliverReducer,
    // ORDER LIST MY REDUCER
    orderListMy: orderListMyReducer,
    // ORDER LIST  REDUCER
    orderList: orderListReducer,
    // USER LIST REDUCER
    userList: userListReducer,
    // USER DELETE REDUCER
    userDelete: userDeleteReducer,
    // USER LIST REDUCER
    userUpdate: userUpdateReducer,
    // PRODUCT DELETE REDUCER
    productDelete: productDeleteReducer,
    // PRODUCT CREATE REDUCER
    productCreate: productCreateReducer,
    // PRODUCT UPDATE REDUCER
    productUpdate: productUpdateReducer,
    // PRODUCT UPDATE REDUCER
    productReviewCreate: productReviewCreateReducer,
    // PRODUCT TOP REDUCER
    productTopRated: productTopRatedReducer,
    // BLOG CREATE REDUCER
    blogCreate: blogCreateReducer,
    // BLOG UPDATE REDUCER
    blogUpdate: blogUpdateReducer,
    // BLOG DELETE REDUCER
    blogDelete: blogDeleteReducer,
    // PICKUP CREATE REDUCER
    pickupCreate: pickupCreateReducer,
    // PICKUP LIST REDUCER
    pickupList: pickupListReducer,
    // PICKUP DETAILS REDUCER
    pickupDetails: pickupDetailsReducer,
    // PICKUP DETAILS REDUCER
    pickupDeliver: pickupDeliverReducer,
    // PICKUP MYORDERS REDUCER
    pickupListMy: pickupListMyReducer,
    // REPORT CREATE REDUCER
    reportCreate: reportCreateReducer,
    // REPORT LIST REDUCER
    reportList: reportListReducer,
    // CONTACT CREATE REDUCER
    contactCreate: contactCreateReducer,
    // CONTACT LIST REDUCER
    contactList: contactListReducer,
    // CONTACT DETAILS REDUCER
    contactDetails: contactDetailsReducer,
    // ORDERBIN CREATE REDUCER
    orderbinCreate: orderbinCreateReducer,
    // ORDERBIN LIST REDUCER
    orderbinList: orderbinListReducer,
    // ORDERBIN DETAILS REDUCER
    orderbinDetails: orderbinDetailsReducer,
    // ORDERBIN DELIVER REDUCER
    orderbinDeliver: orderbinDeliverReducer,
    // ORDERBIN MYLIST REDUCER
    orderbinListMy: orderbinListMyReducer,

    

})
const cartItemsFormStorage = localStorage.getItem('cartItems') 
? JSON.parse(
    (localStorage.getItem('cartItems')) 
)
: []

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(
    (localStorage.getItem('userInfo')) 
)
: null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
? JSON.parse(
    (localStorage.getItem('shippingAddress')) 
)
: {}


const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
? JSON.parse(
    (localStorage.getItem('paymentMethod')) 
)
: {}




const initialState = {
    cart: {
        cartItems: cartItemsFormStorage,
        shippingAddress:shippingAddressFromStorage,
        paymentMethod:paymentMethodFromStorage
    },
    userLogin : {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store