import React from 'react';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import AllBlogScreen from './screens/AllBlogScreen'
import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogsScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
// import ShippingScreen from './screens/ShippingScreen';
// import PaymentScreen from './screens/PaymentScreen';
// import ProductScreen from './screens/ProductScreen'
// import CartScreen from './screens/CartScreen'
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
// import ProductListScreen from './screens/ProductListScreen';
// import OrderListScreen from './screens/OrderListScreen';
// import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import BlogListScreen from './screens/BlogListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import BlogEditScreen from './screens/BlogEditScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import DashboardScreen from './screens/DashboardScreen';
import RequestPickupScreen from './screens/RequestPickupScreen';
import ReportPickupScreen from './screens/ReportPickupScreen';
import PickupListScreen from './screens/PickupsListScreen';
import PickupScreen from './screens/PickupScreen';
import ReportListScreen from './screens/ReportListScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactMessagesScreen from './screens/ContactMessagesScreen';
import OrderBinScreen from './screens/OrderBinScreen';
import OrderBinListScreen from './screens/OrderBinListScreen';
import OrderBinSingleScreen from './screens/OrderBinSingleScreen';
import ServiceScreen from './screens/ServiceScreen';



const App=()=>{
  return (
    <Router>
      <Header/>
        <main>
            <>
              <Route path='/' component={HomeScreen} exact />              
              <Route path='/home' component={HomeScreen} exact />              
              <Route path='/search/:keyword' component={HomeScreen} exact/>
              <Route path='/page/:pageNumber' component={HomeScreen} exact />
              <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact/>
              
            <Container fluid> 
            <Route path='/dashboard' component={DashboardScreen} />
            <Route path='/requestpickup' component={RequestPickupScreen} />
            <Route path='/reportpickup' component={ReportPickupScreen} />
            <Route path='/orderbin' component={OrderBinScreen} />
            <Route path='/services' component={ServiceScreen} />
             </Container>
            </>
          <Container fluid="md">
              {/* <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen} /> */}
              <Route path='/blog/:id' component={BlogScreen} />
              <Route path='/allblogs' component={AllBlogScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/profile' component={ProfileScreen} />
              {/* <Route path='/shipping' component={ShippingScreen} /> */}
              {/* <Route path='/payment' component={PaymentScreen} /> */}
              {/* <Route path='/placeorder' component={PlaceOrderScreen} /> */}
              {/* <Route path='/orders/:id' component={OrderScreen} /> */}
              <Route path='/pickups/:id' component={PickupScreen} />
              <Route path='/orderbins/:id' component={OrderBinSingleScreen} />
              <Route path='/admin/pickuplist' component={PickupListScreen} />
              <Route path='/contacts/:id' component={ContactMessagesScreen} />
              {/* <Route path='/admin/orderlist' component={OrderListScreen} /> */}
              <Route path='/admin/binreportslist' component={ReportListScreen} />
              <Route path='/admin/userlist' component={UserListScreen} />
              <Route path='/admin/user/:id/edit' component={UserEditScreen} />
              {/* <Route path='/admin/productlist' component={ProductListScreen} exact /> */}
              {/* <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact/> */}
              <Route path='/admin/bloglist' component={BlogListScreen} />
              <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
              <Route path='/admin/blog/:id/edit' component={BlogEditScreen} />
              <Route path='/about' component={AboutScreen} />
              <Route path='/admin/contactlist' component={ContactListScreen} />
              <Route path='/contact' component={ContactScreen} />
              <Route path='/admin/orderbinlist' component={OrderBinListScreen} />
          </Container>
        </main>
      <Footer/>     
    </Router>
  );
}

export default App;
