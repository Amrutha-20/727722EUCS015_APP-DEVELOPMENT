import React from 'react';
import Navbar from './Navbar';
import Topsection from '../Service components/topsection';
import Contentsection from '../Service components/contentsection';
import ServiceCardsSection from '../Service components/ServiceCardsSection';
import Footer from './Footer';

const Service = () => {
  return (
    <div className="page-wrapper">
      <Navbar/>
      <Topsection/>
      <Contentsection/>
      <ServiceCardsSection/>
      <Footer/>
    </div>
  );
};

export default Service;
