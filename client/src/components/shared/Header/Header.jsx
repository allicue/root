import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 18px 10px;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #e8e4d9;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    li {
      margin: 0 auto;
      text-transform: capitalize;
      font-weight: 500;
    }
  }
`;

function Header({ open, setOpen }) {
  return (
    <header className="header">
    <Link to="/"> <div className="root-image-container"><img
            className="root-image"
            src="https://i.imgur.com/Du8kCq0.png"
            alt="Root Logo"
      /></div></Link>
      <div className="userpic-container">
       <Link to="/manage-your-account"> <img
            className="profile-pic"
            src="https://lh3.googleusercontent.com/proxy/-hVC0cG5KGGTG98_3Brdbg6RsCaKK6_WO5zCDkfjT1GQe9eMNMWkoOB1x5twwxPwveV5FO74p8sl0AJokN-_nE53Vkwz0x0OJkx4Njs3JiM"
            alt="User"
          /></Link></div>
      <Ul open={open}>
      <Link to ="/"> <img
            className="root-image2"
            src="https://i.imgur.com/Du8kCq0.png"
            alt="Root Logo"
          /> </Link>
        <div className="header-home">
          <li>
            <Link to="/" className="link-home" onClick={() => setOpen(!open)}>
              <img
                className="burger-image home"
                src="https://i.imgur.com/SqphJvM.png"
                alt="Home Icon"
              />
              Home
            </Link>
          </li>
        </div>
        <div className="header-plan">
          <li>
            <Link to="/plan-your-route" className="link-plan" onClick={() => setOpen(!open)}>
              <img
                className="burger-image route"
                id="route-image"
                src="https://i.imgur.com/HcSft8t.png"
                alt="Plan Your Route Icon"
              />
              Plan Your Route
            </Link>
          </li>
        </div>
        <div className="header-transport">
          <li>
            <Link to="/transportation-types" className="link-transport" onClick={() => setOpen(!open)}>
              <img
                className="burger-image leaf"
                src="https://i.imgur.com/aqpyzDP.png"
                alt="Leaf Icon"
              />
              Climate Impact By <br></br> Transportation Type
            </Link>
          </li>
        </div>
        <div>
          <img
            className="header-image"
            src="https://i.imgur.com/thepnzF.png"
            alt="user profile"
          />
        </div>
        <div className="header-polices">
          <li>
            <Link to="/policies-and-initiatives" className="link-polices" onClick={() => setOpen(!open)}>
              <img
                className="burger-image leaf"
                src="https://i.imgur.com/g8kmLXl.png"
                alt="Map Icon"
              />
              Policies + Initiatives
            </Link>
          </li>
        </div>
        <div className="header-community">
          <li>
            <Link to="/" className="link-community" onClick={() => setOpen(!open)}>
              <img
                className="burger-image leaf"
                src="https://i.imgur.com/FOYG4Tk.png"
                alt="Community Icon"
              />
              {!open ? (
                <>
                  Community + <br></br> Advocacy
                </>
              ) : (
                <>Community/Advocacy</>
              )}
            </Link>
          </li>
        </div>
        <div className="header-account">
          <li>
            {!open ? (
              <Link to="create-your-account" className="link-account" onClick={() => setOpen(!open)}>
                Account
              </Link>
            ) : (
              <Link to="manage-your-account" className="link-account" onClick={() => setOpen(!open)}>
                <img
                  className="burger-image manage-account"
                  src="https://i.imgur.com/rHmqcSX.png"
                  alt="Manage Your Account Icon"
                />
                Manage Account
              </Link>
            )}
          </li>
        </div>
      </Ul>
    </header>
  );
}

export default Header;
