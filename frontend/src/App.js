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
import AdminLoginForm from './components/Adminlogin';
import Ordercontent from './Ordercontent';
import styled, { createGlobalStyle } from 'styled-components'
import OrderList from './pages/OrderDetails';
import Sidebar from './components/Sidebar';
import { OrderProvider } from './pages/OrderContext';
import Venuecontent from './Venuecontent';
import Revenuecontent from './RevenueContent';

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
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/admin-login" element={<AdminLoginForm/>} />

        
              <Route path="/orders" element={<Ordercontent/>}/>
              <Route path="/dashboard" element={<Dashboardcontent/>}/>
              <Route path="/venuelist" element={<Venuecontent/>}/>
              <Route path="/revenue" element={<Revenuecontent/>}/>
          
        </Routes>
      
      </div>
      
    </>
  );
}

export default App;