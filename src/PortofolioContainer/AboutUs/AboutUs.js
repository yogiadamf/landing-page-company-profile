import React from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./AboutUs.css";
import img1 from "../../assets/Home/bisnis-strategi.jpeg";
import img2 from "../../assets/Home/digitalisasi.jpeg";
import img3 from "../../assets/Home/risk.jpeg";
import invoice from "../../assets/Home/invoicing.svg"
import support from "../../assets/Home/support.svg"
import survey from "../../assets/Home/survey.svg"

export default function AboutUs(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="about-us-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-us-parent">
        <h1>We help more than 1500 companies from all sectors</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
      </div>
      <div className="about-us-grid">
        <div className="grid-item">
          <div className="about-us-card">
            <img className="card-img" src={img1} alt="img1"></img>
            <div className="card-content">
              <h1> Business strategy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="/">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="about-us-card">
            <img className="card-img" src={img2} alt="img1"></img>
            <div className="card-content">
              <h1> Digitalization</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="/">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="about-us-card">
            <img className="card-img" src={img3} alt="img1"></img>
            <div className="card-content">
              <h1> Risk assessment</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="/">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="about-us-section">
        <div className="about-us-content">
          <div className="header">
            <h1>
              {" "}
              We are building software solution that solves your business
              challenges
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.{" "}
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-icon">
              <img src={invoice} alt="invoicing"/>
              </div>
              <h2 class="card-title">Invoicing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <img src={support} alt="invoicing"/>
              </div>
              <h2 class="card-title">Support</h2>
              <p>
                Lorem ipsum dolor sit amet, consectur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
              <img src={survey} alt="invoicing"/>
              </div>
              <h2 class="card-title">Surveying</h2>
              <p>
                Lorem ipsum dolor sit amet, consectur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
