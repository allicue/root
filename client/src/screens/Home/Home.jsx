import React from 'react';
import "./Home.css";
import Logo from './photos/ROOT_Logo_RevWhite.png';
import CommunityImg from './photos/molly_profile_community_advocacy_1res.png';

function Home(props) {
  return (
    <div className="homepage">
      
      <div className="homepage-header"> 
        <img className="root-logo" src={Logo}/>
          <div className="homepage-header-text-container">
            <h2>GREEN TRANSPORT</h2>
            <p>Articles, News and Inspiration For You</p>
            <p>California Will Phase Out Gasoline-Powered Cars in Fight Against Climate Change ></p>
        </div>
        <hr></hr>
        <nav className="homepage-header-navbar">
          <button><p className="button-text">Plan Your Route</p></button>
          <button><p className="button-text">Climate Impact By Transportation Type</p></button>
          <button><p className="button-text">Transportation <br></br>Policies + Initiatives</p></button>
        </nav>
      </div>

      <div className="homepage-body">
        <section className="policies-section">
          <span className="policies-text">
            <h3 className="policies-text-headline">TRANSPORTATION <br></br>POLICIES + INITIATIVES</h3>
            <p>See what's happening in our list of locations!</p>
          </span>
        </section>
        <section className="climate-impact-section">
          <h3>CLIMATE IMPACT</h3>
          <p>Your Transportation options ranked by carbon emissions.</p>
        </section>
        <section className="community-advocacy-section">
          <div className="community-a"><h3>COMMUNITY + ADVOCACY</h3></div>
          <div className="community-b"><img className="community-advocacy-img" src={CommunityImg}/></div>
        </section>
      </div>

    </div>
  );
}

export default Home;