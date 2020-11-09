import React from "react";
import { Link } from "react-router-dom";
import StyledPoliciesInitiatives from "./StyledPoliciesInitiatives";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";

function PoliciesInitiativesStatic() {
  return (
    <>
      <StyledPoliciesInitiatives>
        <div className="top-left-container">
          <LogoBanner title="Policies + Initiatives" />
        </div>
        <div className="wrapper">
          <div className="top-right-container">
            <div className="input-container">
              <p className="enter-location">Or enter your location:</p>
              <input
                className="top-right-input"
                type="text"
                placeholder="Zipcode or City, State"
              />
            </div>
          </div>
          <div className="middle-wrapper">
            <div className="middle-container">
              <div className="middle-left">

                <div className="content-container" >
                  <Link className="image-text" to="/san-fransisco">
                    <div className="content-image-container" id="sf-image-container">
                      <div className="title-span-sf">
                        <h1 className="image-text">SAN FRANCISCO</h1>
                      </div>
                    </div>
                  </Link>
                  <div className="box-text-container">
                    <p className="box-text1">Commuter Benefits Ordinance </p>
                    <p className="box-text1"> Tenant Bicycle Parking </p>
                    <p className="box-text1"> Congestion Pricing</p>
                    <p className="box-text-small">California EPA ></p>
                  </div>
                </div>

                <div className="content-container">
                  <div className="content-image-container" id="la-image-container">
                    <div className="title-span-sf">
                      <h1 className="image-text">LOS ANGELES</h1>
                    </div>
                  </div>
                  <div className="box-text-container">
                    <p className="box-text">Lorem ipsum dolor sir amet </p>
                    <p className="box-text"> Ut wisi enim ad </p>
                    <p className="box-text"> Duis autem vel eum</p>
                    <p className="box-text-small">California EPA ></p>
                  </div>
                </div>
                <div className="content-container">
                  <div className="content-image-container" id="portland-image-container">
                    <div className="title-span-short">
                      <h1 className="image-text">PORTLAND</h1>
                    </div>
                  </div>
                  <div className="box-text-container">
                    <p className="box-text">Lorem ipsum dolor sir amet </p>
                    <p className="box-text"> Ut wisi enim ad </p>
                    <p className="box-text"> Duis autem vel eum</p>
                    <p className="box-text-small">Oregon EPA ></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-right">

              <div className="content-container" >
                <div className="content-image-container" id="seattle-image-container">
                  <div className="title-span-short">
                    <h1 className="image-text">SEATTLE</h1>
                  </div>
                </div>
                <div className="box-text-container">
                  <p className="box-text">Lorem ipsum dolor sir amet </p>
                  <p className="box-text"> Ut wisi enim ad </p>
                  <p className="box-text"> Duis autem vel eum</p>
                  <p className="box-text-small">Washington EPA ></p>
                </div>
              </div>

              <div className="content-container">
                <div className="content-image-container" id="ny-image-container">
                  <div className="title-span-ny">
                    <h1 className="image-text">NEW YORK</h1>
                  </div>
                </div>
                <div className="box-text-container">
                  <p className="box-text">Lorem ipsum dolor sir amet </p>
                  <p className="box-text"> Ut wisi enim ad </p>
                  <p className="box-text"> Duis autem vel eum</p>
                  <p className="box-text-small">New York EPA ></p>
                </div>
              </div>
              
              <div className="content-container">
                <div className="content-image-container" id="chicago-image-container">
                  <div className="title-span-short">
                    <h1 className="image-text">CHICAGO</h1>
                  </div>
                </div>
                <div className="box-text-container">
                  <p className="box-text">Lorem ipsum dolor sir amet </p>
                  <p className="box-text"> Ut wisi enim ad </p>
                  <p className="box-text"> Duis autem vel eum</p>
                  <p className="box-text-small">Illinois EPA ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledPoliciesInitiatives>
    </>
  );
}

export default PoliciesInitiativesStatic;
