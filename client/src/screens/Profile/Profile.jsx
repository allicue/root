import React, { useContext } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner'
import Community from '../../Assets/Icons/ROOT_Community_RevWhite.svg'
import "./Profile.css"
import { LoggedInUserContext } from '../../components/LoggedInUser/LoggedInUserContext'

function Profile() {
  const [loggedInUser] = useContext(LoggedInUserContext)

  // const firstName = loggedInUser.name.split(' ')[0]+ "'s"


  return (
    <div >
      <Layout >
        <div id="logo-banner">
          <LogoBanner title="Your Profile" />
        </div>
        <div className="profile-main">
        <section className="profile-title-info">
          <img src="https://i.imgur.com/9gUEvjL.png" id="profile-image" alt="profile pic" />
          <h1 className="profile-name">Eddie's Profile</h1>
        </section>
        <section className="profile-content" >
          <div id="policies-community-container">
            <div id="profile-policies">
              <h3 className="h3-profile" id="profile-policies-text">San Francisco Transportation Policies + Initiatives</h3>
            </div>
            <div id="profile-community">
              <div id="community-text-icon">
                <h3 className="h3-profile" >Community + Advocacy</h3>
                <img src={Community} id="community-logo" alt="Community Logo" />
              </div>
              <div id="community-image" ></div>
            </div>
          </div>
          <div id="climate-impact-container">
            <img id="climate-impact-image" src="https://i.imgur.com/Y7fhEUT.png" alt="Climate Impact" />
            <div id="climate-impact-text">
              <h3 className="h3-profile" id="advocacy-text">Climate Impact</h3>
              <p id="p-profile">Your Transportation options ranked by carbon emissions.</p>
            </div>
          </div>
        </section>
        </div>
      </Layout>
    </div>
  )
}

export default Profile

// Plug in below code when done styling

{/* <img src={loggedInUser.imgURL} id="profile-image" alt={loggedInUser._id} />
<h1 className="profile-name">{firstName} Profile</h1> */}