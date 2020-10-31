import React from "react"
import { Link } from "react-router-dom"
import twitter from "../../../Assets/Icons/ROOT_Twitter.svg"
import instagram from "../../../Assets/Icons/ROOT_Instagram.svg"
import community from "../../../Assets/Icons/ROOT_Vector_Community.svg"
import Root from "../../../Assets/Icons/ROOT_Logo_Primary.svg"
// import leaf from "../../../Assets/Icons/ROOT_Menu_Leaf.svg"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="parent-links">
        <div className="footer-social">
          <Link><img src={instagram} alt="instagram logo" className="link-instagram"/></Link>
          <Link to="/"><img src={twitter} alt="twitter logo" className="link-twitter"/></Link>
          <Link><img src={community} alt="community logo" className="link-vector-community" /></Link>
        </div>
      <div className="root-logo">
        <img src={Root} alt="Root logo" className="footer-root"/>
      </div>
      </div>
      <div className="page-links">
      <div className="footer-home">
        <Link to="/" className="link-home-footer">HOME</Link>
      </div>
      <div className="footer-about">
        <Link className="link-about">ABOUT US</Link>
      </div>
      <div className="footer-contact">
        <Link className="link-contact">CONTACT US</Link>
      </div>
      <div className="footer-connected">
        <Link className="link-connected">STAY CONNECTED</Link>
        </div>
      </div>
      <hr className="footer-line"></hr>
      <div className="footer-map">
        <Link className="link-sitemap">Sitemap</Link>
        <Link className="link-privacy">Privacy Policy</Link>
        <Link className="link-careers">Careers</Link>
      </div>
      <div className="message-parent">
        <div className="message-container">
          <p className="message-commit">COMMITTED TO OUR SUSTAINABLE FOCUSED COMMUNITY</p>
          <p className="message-mission">ROOT is committed to supporting the community of sustainable minded warriors working to support a more sustainable lifestyle.</p>
          {/* <img src={leaf} alt="leaf logo" className="message-leaf"/> */}
        </div>
      </div>
      <div className="contact-div">
        <div className="info-div">
          <p className="info-email">Join our community for news, tips, and advocacy information</p>
          <form className="email">
            <input type="text" value="email address" className="email-text" />
            <input type="submit" value="Sign Up" className="email-submit"/>
          </form>
          <small className="phone-number-box">1 (327) 496-6765</small>
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


