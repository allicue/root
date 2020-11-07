import React from "react"
import { Link } from "react-router-dom"
import twitter from "../../../Assets/Icons/ROOT_Twitter.svg"
import instagram from "../../../Assets/Icons/ROOT_Instagram.svg"
import community from "../../../Assets/Icons/ROOT_Vector_Community.svg"
import footerroot from "../../../Assets/Icons/ROOT_Logo_Primary.svg"
import "./Footer.css"

function Footer() {
  return (

    <footer className="footer">
      <div className="parent-links">
        <div className="footer-social">
          <a href="https://twitter.com/ROOT26795570" rel="noreferrer" target="_blank"><img src={twitter} alt="twitter logo" className="link-social" /></a>
          <Link><img src={instagram} alt="instagram logo" className="link-social" /></Link>
          <Link><img src={community} alt="community logo" className="link-social" /></Link>
        </div>
        <div className="root-logo">
          <img src={footerroot} alt="Root logo" className="footer-root" />
        </div>
      </div>
      <div className="page-links">
        <Link to="/" className="link-bar">HOME</Link>
        <Link className="link-bar">ABOUT US</Link>
        <Link className="link-bar">CONTACT</Link>
        <Link className="link-bar">STAY CONNECTED</Link>
      </div>
      <hr className="footer-line"></hr>
      <hr className="mobile-footer-line"></hr>
        <div className="footer-social-static-mobile">
          <a href="https://twitter.com/ROOT26795570" rel="noreferrer" target="_blank"><img src={twitter} alt="twitter logo" className="link-social" /></a>
          <Link><img src={instagram} alt="instagram logo" className="link-social" /></Link>
          <Link><img src={community} alt="community logo" className="link-social" /></Link>
        </div>
      <hr className="mobile-footer-line"></hr>
      <div className="footer-bottom">
        <div className="footer-map">
          <div className="footer-column">
            <Link className="link-sitemap">Sitemap</Link>
            <Link className="link-sitemap">Privacy Policy</Link>
            <Link className="link-sitemap">Careers</Link>
          </div>
          <div className="footer-column footer-column-b">
            <div className="phone-number-box-mobile">
              <small id="phone-number-box-mobile">1 (327) 496-6765</small>
            </div>
          </div>
        </div>
        <div className="message-parent">
          <div className="message-container">
            <p className="message-commit">COMMITTED TO OUR SUSTAINABLE FOCUSED COMMUNITY</p>
          </div>
          <p className="message-mission">ROOT is committed to supporting the community of sustainable minded warriors working to support a more sustainable lifestyle.</p>
        </div>
        <hr className="mobile-footer-line"></hr>
        <div className="contact-div">
          <div className="info-div">
            <p className="info-email">Join our community for news, tips, and advocacy information</p>
            <form className="email">
              <div className="email-container">
                <input type="text" placeholder="email address" className="email-text" />
                <button type="submit" className="email-submit">Sign Up</button>
              </div>
            </form>
            <hr className="mobile-footer-line"></hr>
            <div className="phone-number-box">
              <small id="phone-number-box">1 (327) 496-6765</small>
            </div>
          </div>
        </div>
      </div>
      <div className="address-parent">
        <div className="address">
          <p>ROOT Enterprises - 20949 Park Ave., Suite 536, New York, NY 10023 MAP | Support (212) 772-9629 | &copy; 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


