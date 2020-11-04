import React from "react"
import { Link } from "react-router-dom"
import Layout from "../../../src/components/shared/Layout/Layout"
import footerroot from "../../Assets/Icons/ROOT_Logo_Primary.svg"
import "./Login.css"

function Login(props) {
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
          <form className="login-form">
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
            <button className="login-button"><Link to="/" className="button-link">Log in</Link></button>
          </div>
        <div className="login-create">
          <p>Don't have an account? <Link to="/create-your-account" className="link-register">Register</Link></p>
        </div>
    </div>
  </Layout>
  )
}

export default Login