import React from "react"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-home">
        <p>Home</p>
      </div>
      <div className="header-plan">
      <p>Plan Your Route</p>
      </div>
      <div className="header-transport">
      <p>Climate Type by Transportation Type</p>
      </div>
      <div >
        <img className="header-image" src="https://i.imgur.com/gC1ttIE.png" alt="user image" />
      </div>
      <div className="header-polices">
      <p>Policies + initiatives</p>
      </div>
      <div className="header-community">
        <p>Community + Advocacy</p>
      </div>
      <div className="header-account">
        <p>Account</p>
      </div> 
    </header>
  )
}

export default Header