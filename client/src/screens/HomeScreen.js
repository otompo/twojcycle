import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap';
// import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
// import Paginate from '../components/Paginate'
import {listProducts} from '../actions/productActions'
import Meta from '../components/Meta';
import AllBlogScreen from './AllBlogScreen'
import FrontPage from '../components/FrontPage';





const HomeScreen = ({match}) => {     
        
        const keyword=match.params.keyword

        const pageNumber = match.params.pageNumber || 1

        const dispatch = useDispatch() 

        const productList = useSelector(state=> state.productList)
        const {loading, error}= productList

      
        useEffect(()=>{        
            dispatch(listProducts(keyword, pageNumber))            
           
        }, [dispatch, keyword, pageNumber])
        
       
    return (
        <>
        
        {/* <h1>Latest Products</h1> */}
        {loading ?<Loader/> : error ? <Message variant='danger'>{error}</Message>:
        <>

        <FrontPage/>

        <Meta />
        <Row className='m-5'>             
             
            <Col md={12}>
                <h1>Latest Post</h1>
                <AllBlogScreen/>
            </Col>

        </Row>

            </> 
            

        }
    
        </>
    );
};

export default HomeScreen;