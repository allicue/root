import React, {useState} from "react"
import { Link, Redirect } from "react-router-dom"
import Layout from "../../../src/components/shared/Layout/Layout"
import footerroot from "../../Assets/Icons/ROOT_Logo_Primary.svg"
import "./Login.css"

function Login(props) {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoggedInUser(true)
    setLoggedIn(true)
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
              name="name"
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
              placeholder="Password"
              required
              />
            </div>
          </form>
        </div>
          <div className="login-div-button">
            <button type="submit" className="login-button">Log in</button>
          </div>
        <div className="login-create">
          <p>Don't have an account? <Link to="/create-your-account" className="link-register">Register</Link></p>
        </div>
    </div>
  </Layout>
  )
}

export default Login