import mongoose from 'mongoose'



const orderbinSchema = mongoose.Schema({
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
    quantity: { type: Number, required: true },
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


const Orderbin = mongoose.model('Orderbin', orderbinSchema)

export default Orderbin