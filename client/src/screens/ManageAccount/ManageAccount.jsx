import React, { useState, useEffect } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import { updateUser, deleteUser, getUser } from '../../services/users';
import './ManageAccount.css';

export default function ManageAccount(props) {
  const [updateName, setUpdateName] = useState(false)
  const [updateEmail, setUpdateEmail] = useState(false)
  const [updatePassword, setUpdatePassword] = useState(false)
  const [updateZipCode, setUpdateZipCode] = useState(false)
  const [updateImgUrl, setUpdateImgUrl] = useState(false)
  const selectedColor = { backgroundColor: "rgba(117, 159, 92, .5)" }

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
    if (showImageInput === true) {
      setUpdateImgUrl(false)
    }
  }

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
                onChange={updateName ? handleChange : null}
                style={updateName ? selectedColor : null}
                placeholder="Enter Username"
                required
              />
              <button onClick={() => setUpdateName(!updateName)} className="edit-toggle">Edit</button>
            </div>
            <div
              className="inline-input-field">
              <label htmlFor="email">EMAIL</label>
              <input
                className="manage-account-input"
                type="text"
                name="email"
                value={user.email}
                onChange={updateEmail ? handleChange : null}
                style={updateEmail ? selectedColor : null}
                placeholder="Enter Email Address"
                required
              
                />
              <button onClick={() => setUpdateEmail(!updateEmail)} className="edit-toggle">Edit</button>
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
                onChange={updatePassword ? handleChange : null}
                style={updatePassword ? selectedColor : null}
                placeholder="Enter Password"
                required
                />
                </div>
              <button onClick={() => setUpdatePassword(!updatePassword)}className="edit-toggle">Edit</button>
            </div>
            <div className="inline-input-field">
              <label className="label-manage-account"  htmlFor="zipcode" id="zip-code">ZIP CODE</label>
              <input
                className="manage-account-input"
                type="text"
                value={user.zipcode}
                onChange={updateZipCode ? handleChange : null}
                style={updateZipCode ? selectedColor : null}
                name="zipcode"
                placeholder="enter Zip Code"
                required
              />
              <button onClick={() => setUpdateZipCode(!updateZipCode)}className="edit-toggle">Edit</button>
            </div>
            {showImageInput ?
              <div className="inline-input-field">
                <label htmlFor="imgURL">IMAGE URL</label>
                <input
                  className="manage-account-input"
                  type="text"
                  name="imgURL"
                  value={user.imgURL}
                  onChange={updateImgUrl ? handleChange : null}
                  style={updateImgUrl ? selectedColor: null}
                  placeholder="enter Zip Code"
                  required
                />
                <button onClick={() => setUpdateImgUrl(!updateImgUrl)} className="edit-toggle">Edit</button>
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