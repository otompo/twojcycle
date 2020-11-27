import asyncHandler from 'express-async-handler'
import Reportbin from '../models/reportbinModel.js'

// @desc    Create new report
// @route   POST /api/reportbins
// @access  Private


const addReportbin = asyncHandler(async (req, res)=>{
    const {
        locationAddress,
        reportMethod,      
    }=req.body
    if(locationAddress && locationAddress.length===0 ){
        res.status(400)
        throw new Error('No report items')
    }else{
        const reportbin = new Reportbin({
            locationAddress,
            user: req.user._id,
            name: req.user.name,
            reportMethod,
        })
        await reportbin.save()
        res.status(201).json({ message: 'Report Send Successfully' })
    }
})



// @desc    Get all pickups
// @route   GET /api/binreports
// @access  Private/Admin
const getbinReports  = asyncHandler(async(req, res)=>{  
    const reportbin = await Reportbin.find({}).populate('user','id name phone')
   res.json(reportbin)
   
}) 
  

// @desc    Get logged in user pickups
// @route   GET /api/pickups/myreports
// @access  Private
const getMyReports = asyncHandler(async (req, res) => {
    const reportbin = await Reportbin.find({ user: req.user._id })
    res.json(reportbin)
  })


  
//   const getPickupById= asyncHandler(async (req, res) => {
//     const pickup = await Pickup.findById(req.params.id).populate(
//       'user',
//       'name phone email',
     
//     )
//         if(pickup){
//             res.json(pickup)
//         }else{
//           res.status(404)
//           throw new Error('Pickup not found')
//         }
    
//       })
  
  

// @desc    Update order to delivered
    // @route   GET /api/pickups/:id/delivere
    // @access  Private/ Admin
    // const updatePickupToDeliverd = asyncHandler(async (req, res) => {
    //     const pickup = await Pickup.findById(req.params.id)
      
    //     if (pickup) {
    //       pickup.isDelivered = true
    //       pickup.deliveredAt = Date.now()
         
    //       const updatedPickup = await pickup.save()
      
    //       res.json(updatedPickup)
    //     } else {
    //       res.status(404)
    //       throw new Error('Pickup not found')
    //     }
    //   })





export{
    addReportbin,
    getbinReports,
    getMyReports,
    // getPickupById,
    // updatePickupToDeliverd
}






