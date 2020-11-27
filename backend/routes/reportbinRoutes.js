
import express from  'express'
import {
    addReportbin,
    getbinReports,
    getMyReports,
   //  getOrderById,
   //  updateOrderToPaid,
   //  updateOrderToDeliverd
   } from '../controllers/reportbinController.js'

import {protect, admin} from '../middleware/authMiddleware.js'


   const router = express.Router()

   router.route('/').post(protect, addReportbin).get(protect,admin, getbinReports)
   router.route('/mybinreports').get(protect, getMyReports)
   // router.route('/:id').get(protect, getPickupById)
   // router.route('/:id/deliver').put(protect, admin, updatePickupToDeliverd)

  export default router