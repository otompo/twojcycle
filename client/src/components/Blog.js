import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const Blog = ({blog}) => {
    return (
        <>        
        <Card className='my-3 p-3 rounded'>
            <Link to={`/blog/${blog._id}`}>
                <Card.Img src={blog.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/blog/${blog._id}`}>
                    <Card.Title as='div'><h6>{blog.title}</h6></Card.Title>
                    <Link className="btn btn-dark" to={`/blog/${blog._id}`}>READ MORE</Link>
                </Link>    
           </Card.Body>
        </Card>
        </>
    );
};

export default Blog;