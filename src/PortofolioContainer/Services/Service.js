import React from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Service.css";
import imgService from "../../assets/Home/service.jpg";
import author from "../../assets/Home/author.png";
import vidioCover from "../../assets/Home/vidioCover.jpeg"

export default function Service(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="service-container screen-container fade-in"
      id={props.id || ""}
    >
      <section className="service-section">
        <div className="service-content">
          <img src={imgService} alt="services" />
          <div className="service-content-header">
            <h1>
              Energy of a start-up combined with 30 years of experience.
              <button>See Job Vacansies</button>
            </h1>
          </div>
        </div>
      </section>
      <div className="service-parent">
        <div className="service-parent-header">
          <h2>Finsweet Was A Dream To Work with</h2>
          <img src={vidioCover} alt="Vidio Cover">
          </img>
          
        </div>
        <p>
            Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
            Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus
            eleifend nec felis vel auctor.
          </p>
        <div className="service-parent-author">
          <img src={author} alt="author"></img>
          <div class="service-parent-details">
            <p>Chikelu Neo</p>
            <p className="title">CEO at MazeAI</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
