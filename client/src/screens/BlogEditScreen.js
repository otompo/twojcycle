import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Card, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listBlogDetails, updateBlog} from '../actions/blogActions'
import {BLOG_UPDATE_RESET} from '../constants/blogConstants'


const BlogEditScreen = ({match, history}) => {
   const blogId= match.params.id

    const[title, setTitle]= useState('')   
    const[image, setImage]= useState('')
    const[category, setCategory]= useState('')  
    const[body, setBody]= useState('') 
    const [uploading, setUploading] = useState(false) 


    const dispatch = useDispatch()
    const blogDetails = useSelector((state) => state.blogDetails)
    const {loading, error, blog}=blogDetails  

    const blogUpdate = useSelector((state) => state.blogUpdate)
    const {loading:loadingUpdate, error:errorUpdate, success:successUpdate}=blogUpdate  
   
    
    useEffect(() => {
        
            if(successUpdate){
                dispatch({type:BLOG_UPDATE_RESET})
                history.push('/admin/bloglist')
            }else{

                if(!blog.title || blog._id !== blogId){
                    dispatch(listBlogDetails(blogId))
                }else{
                    setTitle(blog.title)               
                    setImage(blog.image)
                    setCategory(blog.category)           
                    setBody(blog.body)
                    
                }
            }
      
      
    }, [match, history, blogId, dispatch, blog, successUpdate])


    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }


    const submitHandler = (e)=>{
        e.preventDefault()
        // Update blog

        dispatch(updateBlog({
            _id:blogId,
            title,
            image,
            category,
            body,
        }))
        
    }
   

    return (
        <>
            

            
            <FormContainer>    
            <Card className='my-5'>
                <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col md={6}>
                            <Link to='/admin/bloglist' className='btn btn-success my-3'>Back</Link>
                     
                            </Col>
                            <Col md={6}>
                            <h1>Edit blog</h1>
                     
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Text>
                    {loadingUpdate && <Loader/>}           
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}           
                {loading ? <Loader/>: error? <Message variant='danger'>{error}</Message>:
                (

             <Form onSubmit={submitHandler}>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                    type="string" 
                    placeholder='Enter Title' 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    ></Form.Control>
                </Form.Group>                   
                  
                    {/* *********************************************** */}
                    <Form.Group controlId="image">
                        <Form.Label>Image:</Form.Label>
                        <Form.Control 
                        className='mb-3'
                        type="text" 
                        placeholder='Enter image url' 
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                        ></Form.Control>
                        <Form.File
                            id='image-file'
                            label='Choose File'
                            custom
                            onChange={uploadFileHandler}
                        ></Form.File>
                        {uploading && <Loader />}
                    </Form.Group>
                    {/* *********************************************** */}                  
                    <Form.Group controlId="category">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder='Enter category' 
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        ></Form.Control>
                    </Form.Group>                   
                  
                    {/* *********************************************** */}                  
                     <Form.Group controlId="body">
                        <Form.Label>Body:</Form.Label>
                        <Form.Control                        
                        as="textarea"
                        rows="5" 
                        placeholder='Enter body' 
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    {/* *********************************************** */}


                    <Button type="submit" className="btn btn-success" size='lg' block>
                        Update
                    </Button>
                </Form>


             )}
                    </Card.Text>
                </Card.Body>
            </Card>

            
               
          
            
        </FormContainer>
       
        </>
       
    );
};

export default BlogEditScreen;