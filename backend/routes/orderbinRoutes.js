
import express from  'express'
import {
    addOrderbin,
    getOrderbins,
    getMyOrderbins,
    getOrderbinById,
    updateOrderBinToDeliverd
   } from '../controllers/orderbinController.js'
   import {protect,admin } from '../middleware/authMiddleware.js'


   const router = express.Router()
   router.route('/').post(protect, addOrderbin).get(protect,admin, getOrderbins)
   router.route('/myorderbins').get(protect, getMyOrderbins)
   router.route('/:id').get(protect, getOrderbinById)
   router.route('/:id/deliver').put(protect, admin, updateOrderBinToDeliverd)

  export default router