
import express from  'express'
import {
      addPickup, getPickups, getMyPickups, getPickupById, updatePickupToDeliverd
   } from '../controllers/pickupController.js'
   import {protect,admin } from '../middleware/authMiddleware.js'


   const router = express.Router()

   router.route('/').post(protect, addPickup).get(protect,admin, getPickups)
   router.route('/mypickups').get(protect, getMyPickups)
   router.route('/:id').get(protect, getPickupById)
   router.route('/:id/deliver').put(protect, admin, updatePickupToDeliverd)

  export default router