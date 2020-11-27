import asyncHandler from 'express-async-handler'
import Contact from '../models/contactModel.js'



// @desc    Create Contact
// @route   POST /api/contact
// @access  Private
const addContact = asyncHandler(async (req, res) => {
    const {
        name,
        emailAddress,
        subject,
        messageBody,     
    } = req.body
  
    if (emailAddress && emailAddress.length === 0) {
      res.status(400)
      throw new Error('No Contact')
      return
    } else {
      const contact = new Contact({
        name,
        emailAddress,
        subject,
        messageBody,   
      })  
      const createdContact = await contact.save()
  
      res.status(201).json(createdContact)
    }
  })




// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Private/Admin

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).populate('user','id name')
  res.json(contacts)
})


// @desc    Get contacts by ID
// @route   GET /api/contacts/:id
// @access  Private

const getContactById= asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
      if(contact){
          res.json(contact)
      }else{
        res.status(404)
        throw new Error('contact message not found')
      }
  
  
    })


      
export {
  addContact,
  getContacts,
  getContactById,
}
