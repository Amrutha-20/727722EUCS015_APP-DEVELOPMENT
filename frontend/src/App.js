import { useState } from 'react';
import './App.css';
import Dashboardcontent from './Dashboardcontent';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Theme from './components/Theme';
import Service from './components/Service';
import AboutUs from './components/About';
import Contact from './components/Contact';
import Pay from './components/Pay';
import AdminLoginForm from './components/Adminlogin';
import Ordercontent from './Ordercontent';
import Venuecontent from './Venuecontent';
import Revenuecontent from './RevenueContent';
import Eventcontent from './Eventcontent';
import VenuFinder from './venue conponents/VenuFinder';
import Receipt from './payment/Receipt';
import Payment from './payment/Payment';
import VenueDetail from './venue conponents/VenueDetails';

function App() {
 
  return (
    // <div className="App">
    //   {/* <RegisterForm/>
    //   <LoginForm/> */}
    //   <Home/>
    // </div>
    <>
      
      <div>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/themes" element={<Theme/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/venues" element={<VenuFinder/>}/>
          <Route path="services/venue-selection" element={<VenuFinder/>}/>

          <Route path="/venues/:name" element={<VenueDetail/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/admin-login" element={<AdminLoginForm/>} />
         
        
              <Route path="/orders" element={<Ordercontent/>}/>
              <Route path="/dashboard" element={<Dashboardcontent/>}/>
              <Route path="/venuelist" element={<Venuecontent/>}/>
              <Route path="/revenue" element={<Revenuecontent/>}/>
              <Route path="/events" element={<Eventcontent/>}/>
              <Route path="/receipt" element={<Receipt/>}/>
              <Route path="/payment" element={<Payment/>}/>
          
        </Routes>
      
      </div>
      
    </>
  );
}

export default App;