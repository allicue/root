import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Form from "./Form";
// import { createAccount } from "../../services/accounts";
// import { Redirect } from "react-router-dom";

function CreateAccountForm() {
  // const [account, setAccount] = useState({
  //   name: "",
  //   imgURL: "",
  //   email: "",
  //   password:"",
  //   zipcode: "",
  // });

  // const [isCreated, setCreated] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAccount({
  //     ...transportationType,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const created = await createAccount(account);
  //   setCreated({ created });
  // };

  // if (isCreated) {
  //   return <Redirect to={"/"} />;
  // }

  return (
    <Form>
       {/*  onSubmit={handleSubmit}> */}
      <div>
        <label className="username" for="username">Name</label>
        <input className="account-input"
          name="username"
          placeholder="Enter Username"
        //  value={account.username}
          required
          autoFocus
        //  onChange={handleChange}
        />
      </div>
      {/* <div>
        <label className="image" for="imgURL">Image</label>
        <input
          name="imgURL"
          placeholder="Insert Image URL"
          required
          autoFocus
          // onChange={handleChange}
        />
      </div> */}

      <div>
        <label className="email-label" for="email">
          Email
        </label>
        <input
          className="account-input"
          name="email"
          placeholder="Enter Email Address"
          // value={account.email}
          required
          autoFocus
        //  onChange={handleChange}
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
        //  value={account.password}
          required
          autoFocus
       //   onChange={handleChange}
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
        //  value={account.password}
          required
          autoFocus
       //   onChange={handleChange}
        />
      </div>
    <div className="bottom-container">
      <div className="terms-of-service">
<input type="checkbox" className="checkbox" required/>
      <p>I agree to all statements in <span>Terms of service</span></p>
      </div>
        <div className='buttons'>
       <Link to="/"> <input type="submit" className="take-me-back" value="TAKE ME BACK"/> </Link>
        <button className="create-button">CREATE ACCOUNT</button>
        </div>
        </div>
    </Form>
  );
}

export default CreateAccountForm;
