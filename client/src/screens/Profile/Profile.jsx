import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner'
import Community from '../../Assets/Icons/ROOT_Community_RevWhite.svg'
import Leaf from '../../Assets/Icons/ROOT_Menu_Leaf.png'
import "./Profile.css"
import { LoggedInUserContext } from '../../components/LoggedInUser/LoggedInUserContext'

function Profile() {
  const [loggedInUser] = useContext(LoggedInUserContext)

  const [firstName, setFirstName] = useState('')

  const handler = () => {
    window.innerWidth <= 500 ? setFirstName(loggedInUser.name.split(' ')[0] + "'s Profile") : setFirstName(loggedInUser.name.split(' ')[0])
  }

  useEffect(() => {
    if (loggedInUser.name !== undefined) {
      handler();
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler)
    }
  }, [])


  return (
    <div id="profile-page">
      <Layout >
        <div id="logo-banner">
          <LogoBanner title="Your Profile" />
        </div>
        <div className="profile-main">
          <section className="profile-title-info">
            <img style={loggedInUser.imgURL ? {} : {border: "2px solid lightgray"}}src={loggedInUser.imgURL ? loggedInUser.imgURL : Leaf} id="profile-image" alt="profile pic" />
            <h1 className="profile-name" >{firstName ? firstName : "* Sample * - nobody logged in at this time"}</h1>
          </section>
          <section className="profile-content" >
            <div id="policies-community-container">
              <NavLink to="policies-and-initiatives" id="profile-policies">
                <h3 className="h3-profile" id="profile-policies-text">San Francisco Transportation Policies + Initiatives</h3>
              </NavLink>
              <div id="profile-community">
                <div id="community-text-icon">
                  <h3 className="h3-profile" >community + advocacy</h3>
                  <img src={Community} id="community-logo" alt="Community Logo" />
                </div>
                <div id="community-image" ></div>
              </div>
            </div>
            <NavLink to="transportation-types" id="climate-impact-container" style={{ textDecoration: "none" }} >
              <img id="leaf-icon" src="https://i.imgur.com/aqpyzDP.png" alt="leaf icon" />
              <img id="climate-impact-image" src="https://i.imgur.com/Y7fhEUT.png" alt="Climate Impact" />
              <div id="climate-impact-text">
                <h3 className="h3-profile" id="advocacy-text">climate impact</h3>
                <p id="p-profile">Your Transportation options ranked by carbon emissions.</p>
              </div>
            </NavLink>
          </section>
        </div>
      </Layout>
    </div>
  )
}

export default Profile
