import React from "react"
import { Link } from "react-router-dom"
import twitter from "../../../Assets/Icons/ROOT_Twitter.svg"
import instagram from "../../../Assets/Icons/ROOT_Instagram.svg"
import community from "../../../Assets/Icons/ROOT_Vector_Community.svg"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <Link className="link-instagram"><img src={instagram} alt="instagram logo"/></Link>
        <Link to="/" className="link-twitter"><img src={twitter} alt="twitter logo"/></Link>
        <Link className="link-vector-community"><img src={community} alt="community logo"/></Link>
      </div>
      <div className="footer-home">
        <Link to="/" className="link-home">HOME</Link>
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
      <div className="footer-map">
        <Link className="link-sitemap">Sitemap</Link>
        <Link className="link-privacy">Privacy Policy</Link>
        <Link className="link-careers">Careers</Link>
      </div>
    </footer>
  )
}

export default Footer


