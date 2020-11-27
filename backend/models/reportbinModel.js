import mongoose from 'mongoose'


const reportbinSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    locationAddress: {        
           type: String, 
           required: true,        
      },
    reportMethod:{
        type: String,
        required: true
    },    
    isPaid: {
        type: Boolean,
        required: true,
        default: true,
      },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
},

{
  timestamps: true,
}

)


const Reportbin = mongoose.model('Reportbin', reportbinSchema)

export default Reportbin