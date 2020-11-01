import React from 'react';
import ClockIcon from '../../Assets/Icons/ROOT_Time.png';
import LeafIcon from '../../Assets/Icons/ROOT_Leaf.png';
// import LogoBanner from '../../components/shared/LogoBanner';
import WorldImg from '../../Assets/Images/Hi-Res/Frame_16.png';
import './PlanRoute.css';

function PlanRoute(props) {
  return (
    <div className="plan-route-page">
      <div className="plan-form-container">
        <div className="column-a">
          {/* <LogoBanner /> */}
        <form className="plan-form">
          <input className="plan-input" placeholder="Current Location"></input>
          <input className="plan-input" placeholder="The Metropolitan Museum of Art (MET)"></input>
          <button className="plan-button">FIND MY ROUTE OPTIONS!</button>
          </form>
        </div>
        <div className='column-b'><img className="world-image" src={WorldImg} alt="globe"/></div>
      </div>
      <hr className="plan-breakpoint"></hr>
      <div className="grid-view">
        <div className="grid-section-a">
          <section className="grid-icons">
            <img className="grid-leaf-icon" src={LeafIcon} />
            <img className="grid-leaf-icon" src={LeafIcon} />
            <img className="grid-leaf-icon" src={LeafIcon} />
            <img className="grid-leaf-icon" src={LeafIcon} />
            <img className="grid-leaf-icon" src={LeafIcon} />
          </section>
          <section className="grid-text"><h2>See Green Ratings</h2></section>
        </div>
        <div className="grid-breakpoint"></div>
        <div className="grid-section-b">
          <section className="grid-icons">
            <img className="clock-icon" src={ClockIcon} />
          </section>
          <section className="grid-text">
            <h2>View Time to Destination</h2>
          </section>
        </div>
        <div className="grid-breakpoint"></div>
        <div className="grid-section-c">
          <section className="grid-icons">$$$</section>
          <section className="grid-text"><h2>View Potential Cost of Trip</h2></section>
        </div>
      </div>
    </div>
  );
}

export default PlanRoute;