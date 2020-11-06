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

  const P = styled.p`
      width: 50%;
      white-space: wrap;
      margin: 0 auto;

      @media screen  and (max-width: 500px){
        width: 100%;
      white-space: nowrap;
      }
  `

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
    alert(`Welcome to ROOT, ${user.name}!`)
    return <Redirect to={"/"} />;
  }

  return (
    <>
      <div className="picture-container">
        {props.imagePreview === "" ? (
          <div className="user-picture"> </div>
        ) : (
          <ImagePreview src={props.imagePreview} alt="Error: Invalid Image URL" />
        )}
        <div className="add-image">
        <P
          className=""
          onClick={() => props.setImagePreview(user.imgURL)}
        >
            Preview
            image
        </P>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label className="username" for="name">
            Name
          </label>
          <input
            className="account-input"
            name="name"
            placeholder="Full Name"
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
            placeholder="Email"
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
            placeholder="Password"
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
            placeholder="Zip Code"
            required
            autoFocus
            value={user.zipcode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="image-label" for="imgURL">
            IMAGE URL
          </label>
          <input
            className="account-input"
            name="imgURL"
            placeholder="Image URL"
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
            <button className="create-button">Create Account</button>
          </div>
            <div className="already">
          <p>  Already have an account? <Link to="/login"><span>Log in</span> </Link></p>
           </div>
        </div>
      </Form>
    </>
  );
}

export default CreateAccountForm;
