import asyncHandler from 'express-async-handler'
import Pickup from '../models/pickupModel.js'

// @desc    Create new pickup
// @route   POST /api/pickups
// @access  Private

const addPickup = asyncHandler(async (req, res)=>{
    const {
        locationAddress,
        paymentMethod,
        binSize,
    }=req.body
    if(locationAddress && locationAddress.length===0 ){
        res.status(400)
        throw new Error('No pickup items')
    }else{
        const pickup = new Pickup({
            locationAddress,
            user: req.user._id,
            name: req.user.name,
            paymentMethod,
            binSize,
        })
        await pickup.save()
        res.status(201).json({ message: 'Order Placed Successfully' })
    }
})



// @desc    Get all pickups
// @route   GET /api/pickups
// @access  Private/Admin
const getPickups  = asyncHandler(async(req, res)=>{  
    const pickups = await Pickup.find({}).populate('user','id name phone')
   res.json(pickups)
   
}) 
  

// @desc    Get logged in user pickups
// @route   GET /api/pickups/myorders
// @access  Private
const getMyPickups = asyncHandler(async (req, res) => {
    const pickups = await Pickup.find({ user: req.user._id })
    res.json(pickups)
  })
  
  const getPickupById= asyncHandler(async (req, res) => {
    const pickup = await Pickup.findById(req.params.id).populate(
      'user',
      'name phone email',
     
    )
        if(pickup){
            res.json(pickup)
        }else{
          res.status(404)
          throw new Error('Pickup not found')
        }
    
      })
  
  

// @desc    Update order to delivered
    // @route   GET /api/pickups/:id/delivere
    // @access  Private/ Admin
    const updatePickupToDeliverd = asyncHandler(async (req, res) => {
        const pickup = await Pickup.findById(req.params.id)
      
        if (pickup) {
          pickup.isDelivered = true
          pickup.deliveredAt = Date.now()
         
          const updatedPickup = await pickup.save()
      
          res.json(updatedPickup)
        } else {
          res.status(404)
          throw new Error('Pickup not found')
        }
      })





export{
    addPickup,
    getPickups,
    getMyPickups,
    getPickupById,
    updatePickupToDeliverd
}






