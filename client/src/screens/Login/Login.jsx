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
            <label className="password">
              Password:
            </label>
            <input
              className="login-password"
              name="password"
              placeholder="Password"
              required
            /> 
          </form>
        </div>
          <div className="login-div-button">
            <button className="login-button">Log in</button>
          </div>
        <div className="login-create">
          <p>Don't have an account?</p>
          <Link to="/create-your-account">Register</Link>
        </div>
    </div>
  </Layout>
  )
}

export default Login