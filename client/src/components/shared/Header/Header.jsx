import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
    <div className="menu">
      <div className="header-home">
        <Link to="/" className="link-home">HOME</Link>
      </div>
      <div className="header-plan">
      <Link to="/plan-your-route" className="link-plan">PLAN YOUR ROUTE</Link>
      </div>
      <div className="header-transport">
      <Link to="/transportation-types" className="link-transport">CLIMATE IMPACT BY <br></br> TRANSPORTATION TYPE</Link>
      </div>
      <div>
        <img className="header-image" src="https://i.imgur.com/thepnzF.png" alt="user profile" />
      </div>
      <div className="header-polices">
      <Link to="/policies-and-initiatives" className="link-polices">POLICIES + INITIATIVES</Link>
      </div>
      <div className="header-community">
        <Link to="/" className="link-community">COMMUNITY + <br></br> ADVOCACY</Link>
      </div>
      <div className="header-account">
        <Link to="create-your-account" className="link-account">ACCOUNT</Link>
        </div> 
      </div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
    </header>
  )
}

export default Header