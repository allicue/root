import React from "react";
import AddTransportationTypeForm from "../../components/AddTransportationType/AddTransportationTypeForm";
import StyledDiv from "./StyledAddTransportationType.js";
import Layout from "../../components/shared/Layout/Layout";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";

function AddTransportationType() {
  return (
    <>
      <Layout>
        <StyledDiv>
          <div className="top-left-container">
            <LogoBanner title="Add Transportation Type" />
          </div>
          <div className="top-right-container"></div>
          <div className="middle-container">
            <AddTransportationTypeForm />
          </div>
        </StyledDiv>
      </Layout>
    </>
  );
}

export default AddTransportationType;
