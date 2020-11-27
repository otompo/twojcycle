import asyncHandler from 'express-async-handler'
import Orderbin from '../models/orderbinModule.js'

// @desc    Create new orderbin
// @route   POST /api/orderbins
// @access  Private

const addOrderbin = asyncHandler(async (req, res)=>{
    const {
        locationAddress,
        quantity,
        paymentMethod,
        binSize,
    }=req.body
    if(locationAddress && locationAddress.length===0 ){
        res.status(400)
        throw new Error('No order bin items')
    }else{
        const orderbin = new Orderbin({
            locationAddress,
            quantity,
            user: req.user._id,
            name: req.user.name,
            paymentMethod,
            binSize,
        })
        await orderbin.save()
        res.status(201).json({ message: 'Order Placed Successfully' })
    }
})



// @desc    Get all orderbins
// @route   GET /api/orderbins
// @access  Private/Admin
const getOrderbins  = asyncHandler(async(req, res)=>{  
    const orderbins = await Orderbin.find({}).populate('user','id name phone')
   res.json(orderbins)
   
}) 
  

// @desc    Get logged in user orderbins
// @route   GET /api/orderbins/myorderbins
// @access  Private
const getMyOrderbins = asyncHandler(async (req, res) => {
    const orderbins = await Orderbin.find({ user: req.user._id })
    res.json(orderbins)
  })
  


  const getOrderbinById= asyncHandler(async (req, res) => {
    const orderbin = await Orderbin.findById(req.params.id).populate(
      'user',
      'name phone email',
     
    )
        if(orderbin){
            res.json(orderbin)
        }else{
          res.status(404)
          throw new Error('orderbin not found')
        }
    
      })
  
  

// @desc    Update order to delivered
    // @route   GET /api/orderbins/:id/delivere
    // @access  Private/ Admin
    const updateOrderBinToDeliverd = asyncHandler(async (req, res) => {
        const orderbin = await Orderbin.findById(req.params.id)
      
        if (orderbin) {
            orderbin.isDelivered = true
            orderbin.deliveredAt = Date.now()
         
          const updatedOrderbin = await orderbin.save()
      
          res.json(updatedOrderbin)
        } else {
          res.status(404)
          throw new Error('Orderbin not found')
        }
      })





export{
    addOrderbin,
    getOrderbins,
    getMyOrderbins,
    getOrderbinById,
    updateOrderBinToDeliverd
}






