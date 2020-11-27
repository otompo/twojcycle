import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listBlogs, deleteBlog, createBlog} from '../actions/blogActions'
import { BLOG_CREATE_RESET } from '../constants/blogConstants'

const BlogListScreen = ({history, match}) => {
    const dispatch = useDispatch()

    const blogList = useSelector((state)=>state.blogList)
    const{loading, error,blogs}=blogList

    const blogDelete = useSelector((state)=>state.blogDelete)
    const{loading:loadingDelete, error:errorDelete, success:successDelete}=blogDelete

    const blogCreate = useSelector((state)=>state.blogCreate)
    const{loading:loadingCreate, error:errorCreate, success:successCreate, blog:createdBlog}=blogCreate

    const userLogin = useSelector((state)=>state.userLogin)
    const{userInfo} =userLogin

   
    useEffect(()=>{       
            dispatch({type:BLOG_CREATE_RESET})

            if(!userInfo.isAdmin){                
                history.push('/')                
            }

            if(successCreate){                
                history.push(`/admin/blog/${createdBlog._id}/edit`)    
            }else{
                dispatch(listBlogs())
            }
      
    },[dispatch, history,match, userInfo, successDelete, successCreate, createdBlog])


const deleteHandler =(id)=>{
    if(window.confirm('Are your sure')){
        //DETELE Blogs
        dispatch(deleteBlog(id))

    }
}

const createBlogHandler=()=>{
    //Create blogs
    dispatch(createBlog())
}

    return (
        <>
        <Row className='align-items-center'>
            <Col>
                <h1>Blogs</h1>
            </Col>
            <Col className='text-right'>
                <Button variant='success' className='my-3' onClick={createBlogHandler}>
                      <i className='fas fa-plus'></i>  Create Blog
                </Button>
            </Col>
        </Row>

        {loadingDelete && <Loader/>}
        {errorDelete && <Message variant='danger' >{errorDelete}</Message>}

        {loadingCreate && <Loader/>}
        {errorCreate && <Message variant='danger' >{errorCreate}</Message>}
   
    {loading ? <Loader/>: error?<Message variant='danger'>{error}</Message>
    : (
    <Table striped responsive  hover bordered className='table-sm'>
            <thead>
                <tr>
                    <th>#</th>        
                    <th>CREATED DATE</th>        
                    <th>TITLE</th>        
                    {/* <th>BODY</th>         */}
                    <th>CATEGORY</th>       
                    <th>ACTION</th>
                </tr>       
                                    
            </thead>
         <tbody>
            {blogs.map((blog, counter)=>(
                <tr key={blog._id}>
                    <td>{counter+1}</td>
                    <td>{blog.createdAt.substring(0,10)}</td>
                    <td>{blog.title}</td>                
                    {/* <td>{blog.body}</td> */}
                    <td>{blog.category}</td>
                    <td>
                    <LinkContainer to={`/admin/blog/${blog._id}/edit`}>
                        <Button variant='success' className='btn-sm'>
                          EDIT <i className='fas fa-edit'></i>
                        </Button>
                    </LinkContainer>
                    <Button variant='danger' className='btn-sm'
                        onClick={()=> deleteHandler(blog._id)}>
                        DELETE <i className='fas fa-trash'></i>     
                    </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    )}
</>
);
};

export default BlogListScreen;