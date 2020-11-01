import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-home">
        <Link to="/" className="link-home">Home</Link>
      </div>
      <div className="header-plan">
      <Link className="link-plan">Plan Your Route</Link>
      </div>
      <div className="header-transport">
      <Link to="/transportation-types" className="link-transport">Climate Impact by Transportation Type</Link>
      </div>
      <div>
        <img className="header-image" src="https://i.imgur.com/thepnzF.png" alt="user image" />
      </div>
      <div className="header-polices">
      <Link to="/policies-and-initiatives" className="link-polices">Policies + Initiatives</Link>
      </div>
      <div className="header-community">
        <Link className="link-community">Community + Advocacy</Link>
      </div>
      <div className="header-account">
        <Link to="create-your-account" className="link-account">Account</Link>
      </div> 
    </header>
  )
}

export default Header