import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
        title: {type: String, required:true},
        rating: {type: Number, required:true},
        comment: {type: String, required:true},
},{
    timestamps:true
})

const blogSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },    
    category:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    }
},{
    timestamps:true
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog