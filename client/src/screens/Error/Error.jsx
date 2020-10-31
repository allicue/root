import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import StyledError from './styledError'

function Error() {
  let location = useLocation()
    return (
      <>
        <StyledError>
        <h1> Error 404</h1>
          <img src="https://i.imgur.com/q4DDzXT.png" alt="Sad Emoji" />
          <p>Sorry, {location.pathname.replace('/', '')} doesn't exist!</p>
      <NavLink to='/'> Go Back </NavLink>
      </StyledError>
           </>
    )
  }
  
  export default Error 
  