import React from 'react';
import "./Home.css";
import Logo from '../../Assets/Icons/ROOT_Logo_RevWhite.png';
import LeafIcon from '../../Assets/Icons/ROOT_Menu_Leaf.png';
import CommunityIcon from '../../Assets/Icons/ROOT_Community_RevWhite.png';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout'

function Home(props) {
  return (
    <Layout title="">
    <div className="homepage">
      
      <div className="homepage-header"> 
        <img className="homepage-root-logo" alt="root-logo" src={Logo}/>
          <div className="homepage-header-text-container">
          <h2 className="homepage-subtitle">GREEN TRANSPORT</h2>
          <div className="homepage-news-container">
            <p className="homepage-subtitle-a">Articles, News and Inspiration For You</p>
            <a className="homepage-subtitle-b-link" rel="noreferrer" target="_blank" href="https://www.gov.ca.gov/2020/09/23/governor-newsom-announces-california-will-phase-out-gasoline-powered-cars-drastically-reduce-demand-for-fossil-fuel-in-californias-fight-against-climate-change/">
              <p className="homepage-subtitle-b">California Will Phase Out Gasoline-Powered Cars in <br></br>Fight Against Climate Change </p>
            </a>
          </div>
        </div>
        <hr className='header-line'></hr>
        <nav className="homepage-header-navbar">
          <Link to="/plan-your-route"><button className="homepage-button"><p className="button-text">Plan Your Route</p></button></Link>
          <Link to="/transportation-types"><button className="homepage-button"><p className="button-text">Climate Impact By Transportation Type</p></button></Link>
          <Link to="/policies-and-initiatives"><button className="homepage-button"><p className="button-text">Transportation <br></br>Policies + Initiatives</p></button></Link>
        </nav>
      </div>

      <div className="homepage-body">
          <div className="column">
          <Link to="/policies-and-initiatives">
            <section className="policies-section">
              <span className="policies-text">
                <h3 className="policies-text-headline">TRANSPORTATION <br></br>POLICIES + INITIATIVES</h3>
                <p>See what's happening in our list of locations!</p>
              </span>
              </section>
            </Link>
            <section className="community-advocacy-section">
              <div className="community-a">
                <h3 className="community-a-title">COMMUNITY + ADVOCACY</h3>
                <img src={CommunityIcon} className="community-icon" alt="community" />
              </div>
              <div className="community-b"></div>
              </section>
          </div>
          <div className="column column-b">
            <Link className="climate-link" to="/transportation-types">
              <section className="climate-impact-section">
                <div className="climate-impact-img"><img src={LeafIcon} className="leaf-icon" alt="leaf"/></div>
              <h3 className="climate-impact-header">CLIMATE IMPACT</h3>
              <p className="climate-impact-text">Your Transportation options ranked by carbon emissions.</p>
              </section>
            </Link>
          </div>
      </div>
      

      </div>
      </Layout>
  );
}

export default Home;