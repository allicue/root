import React, { useState, useEffect } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import { updateUser, deleteUser, getUser } from '../../services/users';
import './ManageAccount.css';

export default function ManageAccount(props) {
  const [updated, setUpdated] = useState(false)
  
  const [showImageInput, setShowImageInput] = useState(false)

  const [user, setUser] = useState({
    name: '',
    email:'',
    password:'',
    imgURL: '',
    zipcode:''
  });

  // Temporary ID to test CRUD 
  // Will take signedInUser.id state when user sign-in is implemented
  let tempID = "5fa0749a80028c20b7bdac29"


  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(tempID);
      setUser(user)
    }
    fetchUser(user);
  }, [updated]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await updateUser(tempID, user)
    setUpdated(!updated)
  }

  const handleImageSelect = () => {
    setShowImageInput(!showImageInput)
  }

  const selectedColor = { backgroundColor: "rgba(117, 159, 92, .5)" }

  return (
    <div>
      <Layout>
        <LogoBanner title="Manage Your Account" />
        <div className="manage-account-main">
          <div className="user-image-parent">
            <img className="user-photo" src ={ user.imgURL } />
            <p className="toggle-input-img" onClick={handleImageSelect}>Edit</p>
          </div>
          <form className="manage-account-form" onSubmit={handleSubmit}>
            <div className="inline-input-field">
              <label className="manage-label" htmlFor="name">NAME</label>
              <input
                className="manage-account-input"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter Username"
                required
              />
            </div>
            <div
              className="inline-input-field">
              <label htmlFor="email">EMAIL</label>
              <input
                className="manage-account-input"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                required
              
                />
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
                onChange={handleChange}
                placeholder="Enter Password"
                required
                />
                </div>
            </div>
            <div className="inline-input-field">
              <label className="label-manage-account"  htmlFor="zipcode" id="zip-code">ZIP CODE</label>
              <input
                className="manage-account-input"
                type="text"
                value={user.zipcode}
                onChange={handleChange}
                name="zipcode"
                placeholder="enter Zip Code"
                required
              />
            </div>
            {showImageInput ?
              <div className="inline-input-field">
                <label htmlFor="imgURL">IMAGE URL</label>
                <input
                  className="manage-account-input"
                  type="text"
                  name="imgURL"
                  value={user.imgURL}
                  onChange={handleChange}
                  placeholder="enter Zip Code"
                  required
                />
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