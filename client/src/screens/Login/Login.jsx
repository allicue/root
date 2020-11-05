import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { getUserEmail } from '../../services/users';
import Layout from "../../../src/components/shared/Layout/Layout"
import footerroot from "../../Assets/Icons/ROOT_Logo_Primary.svg"
import "./Login.css"

function Login(props) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })
  const [loggedIn, setLoggedIn] = useState(false)

  // First find if that email exists in our database
  // If the email exists, test to see if the password in the 
  // input field matches the password in our database
  // If it matches, log the user in, and redirect to the Home Page
  // If it doesn't match, alert the user that the password/username is incorrectj

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await getUserEmail(userInfo.email)
    console.log(response)
    props.setLoggedInUser(response)
    setLoggedIn(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  }

  if (loggedIn) {
    return <Redirect to={"/"} />;
  }


  return (
    <Layout>
      <div className="login-body">
        <div className="login-logo">
          <img src={footerroot} alt="Root logo" className="login-root" />
        </div>
        <div className="login-div">
          <h1 className="login-sign">Sign in</h1>
        </div>
        <div className="login-form-parent">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="name-parent">
              <label className="username">
                Username:
            </label>
              <input
                className="login-name"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="Username"
                required
                autoFocus
              />
            </div>
            <div className="password-parent">
              <label className="password">
                Password:
            </label>
              <input
                className="login-password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="login-div-button">
              <button type="submit" className="login-button">Log in</button>
            </div>
          </form>
        </div>

        <div className="login-create">
          <p>Don't have an account? <Link to="/create-your-account" className="link-register">Register</Link></p>
        </div>
      </div>
    </Layout>
  )
}

export default Login