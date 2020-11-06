import React, { useState, useEffect, useContext } from 'react';
import DeleteAccountConfirm from './DeleteAccountConfirm/DeleteAccountConfirm'
import Layout from '../../components/shared/Layout/Layout';
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner';
import { updateUser, deleteUser, getUser } from '../../services/users';
import { LoggedInUserContext } from '../../components/LoggedInUser/LoggedInUserContext'
import './ManageAccount.css';

export default function ManageAccount(props) {
  const [updated, setUpdated] = useState(false)
  const [showImageInput, setShowImageInput] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [loggedInUser] = useContext(LoggedInUserContext)


  const [user, setUser] = useState({
    name: '',
    email:'',
    password:'',
    imgURL: '',
    zipcode:''
  });

  // Temporary ID to test CRUD 
  // Will take signedInUser._id state when user sign-in is implemented
  let userID = loggedInUser._id


  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(userID);
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
    await updateUser(userID, user)
    setUpdated(!updated)
  }

  const handleClick = (e) => {
    e.preventDefault();
    setDeleteConfirm(!deleteConfirm)
  }

  const handleImageSelect = () => {
    setShowImageInput(!showImageInput)
  }

  return (
    <div>
      <Layout>
        <LogoBanner title="Manage Your Account" />
        <div className="manage-account-main">
          {deleteConfirm ? <DeleteAccountConfirm id={userID} setDeleteConfirm={setDeleteConfirm}/> : <></>}
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
                  required
                />
              </div> : <></>}
            <div className="edit-buttons-container">
              <button type="submit" className="changes-button" id="save-changes">SAVE CHANGES</button>
              <button onClick={handleClick}className="changes-button" id="delete-account">DELETE ACCOUNT</button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}