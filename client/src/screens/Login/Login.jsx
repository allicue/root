import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { getUserEmail } from "../../services/users";
import Layout from "../../../src/components/shared/Layout/Layout";
import footerRoot from "../../Assets/Icons/ROOT_Logo_Primary.svg";
import "./Login.css";
import { useStateValue } from "../../components/LoggedInUser/LoggedInUserContext";

function Login() {
  const [, dispatch] = useStateValue();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = userInfo.email;
    let response;
    try {
      response = await getUserEmail(user);
    } catch (error) {
      response = { email: undefined };
    }

    if (response.email === undefined) {
      alert("Username and/or password does not match");
    } else if (userInfo.password !== response.password) {
      alert("Username and/or password does not match");
    } else {
      dispatch({ type: "SET_USER", loggedInUser: response });
      setLoggedIn(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  if (loggedIn) {
    return <Redirect to={"/"} />;
  }

  return (
    <Layout>
      <div className="login-body">
        <div className="login-logo">
          <img src={footerRoot} alt="Root logo" className="login-root" />
        </div>
        <div className="login-div">
          <h1 className="login-sign">Sign in</h1>
        </div>
        <div className="login-form-parent">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="name-parent">
              <label className="username">Username:</label>
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
              <label className="password">Password:</label>
              <input
                className="login-password"
                name="password"
                type="password"
                value={userInfo.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="login-div-button">
              <button type="submit" className="login-button">
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="login-create">
          <p>
            Don't have an account?{" "}
            <Link to="/create-your-account" className="link-register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
