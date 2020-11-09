import React from 'react';
import StyledLogoBanner from "./StyledLogoBanner";
import { Link, useLocation } from 'react-router-dom';

function LogoBanner(props) {
  
  let location = useLocation();

  if (location.pathname === '/') {
    return <> </>
  }

  return (
    <>
      <StyledLogoBanner>
    {/* <div className="top-left-container"> */}
          <div className="logo-title-container">
      <p className="page-direction">
        <Link to="/">Home</Link>/{" "}
        <Link to="/policies-and-initiatives">{props.title}</Link>
          </p>
      <Link to="/">
        <img
          className="root-logo"
          src="https://i.imgur.com/mV0w6j7.png"
          alt="ROOT Logo"
        />
      </Link>
      <h1 className="title">{props.title}</h1>
          </div>
          {/* </div> */}
        </StyledLogoBanner>
        </>
  )
}

export default LogoBanner
