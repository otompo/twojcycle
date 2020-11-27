import mongoose from 'mongoose'



const pickupSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    locationAddress: {        
           type: String, 
           required: true,        
      },
    paymentMethod:{
        type: String,
        required: true
    },
    binSize:{
        type:String,
        required:true
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: true,
      },
      paidAt: { type: Date },
      isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt: { type: Date },
},

{
  timestamps: true,
}

)


const Pickup = mongoose.model('Pickup', pickupSchema)

export default Pickup