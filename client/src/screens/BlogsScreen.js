import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, Card} from 'react-bootstrap'
import {listBlogDetails} from '../actions/blogActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta';

const BlogsScreen = ({match}) => {

    const dispatch = useDispatch()
    
    const blogDetails = useSelector(state=> state.blogDetails)
    const {loading, error, blog}= blogDetails

     useEffect(()=>{            
        dispatch(listBlogDetails(match.params.id))             
       
    }, [match, dispatch])  
    
    return (
        <>     
        <Meta title={blog.title} description='find the best blog content for your bussiness'/>

             {loading ? <Loader/>  : error ? <Message variant='danger'>{error}</Message>:             
             
                <Row>
                    <Col md={12}>
                            <h3 style={{textTransform:'uppercase'}}> {blog.title}</h3>  
                    </Col>
                    <Col md={8} className='mb-3'>
                            <strong> {blog.createdAt}</strong> | <strong> {blog.category}</strong> 
                    </Col>
                    <Col md={12}>
                            <Card>
                                <Card.Body>
                                <Image src={blog.image} alt={blog.title}  fluid/>  
                                </Card.Body>
                            </Card>
                    </Col>
                    
                    <Col md={12} className='my-5'>
                            <article  >{blog.body}</article>
                    </Col>              
                </Row>
             }     
        </>
    );
};

// BlogsScreen.defaultProps ={
//     textTransform:'uppercase',
//     fontWeight: 400,
//     fontSize:18,
//     color:"#000000"
// }
export default BlogsScreen;