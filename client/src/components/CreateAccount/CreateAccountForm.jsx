import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createUser } from "../../services/users";
import Form from "./CreateUserForm";
import styled from "styled-components";

function CreateAccountForm(props) {
  const ImagePreview = styled.img`
    border-radius: 50%;
    min-width: 120px;
    min-height: 120px;
    max-width: 120px;
    max-height: 120px;
  `;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    imgURL: "",
    zipcode: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createUser(user);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={"/transportation-types"} />;
  }

  return (
    <>
      <div className="picture-container">
        {props.imagePreview === "" ? (
          <div className="user-picture"> </div>
        ) : (
          <ImagePreview src={props.imagePreview} alt="Profile Image" />
        )}
        <p
          className="add-image"
          onClick={() => props.setImagePreview(user.imgURL)}
        >
          Preview
          <br />
          image
        </p>
      </div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label className="username" for="name">
            Name
          </label>
          <input
            className="account-input"
            name="name"
            placeholder="Enter Username"
            required
            value={user.name}
            autoFocus
            onChange={handleChange}
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
            value={user.email}
            onChange={handleChange}
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
            value={user.password}
            autoFocus
            onChange={handleChange}
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
            value={user.zipcode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="password-label" for="imgURL">
            IMAGE URL
          </label>
          <input
            className="account-input"
            name="imgURL"
            placeholder="Enter Image URL"
            required
            value={user.imgURL}
            autoFocus
            onChange={handleChange}
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
    </>
  );
}

export default CreateAccountForm;
