import express from 'express'
import {
    addContact,    
    getContacts,
    getContactById,

} from '../controllers/contactController.js'
import {protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(addContact).get(protect,admin, getContacts)

router.route('/:id').get(protect, getContactById)

export default router

 