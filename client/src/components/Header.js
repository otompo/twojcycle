import React from 'react'
// import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
// import SearchBox from './SearchBox'
import logo from '../img/logo.png'
// import { logout } from '../actions/userActions'

const Header = () => {
  // const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // const logoutHandler = () => {
  //   dispatch(logout())
  // }

  return (
    <header>
      <Navbar bg="success" expand="md" variant='dark' collapseOnSelect fixed="top"  fluid="true">
        {/* <Container> */}
          <LinkContainer to='/'>
            <Navbar.Brand>
            <Image src={logo} alt="2JCYCLE" width="180px" height="10px" fluid  className='logo'/>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav  defaultActiveKey="/home" className='ml-auto'>                
                <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer> 
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer> 
                <LinkContainer to="/services">
                    <Nav.Link>Services</Nav.Link>
                </LinkContainer> 

               

                <LinkContainer to="/allblogs">
                    <Nav.Link>News</Nav.Link>
                </LinkContainer> 
              


              {userInfo ? (
                
                  <LinkContainer to='/dashboard'>
                    <Nav.Link >Dashboard</Nav.Link>
                  </LinkContainer>                
                
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                   Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  {/* <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>    */}
                  {/* <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer> */}
                  <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/pickuplist'>
                    <NavDropdown.Item>Pickups</NavDropdown.Item>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/binreportslist'>
                    <NavDropdown.Item>Bin Reports</NavDropdown.Item>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/orderbinlist'>
                    <NavDropdown.Item>Order Bin List</NavDropdown.Item>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/bloglist'>
                    <NavDropdown.Item>Blogs</NavDropdown.Item>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <LinkContainer to='/admin/contactlist'>
                    <NavDropdown.Item>Contacts Details</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              
              <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
              </LinkContainer> 
              
{/*                 
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer> */}
              
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </header>
  )
}

export default Header
