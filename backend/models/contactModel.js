import mongoose from 'mongoose'

const contactSchema = mongoose.Schema(
  {  
    
      name: { type: String, required: true },
      emailAddress: { type: String, required: true  },
      subject: { type: String, required: true },
      messageBody:{ type: String, required: true },
    },
    
  {
    timestamps: true,
  }
)

const Contact = mongoose.model('Contact', contactSchema)

export default Contact
