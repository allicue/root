import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #e8e4d9;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
  
    li {
      margin: 0 auto;
      
    }
  }
`;

function Header({ open }) {
  return (
    <header className="header">
     <Ul open={open}>
      <div className="header-home">
      <li>  <Link to="/" className="link-home">HOME</Link> </li>
      </div>
      <div className="header-plan">
      <li>  <Link to="/plan-your-route" className="link-plan">PLAN YOUR ROUTE</Link> </li>
      </div>
      <div className="header-transport">
    <li>  <Link to="/transportation-types" className="link-transport">CLIMATE IMPACT BY <br></br> TRANSPORTATION TYPE</Link> </li>
      </div>
      <div>
        <img className="header-image" src="https://i.imgur.com/thepnzF.png" alt="user profile" />
      </div>
      <div className="header-polices">
     <li> <Link to="/policies-and-initiatives" className="link-polices">POLICIES + INITIATIVES</Link> </li>
      </div>
      <div className="header-community">
    <li>    <Link to="/" className="link-community">COMMUNITY + <br></br> ADVOCACY</Link> </li>
      </div>
      <div className="header-account">
     <li>  <Link to="create-your-account" className="link-account">ACCOUNT</Link> </li>
        </div> 
 </Ul>
    </header>
  )
}

export default Header