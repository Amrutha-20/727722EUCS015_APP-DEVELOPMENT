import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    venue: '',
    theme: '',
    eventDate: '',
    eventTime: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must be numeric'),
    message: Yup.string().required('Message is required'),
    venue: Yup.string().required('Venue is required'),
    theme: Yup.string().required('Theme is required'),
    eventDate: Yup.string().required('Event date is required'),
    eventTime: Yup.string().required('Event time is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    alert('Your message has been sent!');
    resetForm();
  };

  return (
   <div>
    <Navbar/>
    <section id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h3>Contact Us</h3>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
              <div className="form-group">
                <Field type="text" id="name" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field type="email" id="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field type="text" id="phone" name="phone" placeholder="Phone Number" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field as="textarea" id="message" name="message" placeholder="Message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field as="select" id="venue" name="venue">
                  <option value="" label="Choose a venue" />
                  <option value="venue1" label="Venue 1" />
                  <option value="venue2" label="Venue 2" />
                  <option value="venue3" label="Venue 3" />
                </Field>
                <ErrorMessage name="venue" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field as="select" id="theme" name="theme">
                  <option value="" label="Choose a theme" />
                  <option value="Alice-Wonderland" label="Alice-Wonderland" />
                  <option value="theme2" label="Arabian-Egyptian" />
                  <option value="theme2" label="Beach-Nautical" />
                  <option value="theme2" label="Casino-Night" />
                  <option value="theme3" label="Elegant" />
                  <option value="theme3" label="Fiesta" />
                  <option value="theme3" label="Fifties" />
                  <option value="theme3" label="Halloween" />
                  <option value="theme3" label="Christmas" />
                  <option value="theme3" label="Hollywood" />
                  <option value="theme3" label="International" />
                  <option value="theme3" label="Racing" />
                  <option value="theme3" label="Space" />
                  
                </Field>
                <ErrorMessage name="theme" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field type="date" id="eventDate" name="eventDate" />
                <ErrorMessage name="eventDate" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field type="time" id="eventTime" name="eventTime" />
                <ErrorMessage name="eventTime" component="div" className="error" />
              </div>
              <div className="form-group">
                <button type="submit">Send</button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
            <div className='googlemap'>
            <div ><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(PartyDelight)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
            </div>
          <p><strong>Ireland Office</strong></p>
          <p>Address: No 14/65, 1st Grafton Street, Dublin, Ireland</p>
          <p>Phone: +91 98414 18847</p>
          <p>Email: <a href="mailto:partydelight@skcet.ac.in">partydelight@skcet.ac.in</a></p>
          <p>Business Hours:</p>
          <p>Monday - Friday: 8am to 6pm</p>
          <p>Saturday: 10am to 2pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
};

export default Contact;
