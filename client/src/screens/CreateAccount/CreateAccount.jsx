import React, { useState } from "react";
import CreateAccountForm from "../../components/CreateAccount/CreateAccountForm";
import StyledDiv from "./StyledCreateAccount";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";
import Layout from "../../components/shared/Layout/Layout";

function AddTransportationType() {
  const [imagePreview, setImagePreview] = useState("");

  return (
    <Layout>
      <StyledDiv>
        <div className="top-container">
          <div className="top-left-container">
            <LogoBanner title="Create Your Account" />
          </div>
          <div className="top-right-container"></div>
        </div>
        <div className="middle-container">
          <CreateAccountForm
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
        </div>
      </StyledDiv>
    </Layout>
  );
}

export default AddTransportationType;
