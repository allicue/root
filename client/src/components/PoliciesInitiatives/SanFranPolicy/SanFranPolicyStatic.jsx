import React from "react";
import { Link } from "react-router-dom";
import Styled from "./Styled";

function SanFranPolicyStatic() {
  return (
    <>
      <Styled>
        <div className="top-container">
          <div className="top-left-container">
            {/* <p className="page-direction">
              <Link to="/">Home</Link>/{" "}
              <Link to="/policies-and-initiatives">Policies + Initiatives</Link>
            </p>
            <Link to="/">
              <img
                className="root-logo"
                src="https://i.imgur.com/mV0w6j7.png"
                alt="ROOT Logo"
              />
            </Link>
            <h1 className="title">SAN FRANSISCO</h1> */}
          </div>
          <div className="top-right-container">
         <div className="input-container">
            <p className="enter-location">Or enter your location:</p>
            <input
              className="top-right-input"
              type="text"
              placeholder="Zipcode or City, State"
            />
            </div>1
          </div>
        </div>
        <div className="middle-container">
          <div className="content-container">
            <img
              className="content-image"
              src="https://i.imgur.com/TKt1r4C.png"
              alt="Commuter Benefits Ordinance"
            />
            <div className="box-text-container">
              <h1 className="box-text-title">Commuter Benefits Ordinance</h1>
              <p className="box-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod
              </p>
            </div>
          </div>

          <div className="content-container">
            <img
              className="content-image"
              src="https://i.imgur.com/1gxvw3j.png"
              alt="Tenant Bicycle Parking"
            />
            <div className="box-text-container">
              <h1 className="box-text-title">Tenant Bicycle Parking </h1>
              <p className="box-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod{" "}
              </p>
            </div>
          </div>

          <div className="content-container">
            <img
              className="content-image"
              src="https://i.imgur.com/IbItVIU.png"
              alt="Congestion Pricing"
            />
            <div className="box-text-container">
              <h1 className="box-text-title">Congestion Pricing </h1>
              <p className="box-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod
              </p>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
}

export default SanFranPolicyStatic;
