import React from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Careers.css";
import services from "../../assets/Home/services.jpeg";
import careers from "../../assets/Home/careers.jpg";

export default function Careers(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div
      className="careers-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="careers-parent">
        <h1>The energy of a start-up combined with 30 years of experience.</h1>
        <img src={services} alt="me"/>
      </div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
        suscipit tellus et pellentesque.
      </p>
      <div className="careers-grid">
        <div className="grid-item">
          <div className="careers-card">
            <div className="card-content">
              <h1> 15+</h1>
              <h2> Awards received</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="careers-card">
            <div className="card-content">
              <h1> 500+</h1>
              <h2> Clients served</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="careers-section">
        <div className="careers-content">
          <button className="button-highlihted">Business Strategy</button>
          <button className="button-transparent">Digitalization</button>
          <button className="button-transparent">Risk Assesment</button>
          <div className="header">
            <h1>
              {" "}
              Helping clients with research and strategy for their business
            </h1>
            <img src={careers} alt="bisnis" />
          </div>
          <div className="header-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
            <p>
              Mattis purus. Vivamus commodo suscipit tellus et pellent.
              Curabitur sit amet eros blan esque.
            </p>
            <a href="/">
                See all services <span>&rarr;</span>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}
