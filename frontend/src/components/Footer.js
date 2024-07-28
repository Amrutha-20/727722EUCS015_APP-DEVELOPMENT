import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Party</span>Delight</h1>
          <p>
          PartyDelight is a leading event management company dedicated to crafting memorable experiences for every occasion. We handle everything from corporate gatherings to intimate weddings with professionalism and flair.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest events, offers, and promotions. Enter your email below to subscribe to our monthly newsletter.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section socials">
          <h2>Follow Us</h2>
          <div class="footer-space"></div>
          <div className='social-icons'>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} partydelight.com | Designed by PartyDelight</p>
      </div>
    </footer>
  );
}

export default Footer;
