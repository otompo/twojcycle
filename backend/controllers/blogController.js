import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'



// @desc  Fetch all blogs
// @route  GET /api/blogs
// @access  Public
 const getBlogs = asyncHandler(async(req, res)=>{
    const blogs = await Blog.find({})
    res.json(blogs)
}) 
 
// @desc  Fetch all single blogs
// @route  GET /api/blogs/:id
// @access  Public
const getBlogById = asyncHandler(async(req, res)=>{
    const blog = await Blog.findById(req.params.id)
    if(blog){
        res.json(blog)
    }else{
        res.status(404).json({message:'Blog not found'})
    }
})



// @desc  Delete a blog
// @route  DELETE /api/blogs/:id
// @access  Public/Admin
const deleteBlog = asyncHandler(async(req, res)=>{

    const blog= await Blog.findById(req.params.id)

    if(blog){
        await blog.remove()
        res.json({message: 'Blog removed'})
    }else{
        res.status(404)
        throw new  Error('Blog not found')
    }

}) 




// @desc  Create a blog
// @route  POST /api/blogs
// @access  Public/Admin
const createBlog = asyncHandler(async(req, res)=>{
    const blog= new Blog({
        title:'Sample Name',        
        user: req.user._id,
        image: '/images/sample.jpg',
        category:'Sample category',       
        numReviews:0,
        body:'Sample description'
    })

    const createdBlog = await blog.save()
    res.status(201).json(createdBlog)
    
}) 


// @desc  Update a blog
// @route  PUT /api/blogs/:id
// @access  Public/Admin
const updateBlog = asyncHandler(async(req, res)=>{
    const{
        title,        
        body,
        image,       
        category,      
        }=req.body

    const blog = await Blog.findById(req.params.id)
    if(blog){
        blog.title=title
        blog.body=body      
        blog.image=image       
        blog.category=category             

        const updatedBlog= await blog.save()
        res.json(updatedBlog)
    }else{
        res.status(404)
        throw new Error('Blog not found')
    }

   
    
}) 




export {
    deleteBlog,
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog
}
