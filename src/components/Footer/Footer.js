import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <div className="info">
            <h3 className="info-logo">Cosmetica</h3>
            <p>
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself.
            </p>
            <form>
              <input type="text" placeholder="Enter your email" />
              <button>
                <BsArrowRight />
              </button>
            </form>
          </div>
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>FAQs</li>
              <li>Reviews</li>
              <li>Stories</li>
            </ul>
          </div>
          <div className="privacy">
            <h3>Privacy</h3>
            <ul>
              <li>Privacy</li>
              <li>Policy</li>
              <li>Payments</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>+2348104322236</p>
            <p>peterugbanu@gmail.com</p>
            <div>
              <FaInstagramSquare fontSize={27} />
              <FaLinkedin fontSize={27} />
              <FaFacebookSquare fontSize={27} />
              <FaTwitterSquare fontSize={27} />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>
            © Copyright 2021. Got the design from arshakir.com.All rights
            reserved.
          </p>
          <div>
            <p>Contact Us</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
