import React, { useState, useEffect } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import { updateUser, deleteUser, getUser } from '../../services/users';
import './ManageAccount.css';

export default function ManageAccount(props) {
  const [showImageInput, setShowImageInput] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email:'',
    password:'',
    imgURL: '',
    zipcode:''
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser("5fa0749a80028c20b7bdac29");
      setUser(user)
    }
    fetchUser(user);
  }, []);

  return (
    <div>
      <Layout>
        <LogoBanner title="Manage Your Account" />
        <div className="manage-account-main">
          <div className="user-image-parent">
            <img className="user-photo" src={user.imgURL} />
            <p>Edit</p>
          </div>
          <form className="manage-account-form">
            <div className="inline-input-field">
              <label className="manage-label" htmlFor="name">NAME</label>
              <input
                className="manage-account-input"
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter Username"
                required
              />
              <button className="edit-toggle">Edit</button>
            </div>
            <div
              className="inline-input-field">
              <label htmlFor="email">EMAIL</label>
              <input
                className="manage-account-input"
                type="text"
                name="email"
                value={user.email}
                placeholder="Enter Email Address"
                required
                />
              <button className="edit-toggle">Edit</button>

            </div>
            <div className="inline-input-field">
              <div id="password-left">
              <label htmlFor="password">PASSWORD</label>
              <input
                className="manage-account-input"
                id="password-manage-account"
                type="password"
                name="password"
                value={user.password}
                onChange={(e) =>  setUser(e.target.value)}
                placeholder="Enter Password"
                required
                />
                </div>
              <button className="edit-toggle">Edit</button>
            </div>
            <div className="inline-input-field">
              <label className="label-manage-account"  htmlFor="zipcode" id="zip-code">ZIP CODE</label>
              <input
                className="manage-account-input"
                type="text"
                value={user.zipcode}
                name="zipcode"
                placeholder="enter Zip Code"
                required
              />
              <button className="edit-toggle">Edit</button>
            </div>
            {showImageInput ?
              <div className="inline-input-field">
                <label htmlFor="imgURL">IMAGE URL</label>
                <input
                  className="manage-account-input"
                  type="text"
                  name="imgURL"
                  value={user.imgURL}
                  placeholder="enter Zip Code"
                  required
                />
                <button className="edit-toggle">Edit</button>
              </div> : <></>}
            <div className="edit-buttons-container">
              <button type="submit" className="changes-button" id="save-changes">SAVE CHANGES</button>
              <button className="changes-button" id="delete-account">DELETE ACCOUNT</button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}