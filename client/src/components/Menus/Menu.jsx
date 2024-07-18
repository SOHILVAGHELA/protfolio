import React from "react";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcReading,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import { LiaUser } from "react-icons/lia";

import { FcBusinessman } from "react-icons/fc";

import "./Menu.css";
function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="/images/me.jpg" className="" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcReading />
                Education
              </div>

              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>

              <div className="nav-link">
                <FcVideoProjector />
                Project
              </div>

              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome title="Home" />
            </div>
            <div className="nav-link">
              <FcAbout title="About" />
            </div>
            <div className="nav-link">
              <FcReading title="Education" />
            </div>

            <div className="nav-link">
              <FcBiotech title="Tech Stack" />
            </div>

            <div className="nav-link">
              <FcVideoProjector title="Project" />
            </div>

            <div className="nav-link">
              <FcBusinessContact title="Contact" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
