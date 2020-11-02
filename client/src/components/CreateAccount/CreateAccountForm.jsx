import React from "react";
import { Link } from "react-router-dom";
import Form from "./CreateUserForm";

function CreateAccountForm() {
  return (
    <Form>
      <div>
        <label className="username" for="username">
          Name
        </label>
        <input
          className="account-input"
          name="username"
          placeholder="Enter Username"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="email-label" for="email">
          Email
        </label>
        <input
          className="account-input"
          name="email"
          placeholder="Enter Email Address"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="password-label" for="password">
          Password
        </label>
        <input
          className="account-input"
          name="password"
          type="password"
          placeholder="Enter Password"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="zipcode-label" for="zipcode">
          ZIP CODE
        </label>
        <input
          className="account-input"
          name="zipcode"
          placeholder="Enter Zipcode"
          required
          autoFocus
        />
      </div>
      <div className="bottom-container">
        <div className="terms-of-service">
          <input type="checkbox" className="checkbox" required />
          <p>
            I agree to all statements in <span>Terms of Service</span>
          </p>
        </div>
        <div className="buttons">
          <Link to="/">
            <input
              type="submit"
              className="take-me-back"
              value="TAKE ME BACK"
            />
          </Link>
          <button className="create-button">CREATE ACCOUNT</button>
        </div>
      </div>
    </Form>
  );
}

export default CreateAccountForm;
