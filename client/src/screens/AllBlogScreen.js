import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import AllBlogs from '../components/AllBlogs'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listBlogs} from '../actions/blogActions'
import Meta from '../components/Meta';


const AllBlogScreen = () => {
    
    const dispatch = useDispatch()
    const blogList = useSelector(state=> state.blogList)
        const {loading, error, blogs}= blogList

         useEffect(()=>{        
            dispatch(listBlogs())            
           
        }, [dispatch])

    return (
        <>
            <Meta/>
            {loading ? <Loader/>  : error ? <Message variant='danger'>{error}</Message>:
            <Row>               
                {blogs.map(blog=>(
                    <Col key={blog._id} md={4}  sm={12} lg={4}  xl={4}>
                        <AllBlogs blog={blog}/>
                    </Col>
                ))}
                
            </Row>
            }
        </>
    );
};
export default AllBlogScreen;