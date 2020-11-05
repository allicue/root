import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Ul from "./Ul";
import { onResize } from "../../../utils/helpers";

function Header({ open, setOpen, loggedInUser }) {
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <header className="header">
      <div className="root-image-container">
        <Link to="/">
          <img
            className="root-image"
            src="https://i.imgur.com/Du8kCq0.png"
            alt="Root Logo"
          />
        </Link>
      </div>
      <div className="userpic-container">
        <Link to="/manage-your-account">
          {" "}
          <img
            className="profile-pic"
            src={loggedInUser?.imgURL}
            alt="User"
          />
        </Link>
      </div>
      <Ul id="menu" className="menu" open={open}>
        <div className="header-link-container" id="header-home">
          <li>
            <Link to="/" className="header-link" id="link-home">
              <img
                className="burger-image home"
                src="https://i.imgur.com/SqphJvM.png"
                alt="Home Icon"
              />
              <div className="header-span"> Home </div>
            </Link>
          </li>
        </div>
        <div className="header-link-container" id="header-plan">
          <li>
            <Link
              to="/plan-your-route"
              className="header-link"
              id="link-plan"
              onClick={() => setOpen(!open)}
            >
              <img
                className="burger-image route"
                id="route-image"
                src="https://i.imgur.com/HcSft8t.png"
                alt="Plan Your Route Icon"
              />
              <div className="header-span"> Plan Your Route </div>
            </Link>
          </li>
        </div>
        <div className="header-link-container" id="header-transport">
          <li>
            <Link to="/transportation-types" className="header-link" id="link-transport">
              <img
                className="burger-image leaf"
                src="https://i.imgur.com/aqpyzDP.png"
                alt="Leaf Icon"
              />
              <div className="header-span">
                {" "}
                Climate Impact By <br></br> Transportation Type{" "}
              </div>
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
        <div className="header-link-container" id="header-polices">
          <li>
            <Link to="/policies-and-initiatives" className="header-link" id="link-polices">
              <img
                className="burger-image leaf"
                src="https://i.imgur.com/g8kmLXl.png"
                alt="Map Icon"
              />
              <div className="header-span"> Policies + Initiatives </div>
            </Link>
          </li>
        </div>
        <div className="header-link-container" id="header-community">
          <li>
            <Link to="/" className="header-link" id="link-community">
              <img
                className="burger-image leaf"
                src="https://i.imgur.com/FOYG4Tk.png"
                alt="Community Icon"
              />
              {!open ? (
                <>
                  <div className="header-span">
                    {" "}
                    Community <br></br> + Advocacy{" "}
                  </div>
                </>
              ) : (
                  <div className="header-span">
                    {" "}
                    <>Community/Advocacy</>{" "}
                  </div>
                )}
            </Link>
          </li>
        </div>
        <div className="header-link-container" id="header-account">
          <li>
            {!open ? (
              <Link to="create-your-account" className="header-link" id="link-account">
                <div id="header-span"> Account </div>
              </Link>
            ) : (
                <Link to="manage-your-account" className="header-link" id="link-account">
                  <img
                    className="burger-image manage-account"
                    src="https://i.imgur.com/rHmqcSX.png"
                    alt="Manage Your Account Icon"
                  />
                  <div id="header-span"> Manage Account </div>
                </Link>
              )}
          </li>
        </div>
      </Ul>
    </header>
  );
}

export default Header;
