import React from 'react'
import Styled from "./Styled";
import { Link, useLocation } from 'react-router-dom'

function LogoBanner(props) {
  
  let location = useLocation()

  if (location.pathname === '/') {
    return <> </>
  }

  return (
    <>
      <Styled>
    <div className="top-left-container">
      <p className="page-direction">
        <Link to="/">Home</Link>/{" "}
        <Link to="/policies-and-initiatives">Policies + Initiatives</Link>
          </p>
          <div className="logo-title-container">
      <Link to="/">
        <img
          className="root-logo"
          src="https://i.imgur.com/mV0w6j7.png"
          alt="ROOT Logo"
        />
      </Link>
      <h1 className="title">{props.title}</h1>
          </div>
          </div>
        </Styled>
        </>
  )
}

export default LogoBanner
