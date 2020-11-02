import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner'
import './ManageAccount.css';

export default function ManageAccount(props) {
  const [showImageInput, setShowImageInput] = useState(false)


  return (
    <div>
      <Layout>
        <LogoBanner title="Manage Your Account" />
        <div className="manage-account-main">
          <form className="manage-account-form">
            <div className="inline-input-field">
              <label htmlFor="name">NAME</label>
              <input
                className="manage-account-input"
                type="text"
                name="name"
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
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="inline-input-field">

              <label htmlFor="password">PASSWORD</label>
              <input
                className="manage-account-input"
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="inline-input-field">

              <label htmlFor="zipcode">ZIP CODE</label>
              <input
                className="manage-account-input"
                type="text"
                name="zipcode"
                placeholder="enter Zip Code"
                required
              />
            </div>
            {showImageInput ?
              <div className="inline-input-field">
                <label htmlFor="zipcode">ZIP CODE</label>
                <input
                  className="manage-account-input"
                  type="text"
                  name="zipcode"
                  placeholder="enter Zip Code"
                  required
                />
              </div> : <></>}
            <div className="buttons">
              <button type="submit" className="save-changes">SAVE CHANGES</button>
              <button className="delete-button">DELETE ACCOUNT</button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}