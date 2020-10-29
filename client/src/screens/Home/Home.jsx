import React from 'react';

function Home(props) {
  return (
    <div className="homepage">
      
      <div className="homepage-header"> 
        <img />
          <div className="homepage-header-text-container">
            <h2>GREEN TRANSPORT</h2>
            <p>Articles, News and Inspiration For You</p>
            <p>California Will Phase Out Gasoline-Powered Cars in Fight Against Climate Change ></p>
          </div>
      </div>
      <div className="homepage-header-navbar">
        <button>Plan Your Route</button>
        <button>Climate Impact By Transportation Type</button>
        <button>Transportation Policies + Initiatives</button>
      </div>

      <div className="homepage-body">
        <section className="policies-section"></section>
        <section className="climate-impact-section"></section>
        <section className="community-advocacy-section"></section>
      </div>

    </div>
  );
}

export default Home;