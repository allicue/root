import React from "react";
import { Link } from "react-router-dom";
import Styled from "./Styled";
import LogoBanner from '../../components/shared/LogoBanner/LogoBanner'

function PoliciesInitiativesStatic() {
  return (
    <>
      <Styled>
        <div className="top-left-container">
          <LogoBanner title="Policies + Initiatives" />
        </div>
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
        <div className="middle-container">
          <div className="middle-left">
            <div className="content-container">
              <img
                className="content-image"
                src="https://i.imgur.com/XX7kg1z.png"
                alt="San Fransisco"
              />
              <Link
                className="image-text"
                to="/policies-and-initiatives/san-fransisco"
              >
                SAN FRANSISCO
              </Link>
              <div className="box-text-container">
                <p className="box-text">Commuter Benefits Ordinance </p>{" "}
                <p className="box-text"> Tenant Bicycle Parking </p>{" "}
                <p className="box-text"> Congestion Pricing</p>{" "}
                <p className="box-text-small">California EPA ></p>{" "}
              </div>
            </div>

            <div className="content-container">
              <img
                className="content-image"
                src="https://i.imgur.com/WYjE0sv.jpg"
                alt="Los Angeles"
              />
              <h1 className="image-text">LOS ANGELES</h1>
              <div className="box-text-container">
                <p className="box-text">Lorem ipsum dolor sir amet </p>{" "}
                <p className="box-text"> Ut wisi enim ad </p>{" "}
                <p className="box-text"> Duis autem vel eum</p>{" "}
                <p className="box-text-small">California EPA ></p>
              </div>
            </div>

            <div className="content-container">
              <img
                className="content-image"
                src="https://i.imgur.com/Jvc4VTr.jpg"
                alt="Seattle"
              />
              <h1 className="image-text">PORTLAND</h1>
              <div className="box-text-container">
                <p className="box-text">Lorem ipsum dolor sir amet </p>{" "}
                <p className="box-text"> Ut wisi enim ad </p>{" "}
                <p className="box-text"> Duis autem vel eum</p>{" "}
                <p className="box-text-small">California EPA ></p>
              </div>
            </div>
          </div>
          <div className="middle-right">
            <div className="content-container">
              <img
                className="content-image"
                src="https://i.ibb.co/Rcy7c1S/seattle-citiypolicies-hi-res.png"
                alt="Seattle"
              />
              <h1 className="image-text">SEATTLE</h1>
              <div className="box-text-container">
                <p className="box-text">Lorem ipsum dolor sir amet </p>{" "}
                <p className="box-text"> Ut wisi enim ad </p>{" "}
                <p className="box-text"> Duis autem vel eum</p>{" "}
                <p className="box-text-small">California EPA ></p>
              </div>
            </div>

            <div className="content-container">
              <img
                className="content-image"
                src="https://i.imgur.com/x9wKRcK.jpg"
                alt="New York"
              />
              <h1 className="image-text">NEW YORK</h1>
              <div className="box-text-container">
                <p className="box-text">Lorem ipsum dolor sir amet </p>{" "}
                <p className="box-text"> Ut wisi enim ad </p>{" "}
                <p className="box-text"> Duis autem vel eum</p>{" "}
                <p className="box-text-small">California EPA ></p>
              </div>
            </div>

            <div className="content-container">
              <img
                className="content-image"
                src="https://i.imgur.com/xiZTdOz.jpg"
                alt="Chicago"
              />
              <h1 className="image-text">CHICAGO</h1>
              <div className="box-text-container">
                <p className="box-text">Lorem ipsum dolor sir amet </p>{" "}
                <p className="box-text"> Ut wisi enim ad </p>{" "}
                <p className="box-text"> Duis autem vel eum</p>{" "}
                <p className="box-text-small">California EPA ></p>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
}

export default PoliciesInitiativesStatic;
