import React from "react";
import logo1 from "../../../assets/Home/logo1.svg";
import logo2 from "../../../assets/Home/logo3.svg";
import logo3 from "../../../assets/Home/logo2.svg";
import men from "../../../assets/Home/men.png";

import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <h1>Prosper with our bespoke solutions</h1>
          </div>
          <div className="profile-details-role">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
          </div>
          <div className="profile-options">
            <a href="/">
              <button className="btnservice">See Our Services</button>
            </a>
            <a className="noborder" href="/">
              See All Services
            </a>
          </div>
          <p className="profile-details-company">Worked with 100+ Companies</p>
          <div className="icon">
            <div className="icon-logo">
              <img src={logo1} alt="logo1"></img>
              <img src={logo2} alt="logo2"></img>
              <img src={logo3} alt="logo3"></img>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
            <img src={men} alt="men" width={500}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
