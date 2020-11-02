import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import StyledError from './styledError'
import Layout from '../../components/shared/Layout/Layout'
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner'
function Error() {
  let location = useLocation()
    return (
      <Layout>
        <LogoBanner title="Error 404"/>
        <StyledError>
          <img src="https://i.imgur.com/q4DDzXT.png" alt="Sad Emoji" />
          <p>Sorry, {location.pathname.replace('/', '')} doesn't exist!</p>
      <NavLink to='/'> Go Back </NavLink>
          </StyledError>
          </Layout>
    )
  }
  
  export default Error 
  