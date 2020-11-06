import React, {useContext} from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/shared/Layout/Layout"
import AccountRoot from "../../Assets/Icons/ROOT_Logo_Primary.svg"
import { LoggedInUserContext } from "../../components/LoggedInUser/LoggedInUserContext";
import "./AccountConfirm.css";

function AccountConfirm(props) {
  const [loggedInUser] = useContext(LoggedInUserContext);

  return (
    <Layout>
      <div className="root-parent">
      <img src={AccountRoot} alt="Root logo" className="account-root" />
      </div>
      <div className="welcome-parent">
        <h3>
          Welcome to ROOT, {loggedInUser.name}!
        </h3>
      </div>
      <div className="button-parent">
        <button type="button" className="account-button"><Link to="/" className="continue">Continue</Link></button>
      </div>
    </Layout>
  )
}

export default AccountConfirm