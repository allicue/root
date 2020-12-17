import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import DeleteAccountConfirm from "./DeleteAccountConfirm/DeleteAccountConfirm";
import Layout from "../../components/shared/Layout/Layout";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";
import Leaf from "../../Assets/Icons/ROOT_Leaf.png";
import Title from "./ManageAccountStyled";
import { updateUser, getUser } from "../../services/users";
import { useStateValue } from "../../components/LoggedInUser/LoggedInUserContext";
import "./ManageAccount.css";

export default function ManageAccount() {
  const [updated, setUpdated] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [managed, setManaged] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [{ loggedInUser }, dispatch] = useStateValue();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    imgURL: "",
    zipcode: "",
  });

  let userID = loggedInUser?._id;

  useEffect(() => {
    const fetchUser = async () => {
      if (userID) {
        const user = await getUser(userID);
        setUser(user);
        return () => {
          setUser(user);
        };
      }
    };
    fetchUser(user);
  }, [updated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => setDeleteConfirm(!deleteConfirm), 500);
    await updateUser(userID, user);
    setUpdated(!updated);
    setManaged(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDeleteConfirm(!deleteConfirm);
  };

  const handleImageSelect = () => {
    setShowImageInput(!showImageInput);
  };

  if (managed) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <Title>
        <Layout>
          <LogoBanner title="Manage Your Account" />
          <div className="manage-account-main">
            {deleteConfirm ? (
              <DeleteAccountConfirm
                dispatch={dispatch}
                loggedInUser={loggedInUser}
                id={userID}
                setDeleteConfirm={setDeleteConfirm}
              />
            ) : (
              <></>
            )}
            <div className="user-image-parent">
              <img
                className="user-photo"
                src={user.imgURL ? user.imgURL : Leaf}
                alt={user.name}
              />
              <p className="toggle-input-img" onClick={handleImageSelect}>
                Edit
              </p>
            </div>
            <form className="manage-account-form" onSubmit={handleSubmit}>
              <div className="inline-input-field">
                <label className="label-manage-account" htmlFor="name">
                  Name
                </label>
                <input
                  className="manage-account-input"
                  type="text"
                  name="name"
                  value={user?.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inline-input-field">
                <label className="label-manage-account" htmlFor="email">
                  Email
                </label>
                <input
                  className="manage-account-input"
                  type="text"
                  name="email"
                  value={user?.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inline-input-field">
                <label className="label-manage-account" htmlFor="password">
                  Password
                </label>
                <input
                  className="manage-account-input"
                  id="password-manage-account"
                  type="password"
                  name="password"
                  value={user?.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inline-input-field">
                <label
                  className="label-manage-account"
                  htmlFor="zipcode"
                  id="zip-code"
                >
                  Zip Code
                </label>
                <input
                  className="manage-account-input"
                  type="text"
                  value={user?.zipcode}
                  onChange={handleChange}
                  name="zipcode"
                  required
                />
              </div>
              {showImageInput ? (
                <div className="inline-input-field">
                  <label className="label-manage-account" htmlFor="imgURL">
                    Image URL
                  </label>
                  <input
                    className="manage-account-input"
                    type="text"
                    name="imgURL"
                    value={user?.imgURL}
                    onChange={handleChange}
                    required
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="edit-buttons-container">
                <button
                  type="submit"
                  className="changes-button"
                  id="save-changes"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleClick}
                  className="changes-button"
                  id="delete-account"
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </Layout>
      </Title>
    </div>
  );
}
