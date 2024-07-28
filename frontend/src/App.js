import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Theme from './components/Theme';



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
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;