import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Experienced in everything that keeps our clients secure
        </p>
        <p className="footer-subscription-text">You can Contact us any time.</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Contact Now</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Services</h2>
            <Link to="/sign-up">Data Analysis</Link>
            <Link to="/">AI & ML Solution</Link>
            <Link to="/">Web Application</Link>
            <Link to="/">video analytics</Link>
            <Link to="/">Software Development</Link>
          </div>
          <div class="footer-link-items">
            <h2>Our Products</h2>
            <Link to="/">FVSumm</Link>
            <Link to="/">FAnomaly</Link>
            <Link to="/">Object Detetcion</Link>
            <Link to="/">Resume Automation</Link>
            <Link to="/">FInvoice Automation</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us </h2>
            <Link to="/">Head Office Banglore </Link>
            <Link to="/">Mr.Deepak </Link>
            <Link to="/">Chennai Branch </Link>
            <Link to="/">Mr.Vinsent </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
