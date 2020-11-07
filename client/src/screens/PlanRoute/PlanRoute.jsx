import React from 'react';
import ClockIcon from '../../Assets/Icons/ROOT_Time.png';
import LeafIcon from '../../Assets/Icons/ROOT_Leaf.png';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import Layout from '../../components/shared/Layout/Layout';
import PlanRouteStyled from './PlanRouteStyled';
import MapPin from '../../Assets/Icons/ROOT_MapPin-17.png';
import WorldImg from '../../Assets/Images/Hi-Res/Frame_16.png';
import './PlanRoute.css';

function PlanRoute(props) {
  return (
    <Layout>
      <div className="plan-route-page">
      
        <div className="plan-form-container">
          <div className="column-a">
            <PlanRouteStyled>
              <div className="breadcrumb-plan-container">
                <LogoBanner title="Plan Your Route" />
              </div>
            </PlanRouteStyled>
            
            <div className="plan-header-mobile">Plan Your Route</div>
            
            <form className="plan-form">
              <div className="input-field-container">
                <input className="plan-input" id="current-location-field" placeholder="Current Location"></input>
                <img src={MapPin} className="location-icon" alt="map-pin" />
              </div>

            <input className="plan-input" placeholder="Destination"></input>
            <button className="plan-button">Find my route options!</button>
            </form>
          </div>
          <div className='column-b'><img className="world-image" src={WorldImg} alt="globe"/></div>
        </div>
        <hr className="plan-breakpoint"></hr>
        <div className="grid-view">
          <div className="grid-section">
            <section className="grid-icons">
              <img className="grid-leaf-icon" src={LeafIcon} alt="leaf"/>
              <img className="grid-leaf-icon" src={LeafIcon} alt="leaf"/>
              <img className="grid-leaf-icon" src={LeafIcon} alt="leaf"/>
              <img className="grid-leaf-icon" src={LeafIcon} alt="leaf"/>
              <img className="grid-leaf-icon" src={LeafIcon} alt="leaf"/>
            </section>
            <section className="grid-text"><h2 className="grid-text">See Green Ratings</h2></section>
          </div>
          <div className="grid-breakpoint"></div>
          <hr className="mobile-breakpoint"></hr>
          <div className="grid-section">
            <section className="grid-icons">
              <img className="clock-icon" src={ClockIcon} alt="clock"/>
            </section>
            <section className="grid-text">
              <h2 className="grid-text">View Time to <br className="break"></br> Destination</h2>
            </section>
          </div>
          <div className="grid-breakpoint"></div>
          <hr className="mobile-breakpoint"></hr>
          <div className="grid-section">
            <section className="grid-icons">$$$</section>
            <section className="grid-text"><h2 className="grid-text">View Potential <br className="break"></br> Cost of Trip</h2></section>
          </div>
        </div>
        </div>
      </Layout>
  );
}

export default PlanRoute;