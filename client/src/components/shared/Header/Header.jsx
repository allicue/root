import React from "react"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div>
        <p className="header-home">Home</p>
      </div>
      <div>
      <p className="header-plan">Plan Your Route</p>
      </div>
      <div>
      <p className="header-transport">Climate Type by Transportation Type</p>
      </div>
      <div>
        <img src="https://i.imgur.com/gC1ttIE.png" alt="user image" />
      </div>
      <div>
      <p className="header-polices">Policies + initiatives</p>
      </div>
      <div>
        <p className="header-community">Community + Advocacy</p>
      </div>
      <div>
        <p className="header-account">Account</p>
      </div> 
    </header>
  )
}

export default Header